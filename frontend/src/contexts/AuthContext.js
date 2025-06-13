// client/src/contexts/AuthContext.js
import React, { createContext, useState, useEffect, useContext } from 'react';
import { loginUser, registerUser, getUserProfile } from '../api/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // For initial profile load

    useEffect(() => {
        const loadUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    // Try to fetch user profile to validate token
                    const profile = await getUserProfile();
                    setUser(profile);
                    setIsAuthenticated(true);
                } catch (error) {
                    console.error('Failed to load user profile:', error);
                    localStorage.removeItem('token'); // Clear invalid token
                    setUser(null);
                    setIsAuthenticated(false);
                }
            }
            setLoading(false);
        };

        loadUser();
    }, []);

    const login = async (credentials) => {
        try {
            const data = await loginUser(credentials);
            localStorage.setItem('token', data.token);
            setUser(data);
            setIsAuthenticated(true);
            return data;
        } catch (error) {
            console.error('Login failed:', error);
            throw error;
        }
    };

    const register = async (userData) => {
        try {
            const data = await registerUser(userData);
            localStorage.setItem('token', data.token);
            setUser(data);
            setIsAuthenticated(true);
            return data;
        } catch (error) {
            console.error('Registration failed:', error);
            throw error;
        }
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, loading, login, register, logout, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);