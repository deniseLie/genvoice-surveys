import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function AuthPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authType, setAuthType] = useState("Login");
    const [error, setError] = useState("");

    const { login, register } = useAuth();

    // Function : Handle login
    const handleLogin = async () => {
        try {
            setError("");
            if (authType == "Login") await login(username, password);
            else                     await register(username, password);
        } catch (error) {
            setError(error?.message);
            console.log(error);
            // setError(`${authType} failed. Please try again.`);
        }
    };

    // Function : Change auth type
    const changeType = () => {
        setAuthType(authType == "Login" ? "Register" : "Login");
        setError("");
    }

    return (
        <div>
            <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />

            <button onClick={handleLogin}>{authType}</button>
            <button onClick={changeType}>
                Change to {authType == "Login" ? "Register" : "Login"}
            </button>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );
}
