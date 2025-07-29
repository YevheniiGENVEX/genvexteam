from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
from pathlib import Path
from pydantic import BaseModel, Field
from typing import List
import uuid
from datetime import datetime
import httpx

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Create the main app without a prefix
app = FastAPI()

# Create a router with the /api prefix
api_router = APIRouter(prefix="/api")

# Telegram configuration
TELEGRAM_BOT_TOKEN = os.environ.get('TELEGRAM_BOT_TOKEN')
TELEGRAM_CHAT_IDS = os.environ.get('TELEGRAM_CHAT_IDS', '').split(',')

# Define Models
class StatusCheck(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=datetime.utcnow)

class StatusCheckCreate(BaseModel):
    client_name: str

class ContactApplication(BaseModel):
    name: str
    email: str
    phone: str
    position: str
    message: str = ""

class ContactApplicationResponse(BaseModel):
    success: bool
    message: str
    application_id: str = None

# Telegram message formatting
async def send_telegram_notification(application_data: ContactApplication):
    """Send application notification to Telegram"""
    if not TELEGRAM_BOT_TOKEN or not TELEGRAM_CHAT_IDS:
        logging.warning("Telegram configuration not found")
        return False
    
    # Format the message
    message = f"""🔔 Новая заявка / Neue Bewerbung

👤 Имя / Name: {application_data.name}
📧 Email: {application_data.email}
📱 Телефон / Telefon: {application_data.phone}
💼 Позиция / Position: {application_data.position}

💬 Сообщение / Nachricht:
{application_data.message if application_data.message else 'Не указано / Nicht angegeben'}

⏰ Время подачи / Einreichungszeit: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}"""

    try:
        async with httpx.AsyncClient() as client:
            for chat_id in TELEGRAM_CHAT_IDS:
                if chat_id.strip():  # Skip empty chat IDs
                    url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
                    data = {
                        "chat_id": chat_id.strip(),
                        "text": message,
                        "parse_mode": "HTML"
                    }
                    response = await client.post(url, json=data)
                    if response.status_code != 200:
                        logging.error(f"Failed to send Telegram message to {chat_id}: {response.text}")
                        return False
        return True
    except Exception as e:
        logging.error(f"Error sending Telegram notification: {str(e)}")
        return False

# Add your routes to the router instead of directly to app
@api_router.get("/")
async def root():
    return {"message": "Hello World"}

@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_dict = input.dict()
    status_obj = StatusCheck(**status_dict)
    _ = await db.status_checks.insert_one(status_obj.dict())
    return status_obj

@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    status_checks = await db.status_checks.find().to_list(1000)
    return [StatusCheck(**status_check) for status_check in status_checks]

@api_router.post("/submit-application", response_model=ContactApplicationResponse)
async def submit_application(application: ContactApplication):
    """Submit contact form application and send Telegram notification"""
    try:
        # Generate application ID
        application_id = str(uuid.uuid4())
        
        # Store in database
        application_data = {
            "id": application_id,
            "name": application.name,
            "email": application.email,
            "phone": application.phone,
            "position": application.position,
            "message": application.message,
            "submitted_at": datetime.utcnow(),
            "status": "pending"
        }
        
        await db.applications.insert_one(application_data)
        
        # Send Telegram notification
        telegram_sent = await send_telegram_notification(application)
        
        if telegram_sent:
            logging.info(f"Application {application_id} submitted and Telegram notification sent")
            return ContactApplicationResponse(
                success=True,
                message="Bewerbung erfolgreich eingereicht! Wir werden Sie innerhalb von 2-3 Werktagen kontaktieren.",
                application_id=application_id
            )
        else:
            logging.warning(f"Application {application_id} submitted but Telegram notification failed")
            return ContactApplicationResponse(
                success=True,
                message="Bewerbung eingereicht! Benachrichtigung wird nachgesendet.",
                application_id=application_id
            )
            
    except Exception as e:
        logging.error(f"Error submitting application: {str(e)}")
        raise HTTPException(status_code=500, detail="Fehler beim Einreichen der Bewerbung")

# Include the router in the main app
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configure logging
logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)

@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
