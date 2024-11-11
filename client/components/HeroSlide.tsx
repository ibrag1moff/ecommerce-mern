// next
import Link from "next/link";

// framer motion
import { motion } from "framer-motion";

interface HeroSlideProps {
    subtext: string;
    title: string;
    text: string;
    btnHref: string;
    bg: string;
}

export default function HeroSlide({
    subtext,
    title,
    text,
    btnHref,
    bg,
}: HeroSlideProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`${bg} bg-center bg-cover py-[120px] h-screen`}
        >
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col justify-center items-center h-full gap-8 text-white px-2"
            >
                <h1 className="text-5xl text-center font-medium md:text-7xl uppercase">
                    {title}
                </h1>
                <Link
                    href={`/${btnHref}`}
                    className="bg-white py-3 px-9 text-black uppercase tracking-[2px] font-semibold xl:hover:bg-[#e5e5e5] transition-all duration-300"
                >
                    discover now
                </Link>
            </motion.div>
        </motion.div>
    );
}
