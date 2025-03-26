import { createContext, useState, useEffect, useCallback } from 'react';
import { loginUser, registerUser } from '../services/auth';
import { useRouter } from 'next/router';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

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
            router.push('/');
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    // REGISTER
    const register = async (username, password) => {
        try {
            const userData = await registerUser(username, password);
            setUser(userData);
            localStorage.setItem('user', JSON.stringify(userData));
            router.push('/');
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    };

    // LOGOUT
    const logout = useCallback(() => {
        setUser(null);
        localStorage.removeItem('user');
        router.push('/login');
    }, [router]);

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