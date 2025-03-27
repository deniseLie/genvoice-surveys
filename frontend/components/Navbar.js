import Link from "next/link";
import useAuth from "../hooks/useAuth";
import { useEffect, useState } from "react";

export default function Navbar() {
    const { user, logout } = useAuth();
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        setCurrentUser(user);
    }, [user]);

    if (currentUser === null) {
        return null; // Prevent rendering before user data is available
    }

    return (
        <nav className="bg-blue-600 p-4 flex justify-between">
            <div className="flex space-x-4">
                
                <Link href="/" className="text-white">Home</Link>
                {currentUser?.user?.role == 'admin' && 
                    <Link href="/admin-dashboard" className="text-white">Admin</Link>
                }
                <Link href="/settings" className="text-white">Settings</Link>
                <button onClick={logout} className="text-white">Logout</button>
            </div>
        </nav>
    );
}