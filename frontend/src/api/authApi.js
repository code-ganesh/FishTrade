// client/src/api/authApi.js
import api from './axiosConfig';

export const registerUser = async (userData) => {
    try {
        const response = await api.post('/auth/register', userData);
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};

export const loginUser = async (credentials) => {
    try {
        const response = await api.post('/auth/login', credentials);
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};

export const getUserProfile = async () => {
    try {
        const response = await api.get('/auth/profile');
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};

export const updateUserProfile = async (userData) => {
    try {
        const response = await api.put('/auth/profile', userData);
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};

// Admin specific: Get all users
export const getAllUsers = async () => {
    try {
        const response = await api.get('/users');
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};

// Admin specific: Update any user by ID
export const updateUserById = async (id, userData) => {
    try {
        const response = await api.put(`/users/${id}`, userData);
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};

// Fisherman specific: Update fisherman details
export const updateFishermanDetails = async (details) => {
    try {
        const response = await api.put('/users/fisherman/details', details);
        return response.data;
    } catch (error) {
        throw error.response.data || error.message;
    }
};