import Link from "next/link";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";

export default function Navbar() {
    const { user, logout } = useAuth();

    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <nav className="bg-blue-600 p-4 flex justify-between">
            <div className="flex space-x-4">
                
                <Link href="/" className="text-white">Home</Link>
                {user?.user?.role == 'admin' && <Link href="/admin" className="text-white">Admin</Link>}
                <Link href="/settings" className="text-white">Settings</Link>
                <button onClick={logout} className="text-white">Logout</button>
            </div>
        </nav>
    );
}