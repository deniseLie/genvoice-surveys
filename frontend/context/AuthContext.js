import { createContext, useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/router';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    // LOGIN 
    const login = async (username, password) => {
        try {
            const userData = await authService.login(username, password);
            setUser(userData);
            router.push('/');
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    // REGISTER
    const register = async (username, password) => {
        try {
            const userData = await authService.register(username, password);
            setUser(userData);
            router.push('/');
        } catch (error) {
            console.error("Registration failed:", error);
            throw error;
        }
    };

    // LOGOUT
    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
            router.push("/auth");
        } catch (error) {
            console.error("Logout failed:", error);
        }
    }

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