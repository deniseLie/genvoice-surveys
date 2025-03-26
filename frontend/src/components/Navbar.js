import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function Navbar() {
//   const navigate = useNavigate();
  const { user, logout } = useAuth();

  return (
    <nav className="bg-blue-600 p-4 flex justify-between">
        <div className="flex space-x-4">
            {/* <button onClick={() => navigate('/')} className="text-white">Home</button>
            <button onClick={() => navigate('/admin')} className="text-white">Admin</button>
            <button onClick={() => navigate('/settings')} className="text-white">Settings</button> */}
        </div>
        <div>
            {/* {user ? (
                <button onClick={logout} className="text-white">Logout</button>
            ) : (
                <button onClick={() => navigate('/login')} className="text-white">Login</button>
            )} */}
        </div>
    </nav>
  );
}