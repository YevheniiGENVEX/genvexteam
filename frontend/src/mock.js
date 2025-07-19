// Mock data for GENVEX Team website

export const mockData = {
  // Company Information
  company: {
    name: "GENVEX Team",
    location: "Hamburg, Germany",
    type: "Official Amazon DSP",
    description: "Hamburg's premier Amazon Delivery Service Partner committed to excellence in delivery services and employee satisfaction."
  },

  // Contact Information
  contact: {
    address: "Zamok 20, 21029 Hamburg, Germany",
    email: "genvexteam@gmail.com",
    phone: "+49 176 400 0000"
  },

  // FAQ Data
  faqs: [
    {
      id: 1,
      question: "What are the working hours for delivery drivers?",
      answer: "Our delivery drivers typically work 8-hour shifts starting around 7:00 AM. We offer full-time positions with approximately 40 hours per week, including some weekend work as needed."
    },
    {
      id: 2,
      question: "Do I need my own vehicle?",
      answer: "No, you don't need your own vehicle. GENVEX Team provides all delivery vehicles, which are modern, well-maintained vans equipped with GPS and delivery technology."
    },
    {
      id: 3,
      question: "What kind of training do you provide?",
      answer: "We offer comprehensive paid training covering vehicle operation, delivery procedures, customer service, safety protocols, and use of Amazon's delivery technology. Training typically takes 3-5 days."
    },
    {
      id: 4,
      question: "What is the starting salary and are there bonuses?",
      answer: "Starting salary is €14.50 per hour with opportunities for performance-based bonuses up to €300 monthly. We also offer regular salary reviews and advancement opportunities."
    },
    {
      id: 5,
      question: "Do you provide uniforms and equipment?",
      answer: "Yes, we provide uniforms, safety equipment, delivery scanners, and all necessary tools. You'll need to have a smartphone for the delivery app, but we'll guide you through the setup."
    },
    {
      id: 6,
      question: "What are the physical requirements?",
      answer: "Drivers should be able to lift packages up to 23kg, walk for extended periods, and work in various weather conditions. We provide training on proper lifting techniques and safety procedures."
    },
    {
      id: 7,
      question: "How do I apply and what's the hiring process?",
      answer: "Submit your application through our contact form or email. The process includes application review, phone interview, in-person interview, background check, and drug screening. The entire process typically takes 1-2 weeks."
    },
    {
      id: 8,
      question: "Do you offer benefits and career advancement?",
      answer: "We offer various benefits including health insurance options, paid time off, and employee discounts. There are opportunities to advance to driver trainer, dispatcher, or management roles within our growing network."
    }
  ],

  // Application Data (for mock form submissions)
  applications: []
};

// Mock API functions
export const mockAPI = {
  // Submit application
  submitApplication: async (applicationData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const application = {
          id: Date.now(),
          ...applicationData,
          submittedAt: new Date().toISOString(),
          status: 'pending'
        };
        mockData.applications.push(application);
        resolve({
          success: true,
          message: "Application submitted successfully! We'll contact you within 2-3 business days.",
          applicationId: application.id
        });
      }, 1000);
    });
  },

  // Get FAQ data
  getFAQs: async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          data: mockData.faqs
        });
      }, 300);
    });
  },

  // Contact form submission
  submitContact: async (contactData) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          success: true,
          message: "Thank you for your message! We'll get back to you within 24 hours."
        });
      }, 800);
    });
  }
};