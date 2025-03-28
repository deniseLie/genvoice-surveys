import { useState } from "react";
import useAuth from "../hooks/useAuth";
import { passwordValidate } from '../utils/passwordValidation';

export default function AuthPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [authType, setAuthType] = useState("Login");
    const [error, setError] = useState("");

    const { login, register } = useAuth();

    // Function : Handle login
    const handleLogin = async () => {
        if (!passwordValidate(password)) {
            setError("Password must be at least 8 characters long and contain at least one symbol.");
            return;
        }

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
        <div className="auth-container">
            <div className="auth-box">
                <h2 className="auth-title">{authType}</h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="auth-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="auth-input"
                />
                <button
                    onClick={handleLogin}
                    className="auth-button"
                >
                    {authType}
                </button>
                <button
                    onClick={changeType}
                    className="auth-change-type"
                >
                    Change to {authType === "Login" ? "Register" : "Login"}
                </button>
                {error && <p className="auth-error">{error}</p>}
            </div>
        </div>
    );
}
