import { createContext, useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authService } from '../services/authService';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    
    const router = useRouter();

    const [user, setUser] = useState(null);
    const [authToken, setAuthToken] = useState(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const storedUser = localStorage.getItem("user");
            setUser(storedUser ? JSON.parse(storedUser) : null);
        }

        if (typeof window !== "undefined") {
            setAuthToken(localStorage.getItem("authToken") || null);
        }
    }, []);
    
    // Sync token with axios default headers
    useEffect(() => {
        setAuthToken(authToken); // Set token in API client
    }, [authToken]);

    // Auto-logout if no token
    useEffect(() => {
        if (!authToken) {
            logout();
        }
    }, [authToken]);

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
            
            setUser(userData?.user);
            setAuthToken(userData?.token);
            localStorage.setItem("authToken", userData?.token);

            // console.log(userData)
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

            setUser(userData?.user);
            setAuthToken(userData?.token);
            localStorage.setItem("authToken", userData?.token);

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
        } catch (error) {
            console.log("Logout failed:", error);
        } finally {
            setUser(null);
            setAuthToken(null);
            localStorage.removeItem("user");
            localStorage.removeItem("authToken");
            router.push("/auth");
        }
    }

    const value = {
        user,
        authToken,
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