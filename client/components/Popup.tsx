"use client";
// context
import { usePopup } from "@/context/PopupContext";
import { useEffect } from "react";

interface PopupProps {
    message: string;
}

export default function Popup({ message }: PopupProps) {
    const { modalActive, closeModal } = usePopup();

    useEffect(() => {
        window.addEventListener("click", () => closeModal());
    });

    return (
        <div
            className={`${
                modalActive
                    ? "fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black/70 z-30"
                    : "hidden"
            }`}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="w-full sm:w-[400px] sm:min-h-[250px] rounded-xl mx-2 p-4 h-max bg-white shadow"
            >
                <div className="flex flex-col items-center justify-center gap-8  h-full">
                    <img
                        className="w-[150px] mt-[-40px]"
                        src="/success.png"
                        alt="Success"
                    />
                    <h1 className="text-3xl font-medium text-center tracking-[3px]">
                        {message || "Success."}
                    </h1>
                </div>
            </div>
        </div>
    );
}
