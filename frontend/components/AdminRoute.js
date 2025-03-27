import { useEffect } from "react";
import { useRouter } from "next/router";
import useAuth from "../hooks/useAuth";

export default function AdminRoute({ children }) {
    const { user } = useAuth();  // Get the logged-in user
    const router = useRouter();

    useEffect(() => {
        if (user?.role !== "admin") {
            router.push("/");  // Redirect non-admins to home page
        }
    }, [user, router]);

    return user?.role === "admin" ? children : null;
}
