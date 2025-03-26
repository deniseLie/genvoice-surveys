import { useState } from "react";
import useAuth from "../hooks/useAuth";

export default function AuthPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authType, setAuthType] = useState("Login");

    const { login } = useAuth();

    // Function : Handle login
    const handleLogin = async () => {
        try {
            await login(username, password);
        } catch (error) {
            alert("Login failed");
        }
    };

    // Function : Change auth type
    const changeType = () => {
        setAuthType(authType == "Login" ? "Register" : "Login");
    }

    return (
        <div>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

            <button onClick={handleLogin}>{authType}</button>
            <button onClick={changeType}>Change to {authType == "Login" ? "Register" : "Login"}</button>
        </div>
    );
}
