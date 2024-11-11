"use client";
// next
import Link from "next/link";
import { FormEvent, useState } from "react";

// context
import { useAuth } from "@/context/AuthContext";

// components
import ErrorPopup from "./ErrorPopup";

// framer motion
import { motion } from "framer-motion";

interface AccountFormProps {
    title: string;
    btnTitle: string;
    link: string;
    submitFunction: any;
}

export default function AccountForm({
    title,
    link,
    btnTitle,
    submitFunction,
}: AccountFormProps) {
    const { username, setUsername, password, setPassword, error } = useAuth();

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        await submitFunction(e, username, password);
    };

    return (
        <>
            <motion.div
                initial={{ x: -600, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 items-start justify-center"
            >
                <h1 className="text-xl font-semibold tracking-[2px] text-center uppercase">
                    {title}
                </h1>
                <form
                    onSubmit={handleSubmit}
                    className="flex flex-col items-center justify-center gap-4 w-full"
                >
                    <input
                        className="border border-black p-3 xs:w-[350px] placeholder:text-black placeholder:font-normal outline-none"
                        type="text"
                        id="username"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        className="border border-black p-3 xs:w-[350px] placeholder:text-black placeholder:font-normal outline-none"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <button
                        className="bg-black text-white py-3 w-full px-12 font-medium uppercase tracking-[2px]"
                        type="submit"
                    >
                        {title}
                    </button>
                </form>
                <Link
                    href={`/${link}`}
                    className="border border-black p-3 w-[350px] text-center font-medium"
                >
                    {btnTitle}
                </Link>
            </motion.div>
        </>
    );
}
