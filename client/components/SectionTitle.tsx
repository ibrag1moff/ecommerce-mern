"use client";
// framer motion
// import { motion } from "framer-motion";

interface SectionTitleProps {
    title: string;
}

export default function SectionTitle({ title }: SectionTitleProps) {
    return (
        <h1 className="text-center uppercase text-3xl tracking-[5px] md:text-4xl mb-8">
            {title}
        </h1>
    );
}
