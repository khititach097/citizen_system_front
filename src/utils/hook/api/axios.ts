import axios from 'axios';

const apiEndpoint = process.env.NEXT_PUBLIC_REACT_APP_SERVICE || 'http://localhost:8080';

// Create axios instance with default config
const axiosInstance = axios.create({
  baseURL: apiEndpoint,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // You can add auth tokens here
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // Handle 401 - Unauthorized
    if (error.response?.status === 401) {
      // Handle token refresh or logout logic here
      // localStorage.removeItem('token');
      // window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;