"use client";
// framer motion
import { motion } from "framer-motion";

export default async function WomenHero() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-women bg-center bg-cover h-screen"
        >
            <motion.div
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col gap-4 items-center justify-center h-full"
            >
                <h1 className="text-3xl xs:text-4xl sm:text-5xl font-medium tracking-[3px] uppercase text-white text-center px-4">
                    women collection
                </h1>
            </motion.div>
        </motion.div>
    );
}
