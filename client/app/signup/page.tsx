"use client";
// next
import Link from "next/link";

// components
import AccountForm from "@/components/AccountForm";

// context
import { useAuth } from "@/context/AuthContext";

export default function SignUp() {
    const { handleRegister } = useAuth();
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <AccountForm
                title="Sign Up"
                link="signin"
                btnTitle="Log in to existing account"
                submitFunction={handleRegister}
            />
        </div>
    );
}
