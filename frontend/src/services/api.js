// API service for GENVEX Team application
import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8001';

// Create axios instance with default config
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000, // 30 seconds timeout
});

// Add request interceptor for logging
apiClient.interceptors.request.use(
  (config) => {
    console.log(`API Request: ${config.method?.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('API Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for error handling
apiClient.interceptors.response.use(
  (response) => {
    console.log(`API Response: ${response.status} ${response.config.url}`);
    return response;
  },
  (error) => {
    console.error('API Response Error:', error.response?.status, error.response?.data);
    return Promise.reject(error);
  }
);

// API functions
export const api = {
  // Submit contact form application
  submitApplication: async (applicationData) => {
    try {
      const response = await apiClient.post('/api/submit-application', {
        name: applicationData.name,
        email: applicationData.email,
        phone: applicationData.phone,
        position: applicationData.position,
        message: applicationData.message || ''
      });

      return {
        success: response.data.success,
        message: response.data.message,
        applicationId: response.data.application_id
      };
    } catch (error) {
      console.error('Failed to submit application:', error);
      
      // Return a user-friendly error message
      if (error.response?.status === 500) {
        return {
          success: false,
          message: 'Server-Fehler. Bitte versuchen Sie es später erneut oder kontaktieren Sie uns direkt.',
          error: error.response.data?.detail || 'Server error'
        };
      } else if (error.code === 'ECONNABORTED') {
        return {
          success: false,
          message: 'Zeitüberschreitung. Bitte prüfen Sie Ihre Internetverbindung und versuchen Sie es erneut.',
          error: 'Timeout'
        };
      } else {
        return {
          success: false,
          message: 'Netzwerkfehler. Bitte prüfen Sie Ihre Internetverbindung.',
          error: error.message
        };
      }
    }
  },

  // Health check endpoint
  healthCheck: async () => {
    try {
      const response = await apiClient.get('/api/');
      return response.data;
    } catch (error) {
      console.error('Health check failed:', error);
      throw error;
    }
  }
};

export default api;