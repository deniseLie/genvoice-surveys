import { useRouter } from 'next/router'; // Import useRouter hook
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { user, logout } = useAuth();
    const [currentUser, setCurrentUser] = useState(null);
    const router = useRouter(); // Initialize router for programmatic navigation

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    if (currentUser === null) {
        return null; // Prevent rendering before user data is available
    }

    // Function to handle navigation
    const handleNavigation = (href) => {
        router.push(href);
    };

    return (
        <nav className="navbar">
            <div className="navbar-links-left">
                <button onClick={() => handleNavigation("/")} className="navbar-link button-link">Home</button>
                {currentUser?.role === 'admin' && 
                    <button onClick={() => handleNavigation("/admin-dashboard")} className="navbar-link button-link">Admin</button>
                }
            </div>
            <div className="navbar-links-right">
                <button onClick={() => handleNavigation("/settings")} className="navbar-link button-link">Settings</button>
                <button onClick={logout} className="navbar-link button-link">Logout</button>
            </div>
        </nav>
    );
}
