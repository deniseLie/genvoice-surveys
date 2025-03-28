import { AuthProvider } from "../context/AuthContext";
import "../styles/globals.css"; 
import "../styles/auth.css";
import "../styles/survey.css";
import "../styles/adminDashboard.css";
import "../styles/settings.css"
import "../styles/navbar.css";
import "../styles/AboutMe.css";
import "../styles/audio.css";

export default function MyApp({ Component, pageProps }) {
    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}
