"use client";
// next
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// icons
import { AiOutlineMenu } from "react-icons/ai";
import { GrClose } from "react-icons/gr";
import { LuLogOut } from "react-icons/lu";
import { LuMenu } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";
import { LuUser } from "react-icons/lu";
import { BsBag } from "react-icons/bs";
import { CiUser } from "react-icons/ci";

// context
import { useAuth } from "@/context/AuthContext";

// framer motion
import { motion } from "framer-motion";

export default function Nav() {
    const [navActiveMob, setNavActiveMob] = useState<boolean>(false);
    const [navActive, setNavActive] = useState<boolean>(false);
    const [navScroll, setNavScroll] = useState<boolean>(false);
    const navLinks = [
        {
            title: "Main page",
            href: "/",
        },
        {
            title: "men collection",
            href: "/men",
        },
        {
            title: "women collection",
            href: "/women",
        },
        {
            title: "get in touch",
            href: "/feedback",
        },
        {
            title: "shopping cart",
            href: "/cart",
        },
    ];
    const adminLinks = [
        {
            title: "Create product",
            href: "/createProduct",
        },
        {
            title: "Dashboard",
            href: "/dashboard",
        },
        {
            title: "Assign admin",
            href: "/assign-admin",
        },
    ];
    const { isAuthenticated, handleLogout, user } = useAuth();
    const router = useRouter();

    const pathname = usePathname();

    const handleLogoutClick = async () => {
        await handleLogout();
        router.push("/signin");
    };

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY >= window.innerHeight) {
                setNavScroll(true);
            } else {
                setNavScroll(false);
            }
        });
    });

    return (
        <div className="fixed w-full z-50">
            <nav
                className={`flex items-center justify-between py-2 px-4 md:px-12  text-white ${
                    navScroll || pathname != "/"
                        ? "text-black border-b-2 bg-white"
                        : "text-white"
                }`}
            >
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:flex items-center gap-8"
                >
                    <div
                        className={
                            navScroll || pathname != "/"
                                ? "text-black"
                                : "text-white"
                        }
                    >
                        <button
                            onMouseEnter={() => setNavActive(true)}
                            onMouseLeave={() => setNavActive(false)}
                        >
                            <LuMenu size={35} />
                            {navActive ? (
                                <div className="fixed left-0 top-0 w-1/4 h-full py-9 px-8 bg-white border transition-all duration-300">
                                    <div className="flex flex-col justify-between items-start h-full text-black">
                                        <Link href={"/"} className="text-4xl">
                                            Luca Lombardi
                                        </Link>
                                        <div className="flex flex-col items-start mb-28 gap-3">
                                            {navLinks.map((link, i) => (
                                                <Link
                                                    onClick={() =>
                                                        setNavActive(false)
                                                    }
                                                    className="uppercase hover:underline text-xl font-semibold tracking-[1px] text-black"
                                                    key={i}
                                                    href={link.href}
                                                >
                                                    {link.title}
                                                </Link>
                                            ))}
                                        </div>
                                        <div>
                                            <button className="uppercase font-semibold">
                                                &copy; lombardi 2024
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <div className="fixed left-[-100%] top-0 w-1/4 h-full bg-white border transition-all duration-300">
                                    d
                                </div>
                            )}
                        </button>
                    </div>
                </motion.div>
                <button
                    className={`md:hidden ${
                        navScroll || pathname != "/"
                            ? "text-black"
                            : "text-white"
                    }`}
                    onClick={() => setNavActiveMob(!navActiveMob)}
                >
                    <AiOutlineMenu size={30} />
                </button>
                {/* mobile nav */}
                <div
                    className={
                        navActiveMob
                            ? "fixed left-0 right-0 bottom-0 top-0 p-5 z-30 w-full  h-full text-black bg-white transition-all duration-300"
                            : "fixed left-[-100%] top-0 bottom-0 w-full  h-full transition-all duration-300"
                    }
                >
                    <button
                        onClick={() => setNavActiveMob(false)}
                        className="text-[#000] pt-4 pb-12"
                    >
                        <GrClose size={25} />
                    </button>

                    <div className="flex flex-col gap-8">
                        {navLinks.map((link, i) => (
                            <Link
                                className="font-semibold uppercase text-lg border-b pb-4"
                                key={i}
                                href={link.href}
                                onClick={() => setNavActiveMob(false)}
                            >
                                {link.title}
                            </Link>
                        ))}
                    </div>
                </div>
                {/* mobile nav end */}
                {isAuthenticated ? (
                    <div
                        className={`flex items-center gap-6 ${
                            navScroll || pathname != "/"
                                ? "text-black"
                                : "text-white"
                        }`}
                    >
                        <div
                            className={`flex items-center gap-6 md:gap-12 ${
                                navScroll || pathname != "/"
                                    ? "text-black"
                                    : "text-white"
                            }`}
                        >
                            {user?.isAdmin && (
                                <div className="relative group">
                                    <button className="flex flex-col gap-1 items-center justify-center">
                                        <CiUser size={25} />
                                        <span className="text-[10px] font-medium tracking-[1px]">
                                            Admin
                                        </span>
                                    </button>
                                    <div className="absolute bottom--1/2 right--1/2 mt-3 w-max rounded  bg-white border-2 px-3 py-6 opacity-0 group-hover:opacity-100">
                                        <div className="flex flex-col items-start justify-center gap-4 text-black">
                                            {adminLinks.map((link, i) => (
                                                <Link
                                                    className="xl:hover:underline"
                                                    href={link.href}
                                                    key={i}
                                                >
                                                    {link.title}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            <Link
                                className="flex flex-col gap-1 items-center justify-center"
                                href={"/products"}
                            >
                                <IoIosSearch size={25} />
                                <span className="text-[10px] font-medium tracking-[1px]">
                                    Search
                                </span>
                            </Link>
                            <Link
                                onClick={handleLogoutClick}
                                className="flex flex-col gap-1 items-center justify-center"
                                href={"#!"}
                            >
                                <LuLogOut size={25} />
                                <span className="text-[10px] font-medium tracking-[1px]">
                                    Logout
                                </span>
                            </Link>
                            <Link
                                className="flex flex-col gap-1 items-center justify-center"
                                href={"/cart"}
                            >
                                <BsBag size={25} />
                                <span className="text-[10px] font-medium tracking-[1px]">
                                    Cart
                                </span>
                            </Link>
                        </div>
                    </div>
                ) : (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div
                            className={`flex items-center gap-6 md:gap-12 ${
                                navScroll || pathname != "/"
                                    ? "text-black"
                                    : "text-white"
                            }`}
                        >
                            <Link
                                className="flex flex-col gap-1 items-center justify-center"
                                href={"/products"}
                            >
                                <IoIosSearch size={25} />
                                <span className="text-[10px] font-medium tracking-[1px]">
                                    Search
                                </span>
                            </Link>
                            <Link
                                className="flex flex-col gap-1 items-center justify-center"
                                href={"/signin"}
                            >
                                <LuUser size={25} />
                                <span className="text-[10px] font-medium tracking-[1px]">
                                    Login
                                </span>
                            </Link>
                            <Link
                                className="flex flex-col gap-1 items-center justify-center"
                                href={"/cart"}
                            >
                                <BsBag size={25} />
                                <span className="text-[10px] font-medium tracking-[1px]">
                                    Cart
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </nav>
        </div>
    );
}
