import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(() => {
        if (typeof window !== 'undefined') {
            const storedUser = localStorage.getItem("user");
            return storedUser ? JSON.parse(storedUser) : null;
        }
        return null;
    });
    const router = useRouter();

    useEffect(() => {
        if (user) {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            localStorage.removeItem("user");
        }
    }, [user]);

    // LOGIN 
    const login = async (username, password) => {
        try {
            const userData = await authService.login(username, password);
            if (!userData) return;
            setUser(userData);

            console.log(userData)
            router.push('/');
        } catch (error) {
            console.log("Login failed:", error);
            throw error;
        }
    };

    // REGISTER
    const register = async (username, password) => {
        try {
            const userData = await authService.register(username, password);
            if (!userData) return;
            setUser(userData);
            router.push('/');
        } catch (error) {
            console.log("Registration failed:", error);
            throw error;
        }
    };

    // LOGOUT
    const logout = async () => {
        try {
            await authService.logout();
            setUser(null);
            localStorage.removeItem("user"); // Clear stored user
            router.push("/auth");
        } catch (error) {
            console.log("Logout failed:", error);
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