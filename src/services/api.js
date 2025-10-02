import axios from "axios";

// Base API URL - Vercel backend
const API_BASE_URL =
  import.meta.env.VITE_API_URL || "https://sydrixai-website-backend.vercel.app";

// Create axios instance with default config
const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 30000, // 30 seconds timeout for Vercel
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false, // Set to false to avoid CORS issues
});

// Request interceptor
api.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor for error handling
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // Handle common error responses
    if (error.response?.status === 409) {
      // Conflict - user already exists
      return Promise.reject({
        ...error,
        message: error.response.data?.message || "User already exists",
      });
    }

    if (error.response?.status === 400) {
      // Validation error
      return Promise.reject({
        ...error,
        message: error.response.data?.message || "Validation failed",
        errors: error.response.data?.errors || [],
      });
    }

    if (error.response?.status >= 500) {
      // Server error
      return Promise.reject({
        ...error,
        message: "Server error. Please try again later.",
      });
    }

    // Handle network errors (CORS, timeout, connection issues)
    if (!error.response) {
      let errorMessage = "Network error. Please check your connection.";

      if (error.code === "ECONNABORTED") {
        errorMessage = "Request timeout. Please try again.";
      } else if (error.code === "ERR_NETWORK") {
        errorMessage = "Network error. Check your internet connection.";
      } else if (error.code === "ERR_BLOCKED") {
        errorMessage = "Request blocked. Check CORS configuration.";
      }

      return Promise.reject({
        ...error,
        message: errorMessage,
      });
    }

    return Promise.reject(error);
  }
);

// API Services
export const apiServices = {
  // User Registration (Join Waitlist)
  registerUser: async (userData) => {
    try {
      const response = await api.post("/api/user-creation", {
        fullname: userData.name || userData.fullname,
        email: userData.email,
        phone: userData.phone,
        category: userData.interest || userData.category || "student",
      });

      return {
        success: true,
        data: response.data,
        message: "Registration successful!",
      };
    } catch (error) {
      // If it's a CORS or network error, provide a helpful message
      if (error.code === "ECONNABORTED" || error.code === "ERR_NETWORK") {
        throw new Error(
          "Unable to connect to server. Please try again later or contact support."
        );
      }

      // Re-throw the error with the message from our interceptor
      throw new Error(
        error.message || "Registration failed. Please try again."
      );
    }
  },

  // Contact Form Submission
  submitContactForm: async (contactData) => {
    try {
      const response = await api.post("/api/contact-form", {
        fullname: contactData.fullName || contactData.fullname,
        email: contactData.email,
        phone: contactData.phone,
        message: contactData.message,
        subject: contactData.subject || "General Inquiry",
      });

      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      // Pass through the original error with all its properties
      throw error;
    }
  },

  // Test API connection
  testConnection: async () => {
    try {
      const response = await api.get("/");
      return {
        success: true,
        data: response.data,
      };
    } catch (error) {
      throw {
        success: false,
        message: "Failed to connect to server",
        originalError: error,
      };
    }
  },
};

// Export api instance for direct use if needed
export default api;
