import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function AuthPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuth();

    const handleLogin = async () => {
        try {
            await login(username, password);
        } catch (error) {
            alert("Login failed");
        }
    };

    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleLogin}>Login</button>
        </div>
    );
}
