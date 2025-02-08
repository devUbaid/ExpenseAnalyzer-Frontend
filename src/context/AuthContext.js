// AuthContext.js
import React, { createContext, useState, useContext, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check if token exists in localStorage on app load
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            setUser({ token }); // You may need to fetch user details from API
        }
    }, []);

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('token', userData.token);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('token');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
