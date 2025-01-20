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
export default axiosInstance;