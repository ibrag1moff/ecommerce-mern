"use client";
// components
import AccountForm from "@/components/AccountForm";

// context
import { useAuth } from "@/context/AuthContext";

export default function SignIn() {
    const { handleLogin } = useAuth();

    return (
        <div className="flex items-center justify-center w-full h-screen">
            <AccountForm
                title="Sign In"
                link="signup"
                btnTitle="Create an account now"
                submitFunction={handleLogin}
            />
        </div>
    );
}
