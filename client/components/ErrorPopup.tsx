"use client";
// next
import React, { useEffect } from "react";

// context
import { usePopup } from "@/context/PopupContext";

type ErrorPopupProps = {
    message: string;
};

export default function ({ message }: ErrorPopupProps) {
    const { errorMessage, hideError } = usePopup();

    useEffect(() => {
        window.addEventListener("click", () => hideError());
    });

    return (
        <div
            className={
                errorMessage
                    ? "fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
                    : "hidden"
            }
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full sm:w-[400px] sm:min-h-[250px] rounded-xl mx-2 p-4 h-max bg-white shadow"
            >
                <div className="flex flex-col items-center justify-center h-full">
                    <img
                        className="w-[100px] mt-[-80px]"
                        src="/fail.png"
                        alt="Error"
                    />
                    <h1 className="text-3xl font-medium text-center tracking-[3px] lg:pb-4">
                        {message || "Something went wrong.Try again later!"}
                    </h1>
                </div>
            </div>
        </div>
    );
}
