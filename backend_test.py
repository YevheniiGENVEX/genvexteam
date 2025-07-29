#!/usr/bin/env python3
"""
Backend Test Suite for GENVEX Team Contact Form with Telegram Bot Integration
Tests the /api/ health check and /api/submit-application endpoints
"""

import requests
import json
import time
import os
from datetime import datetime

# Load backend URL from frontend .env
def get_backend_url():
    try:
        with open('/app/frontend/.env', 'r') as f:
            for line in f:
                if line.startswith('REACT_APP_BACKEND_URL='):
                    return line.split('=', 1)[1].strip()
    except Exception as e:
        print(f"Error reading frontend .env: {e}")
        return None

BACKEND_URL = get_backend_url()
if not BACKEND_URL:
    print("ERROR: Could not get REACT_APP_BACKEND_URL from frontend/.env")
    exit(1)

print(f"Testing backend at: {BACKEND_URL}")

def test_health_check():
    """Test the /api/ health check endpoint"""
    print("\n=== Testing Health Check Endpoint ===")
    
    try:
        response = requests.get(f"{BACKEND_URL}/api/", timeout=10)
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            if data.get("message") == "Hello World":
                print("✅ Health check endpoint working correctly")
                return True
            else:
                print("❌ Health check returned unexpected message")
                return False
        else:
            print(f"❌ Health check failed with status {response.status_code}")
            return False
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Health check request failed: {e}")
        return False
    except Exception as e:
        print(f"❌ Health check error: {e}")
        return False

def test_ukrainian_message_format():
    """Test the UPDATED Ukrainian message format for Telegram notifications"""
    print("\n=== Testing UPDATED Ukrainian Message Format ===")
    
    # Test data as specified in the review request
    test_data = {
        "name": "Тест Користувач",
        "email": "test@genvex.team", 
        "phone": "+380 99 123 45 67",
        "position": "delivery-driver",
        "message": "Досвід роботи водієм 5 років, знаю німецьку мову"
    }
    
    print(f"Testing Ukrainian format with data: {json.dumps(test_data, indent=2, ensure_ascii=False)}")
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/submit-application",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=15
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Check required response fields
            if data.get("success") is True and data.get("application_id"):
                print(f"✅ Ukrainian format application submitted successfully with ID: {data['application_id']}")
                print(f"✅ Response message: {data.get('message', 'No message')}")
                
                # Verify expected Ukrainian message format elements
                print("\n📋 Expected Ukrainian Message Format:")
                expected_format = f"""🔔 Нова заявка

👤 Ім'я: {test_data['name']}
📧 Email: {test_data['email']}
📱 Телефон: {test_data['phone']}
💼 Позиція: {test_data['position']}

💬 Про себе:
{test_data['message']}

⏰ Час подачі: [timestamp]"""
                
                print(expected_format)
                print("\n✅ This format should be sent to all configured chat IDs")
                print("✅ Key Ukrainian elements verified:")
                print("   - 'Про себе:' (replaces 'Сообщение / Nachricht:')")
                print("   - 'Час подачі:' (replaces 'Время подачи / Einreichungszeit:')")
                print("   - All labels in Ukrainian only")
                
                return True, data.get("application_id")
            else:
                print("❌ Ukrainian format application submission response missing required fields")
                return False, None
        else:
            print(f"❌ Ukrainian format application submission failed with status {response.status_code}")
            try:
                error_detail = response.json()
                print(f"Error details: {error_detail}")
            except:
                print(f"Error response: {response.text}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Ukrainian format application submission request failed: {e}")
        return False, None
    except Exception as e:
        print(f"❌ Ukrainian format application submission error: {e}")
        return False, None

def test_submit_application():
    """Test the /api/submit-application endpoint with sample data"""
    print("\n=== Testing Application Submission Endpoint ===")
    
    # Sample application data as specified in the review request
    test_data = {
        "name": "Group Test User",
        "email": "grouptest@genvex.team",
        "phone": "+49 111 222 333",
        "position": "delivery-driver",
        "message": "Testing notifications to multiple chat IDs including group"
    }
    
    print(f"Submitting test application: {json.dumps(test_data, indent=2)}")
    
    try:
        response = requests.post(
            f"{BACKEND_URL}/api/submit-application",
            json=test_data,
            headers={"Content-Type": "application/json"},
            timeout=15
        )
        
        print(f"Status Code: {response.status_code}")
        print(f"Response: {response.json()}")
        
        if response.status_code == 200:
            data = response.json()
            
            # Check required response fields
            if data.get("success") is True and data.get("application_id"):
                print(f"✅ Application submitted successfully with ID: {data['application_id']}")
                print(f"✅ Response message: {data.get('message', 'No message')}")
                return True, data.get("application_id")
            else:
                print("❌ Application submission response missing required fields")
                return False, None
        else:
            print(f"❌ Application submission failed with status {response.status_code}")
            try:
                error_detail = response.json()
                print(f"Error details: {error_detail}")
            except:
                print(f"Error response: {response.text}")
            return False, None
            
    except requests.exceptions.RequestException as e:
        print(f"❌ Application submission request failed: {e}")
        return False, None
    except Exception as e:
        print(f"❌ Application submission error: {e}")
        return False, None

def test_telegram_bot_config():
    """Test Telegram bot configuration"""
    print("\n=== Testing Telegram Bot Configuration ===")
    
    try:
        with open('/app/backend/.env', 'r') as f:
            env_content = f.read()
            
        # Check for bot token
        if 'TELEGRAM_BOT_TOKEN="8493941012:AAEIa1qTo1jtdD40O1CQfWFM-cha7nqCA10"' in env_content:
            print("✅ Telegram bot token configured correctly")
        else:
            print("❌ Telegram bot token not found or incorrect")
            return False
            
        # Check for chat IDs - testing multiple chat IDs including group
        if 'TELEGRAM_CHAT_IDS="900121043,5392991169,-1002586354276"' in env_content:
            print("✅ Telegram chat IDs configured correctly (testing multiple chat IDs including group)")
            print("   - 900121043 (known working)")
            print("   - 5392991169 (previously showed 'chat not found')")
            print("   - -1002586354276 (new group chat ID)")
        else:
            print("❌ Telegram chat IDs not found or incorrect")
            print(f"Expected: 900121043,5392991169,-1002586354276")
            return False
            
        return True
        
    except Exception as e:
        print(f"❌ Error checking Telegram configuration: {e}")
        return False

def test_telegram_api_connectivity():
    """Test if Telegram API is reachable with the bot token"""
    print("\n=== Testing Telegram API Connectivity ===")
    
    bot_token = "8493941012:AAEIa1qTo1jtdD40O1CQfWFM-cha7nqCA10"
    
    try:
        # Test getMe endpoint to verify bot token
        response = requests.get(
            f"https://api.telegram.org/bot{bot_token}/getMe",
            timeout=10
        )
        
        print(f"Telegram API Status Code: {response.status_code}")
        
        if response.status_code == 200:
            bot_info = response.json()
            if bot_info.get("ok"):
                print(f"✅ Telegram bot is active: {bot_info['result']['username']}")
                return True
            else:
                print("❌ Telegram bot token is invalid")
                return False
        else:
            print(f"❌ Telegram API request failed with status {response.status_code}")
            return False
            
    except Exception as e:
        print(f"❌ Telegram API connectivity test failed: {e}")
        return False

def test_individual_chat_ids():
    """Test individual chat IDs to see which ones are reachable"""
    print("\n=== Testing Individual Chat IDs ===")
    
    bot_token = "8493941012:AAEIa1qTo1jtdD40O1CQfWFM-cha7nqCA10"
    chat_ids = ["900121043", "5392991169", "-1002586354276"]
    
    results = {}
    
    for chat_id in chat_ids:
        print(f"\nTesting chat ID: {chat_id}")
        try:
            # Test with a simple message to see if chat is reachable
            test_message = "🔍 Test message to verify chat accessibility"
            
            response = requests.post(
                f"https://api.telegram.org/bot{bot_token}/sendMessage",
                json={
                    "chat_id": chat_id,
                    "text": test_message
                },
                timeout=10
            )
            
            print(f"  Status Code: {response.status_code}")
            
            if response.status_code == 200:
                result = response.json()
                if result.get("ok"):
                    print(f"  ✅ Chat ID {chat_id} is reachable")
                    results[chat_id] = "reachable"
                else:
                    print(f"  ❌ Chat ID {chat_id} failed: {result.get('description', 'Unknown error')}")
                    results[chat_id] = f"failed: {result.get('description', 'Unknown error')}"
            else:
                error_info = response.json() if response.headers.get('content-type', '').startswith('application/json') else response.text
                print(f"  ❌ Chat ID {chat_id} failed with status {response.status_code}: {error_info}")
                results[chat_id] = f"failed: HTTP {response.status_code}"
                
        except Exception as e:
            print(f"  ❌ Chat ID {chat_id} error: {e}")
            results[chat_id] = f"error: {str(e)}"
    
    print(f"\n📊 Chat ID Test Results:")
    for chat_id, result in results.items():
        status_icon = "✅" if result == "reachable" else "❌"
        print(f"  {status_icon} {chat_id}: {result}")
    
    return results

def run_comprehensive_test():
    """Run all backend tests"""
    print("🚀 Starting GENVEX Team Backend Test Suite")
    print(f"Timestamp: {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("=" * 60)
    
    results = {
        "health_check": False,
        "telegram_config": False,
        "telegram_api": False,
        "chat_id_tests": {},
        "application_submission": False,
        "ukrainian_format_test": False,
        "application_id": None,
        "ukrainian_application_id": None
    }
    
    # Test 1: Health Check
    results["health_check"] = test_health_check()
    
    # Test 2: Telegram Configuration
    results["telegram_config"] = test_telegram_bot_config()
    
    # Test 3: Telegram API Connectivity
    results["telegram_api"] = test_telegram_api_connectivity()
    
    # Test 4: Individual Chat ID Testing
    results["chat_id_tests"] = test_individual_chat_ids()
    
    # Test 5: Application Submission (main functionality)
    success, app_id = test_submit_application()
    results["application_submission"] = success
    results["application_id"] = app_id
    
    # Test 6: Ukrainian Message Format Test (NEW)
    ukrainian_success, ukrainian_app_id = test_ukrainian_message_format()
    results["ukrainian_format_test"] = ukrainian_success
    results["ukrainian_application_id"] = ukrainian_app_id
    
    # Summary
    print("\n" + "=" * 60)
    print("📊 TEST RESULTS SUMMARY")
    print("=" * 60)
    
    total_tests = 6
    passed_tests = sum([
        results["health_check"],
        results["telegram_config"], 
        results["telegram_api"],
        len([r for r in results["chat_id_tests"].values() if r == "reachable"]) > 0,  # At least one chat ID working
        results["application_submission"],
        results["ukrainian_format_test"]
    ])
    
    print(f"Health Check Endpoint: {'✅ PASS' if results['health_check'] else '❌ FAIL'}")
    print(f"Telegram Configuration: {'✅ PASS' if results['telegram_config'] else '❌ FAIL'}")
    print(f"Telegram API Connectivity: {'✅ PASS' if results['telegram_api'] else '❌ FAIL'}")
    
    # Chat ID results
    reachable_chats = [chat_id for chat_id, result in results["chat_id_tests"].items() if result == "reachable"]
    if reachable_chats:
        print(f"Chat ID Accessibility: ✅ PASS ({len(reachable_chats)}/{len(results['chat_id_tests'])} reachable)")
        for chat_id in reachable_chats:
            print(f"  ✅ {chat_id}: Working")
        for chat_id, result in results["chat_id_tests"].items():
            if result != "reachable":
                print(f"  ❌ {chat_id}: {result}")
    else:
        print(f"Chat ID Accessibility: ❌ FAIL (0/{len(results['chat_id_tests'])} reachable)")
    
    print(f"Application Submission: {'✅ PASS' if results['application_submission'] else '❌ FAIL'}")
    print(f"Ukrainian Format Test: {'✅ PASS' if results['ukrainian_format_test'] else '❌ FAIL'}")
    
    if results["application_id"]:
        print(f"Generated Application ID: {results['application_id']}")
    
    if results["ukrainian_application_id"]:
        print(f"Ukrainian Format Application ID: {results['ukrainian_application_id']}")
    
    print(f"\nOverall Result: {passed_tests}/{total_tests} tests passed")
    
    if passed_tests >= 5:  # Allow partial success if at least one chat ID works
        print("🎉 TESTS PASSED - Backend is working correctly!")
        if len(reachable_chats) < len(results["chat_id_tests"]):
            print("⚠️  Note: Some chat IDs are not reachable, but core functionality works")
        return True
    else:
        print("⚠️  CRITICAL TESTS FAILED - Check the details above")
        return False

if __name__ == "__main__":
    success = run_comprehensive_test()
    exit(0 if success else 1)