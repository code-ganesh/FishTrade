// client/src/api/axiosConfig.js
import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api', // Your backend URL
    headers: {
        'Content-Type': 'application/json',
    },
});

// Optional: Add an interceptor to include JWT token in requests
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token'); // Assuming you store token in localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default api;