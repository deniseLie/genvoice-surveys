import { createContext, useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser, registerUser } from '../services/auth';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    // LOGIN 
    const login = async (username, password) => {
        try {
            const userData = await loginUser(username, password);
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            navigate('/');
        } catch (error) {
            throw error;
        }
    };

    // REGISTER
    const register = async (username, password) => {
        try {
            const userData = await registerUser(username, password);
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            navigate('/');
        } catch (error) {
            throw error;
        }
    };

    // LOGOUT
    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('user');
        navigate('/login');
    }, [navigate]);

    const value = {
        user,
        isAuthenticated: !!user,
        login, 
        register,
        logout
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;