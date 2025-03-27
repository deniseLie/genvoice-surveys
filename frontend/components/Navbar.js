import Link from "next/link";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
    const { user, logout } = useAuth();

    return (
        <nav className="bg-blue-600 p-4 flex justify-between">
            <div className="flex space-x-4">
                
                <Link href="/" className="text-white">Home</Link>
                {user?.isAdmin && <Link href="/admin" className="text-white">Admin</Link>}
                <Link href="/settings" className="text-white">Settings</Link>
                <button onClick={logout} className="text-white">Logout</button>
                {/* {user ? (
                    <button onClick={logout} className="text-white">Logout</button>
                ) : (
                    <Link href="/auth" className="text-white">Login</Link>
                )} */}
            </div>
        </nav>
    );
}