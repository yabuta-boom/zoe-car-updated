import axios from 'axios';

// Create axios instance with base URL
const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add request interceptor to include auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('auth_token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// API service functions
export const apiService = {
  // Auth endpoints
  login: async (credentials) => {
    const response = await api.post('/auth.php', credentials);
    return response.data;
  },
  
  // Message endpoints
  submitMessage: async (messageData) => {
    const response = await api.post('/messages.php', messageData);
    return response.data;
  },
  
  getMessages: async (status = null) => {
    const params = status ? { status } : {};
    const response = await api.get('/messages.php', { params });
    return response.data;
  },
  
  updateMessageStatus: async (id, status) => {
    const response = await api.put('/messages.php', { id, status });
    return response.data;
  }
};

export default apiService;