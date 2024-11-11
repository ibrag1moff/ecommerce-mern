"use client";
// next
import { useRef, useEffect } from "react";

// framer motion
import { motion } from "framer-motion";

interface SearchInputProps {
    onSearch: (query: string) => void;
}

export default function SearchInput({ onSearch }: SearchInputProps) {
    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(e.target.value);
    };

    return (
        <motion.form
            initial={{ opacity: 0, x: -500 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}
            className="px-4 md:px-12"
        >
            <input
                ref={inputRef}
                className="w-full outline-none border-b border-black pb-3 text-gray-700 placeholder:text-gray-700 text-lg sm:text-2xl lg:text-4xl mt-8 uppercase placeholder:tracking-[2px]"
                type="text"
                onChange={handleChange}
                placeholder="what are you searching for?"
            />
        </motion.form>
    );
}
