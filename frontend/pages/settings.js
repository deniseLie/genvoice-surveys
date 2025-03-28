import { useState } from 'react';
import Navbar from '../components/Navbar';
import useAuth from "../hooks/useAuth";
import { passwordValidate } from '../utils/passwordValidation';
import { userService } from '../services/userService';

export default function Settings() {
    // STATE
    const [changingPass, setChangingPass] = useState(false);
    const [newPassword, setNewPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    
    // Hook
    const { user } = useAuth();

    // Function: Change password
    const handleChangePassword = async () => {

        if (!passwordValidate(newPassword)) {
            setErrorMessage("Password must be at least 8 characters long and contain at least one symbol.");
            return;
        }

        try {
            await userService.updatePassword(newPassword);
            setSuccessMessage("Password changed successfully.");
            setNewPassword('');
            setChangingPass(false); // Reset and hide the form
        } catch (e) {
            setErrorMessage(e.response?.data?.message || "Error changing password.");
        }
    };

    return (
        <div className="settings-container">
            <Navbar />
            <h2 className="settings-title">Settings</h2>

            {/* Display User's Username and Role */}
            <div className="user-info">
                <h3>Username: {user?.username}</h3>
                <h3>Role: {user?.role}</h3>
            </div>

            {/* Change Password Section */}
            {changingPass ? (
                <div className="password-change-section">
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="password-input"
                    />
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                    {successMessage && <p className="success-message">{successMessage}</p>}
                    <button
                        onClick={handleChangePassword}
                        disabled={!newPassword}
                        className="update-password-btn"
                    >
                        Update Password
                    </button>
                    <button
                        onClick={() => setChangingPass(false)}
                        className="cancel-change-btn"
                    >
                        Cancel
                    </button>
                </div>
            ) : (
                <button
                    className="change-password-btn"
                    onClick={() => setChangingPass(true)}
                >
                    Change Password
                </button>
            )}
        </div>
    );
}
