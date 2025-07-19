# GENVEX Team Website - Backend Integration Contracts

## Overview
This document outlines the integration contracts between the frontend and backend for the GENVEX Team recruitment website. The frontend currently uses mock data and needs to be connected to a real database.

## Current Mock Data Structure

### 1. Application Submissions
**Frontend Mock Location:** `mock.js - mockAPI.submitApplication()`
**Current Mock Response:**
```javascript
{
  success: true,
  message: "Application submitted successfully!",
  applicationId: generated_id
}
```

**Data Being Captured:**
- name (string)
- email (string) 
- phone (string)
- position (string) - defaults to 'delivery-driver'
- message (string, optional)
- submittedAt (timestamp)
- status (string) - defaults to 'pending'

### 2. FAQ Data
**Frontend Mock Location:** `mock.js - mockAPI.getFAQs()`
**Current Mock Response:**
```javascript
{
  success: true,
  data: [
    {
      id: number,
      question: string,
      answer: string
    }
  ]
}
```

### 3. Contact Form Submissions
**Frontend Mock Location:** `mock.js - mockAPI.submitContact()`
**Current Mock Response:**
```javascript
{
  success: true,
  message: "Thank you for your message!"
}
```

## Required Backend Implementation

### 1. Database Models

#### Applications Collection
```javascript
{
  _id: ObjectId,
  name: String (required),
  email: String (required),
  phone: String (required),
  position: String (required, default: 'delivery-driver'),
  message: String (optional),
  submittedAt: Date (default: now),
  status: String (default: 'pending'),
  // Additional fields for tracking
  source: String (default: 'website'),
  followUpDate: Date (optional),
  notes: String (optional)
}
```

#### FAQs Collection
```javascript
{
  _id: ObjectId,
  question: String (required),
  answer: String (required),
  order: Number (for sorting),
  isActive: Boolean (default: true),
  createdAt: Date (default: now),
  updatedAt: Date (default: now)
}
```

### 2. API Endpoints to Implement

#### Application Endpoints
- **POST /api/applications** - Submit new application
- **GET /api/applications** - Get all applications (admin only, for future admin panel)
- **GET /api/applications/:id** - Get specific application
- **PUT /api/applications/:id** - Update application status

#### FAQ Endpoints  
- **GET /api/faqs** - Get all active FAQs (public endpoint)
- **POST /api/faqs** - Create new FAQ (admin only, for future admin panel)
- **PUT /api/faqs/:id** - Update FAQ (admin only)
- **DELETE /api/faqs/:id** - Delete FAQ (admin only)

#### Contact Endpoints
- **POST /api/contact** - Submit contact form (general inquiries)

### 3. Frontend Integration Points

#### Files to Update:
1. **Contact.jsx** 
   - Replace `mockAPI.submitApplication()` with real API call
   - Update error handling and success messages

2. **FAQ.jsx**
   - Replace `mockAPI.getFAQs()` with real API call
   - Add loading states and error handling

3. **Remove mock.js dependencies**
   - Update imports in all components
   - Remove mock.js file after integration

### 4. API Response Format Standards

#### Success Response:
```javascript
{
  success: true,
  data: any, // actual data
  message: string // optional success message
}
```

#### Error Response:
```javascript
{
  success: false,
  error: string, // error message
  code: string // optional error code
}
```

### 5. Validation Requirements

#### Application Submission:
- Name: required, min 2 chars, max 100 chars
- Email: required, valid email format
- Phone: required, basic phone format validation
- Position: required, enum values
- Message: optional, max 1000 chars

#### FAQ:
- Question: required, min 10 chars, max 500 chars  
- Answer: required, min 20 chars, max 2000 chars

### 6. Email Notifications (Future Enhancement)
- Send confirmation email to applicant
- Send notification email to HR team
- Email templates for different application statuses

### 7. Security Considerations
- Input validation and sanitization
- Rate limiting for form submissions
- Basic spam protection (honeypot fields)
- CORS configuration for production

### 8. Environment Variables
- EMAIL_SERVICE_CONFIG (for notifications)
- ADMIN_EMAIL (for application notifications)
- RATE_LIMIT_CONFIG

## Migration Plan

### Phase 1: Backend Setup
1. Create database models
2. Implement API endpoints
3. Add validation middleware
4. Test with Postman/curl

### Phase 2: Frontend Integration  
1. Update Contact.jsx to use real API
2. Update FAQ.jsx to use real API
3. Remove mock.js dependencies
4. Test full integration

### Phase 3: Enhancement
1. Add email notifications
2. Implement basic admin functions
3. Add analytics tracking
4. Performance optimization

## Testing Checklist
- [ ] Application form submission works
- [ ] FAQ loading works
- [ ] Form validation errors display correctly
- [ ] Success messages show properly
- [ ] Mobile responsiveness maintained
- [ ] Database persistence verified
- [ ] Error handling works as expected