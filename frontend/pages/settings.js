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
        <div>
            <Navbar />
            <h2>Settings</h2>

            {/* Display User's Username (Assuming you have a user object) */}
            <h3>Username: {user?.username}</h3>
            <h3>Role: {user?.role}</h3>

            {/* Change Password Section */}
            {changingPass ? (
                <div>
                    <input
                        type="password"
                        placeholder="New Password"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                    {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
                    <button
                        onClick={handleChangePassword}
                        disabled={!newPassword}
                    >
                        Update Password
                    </button>
                    <button onClick={() => setChangingPass(false)}>Cancel</button>
                </div>
            ) : (
                <button onClick={() => setChangingPass(true)}>Change Password</button>
            )}
        </div>
    );
}
