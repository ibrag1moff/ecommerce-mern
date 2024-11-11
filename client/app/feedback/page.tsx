"use client";
// framer motion
import { motion } from "framer-motion";

// icons
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";

export default function Feedback() {
    return (
        <div className="flex flex-col items-center justify-center md:flex-row-reverse md:flex-wrap md:justify-evenly gap-16 py-12 h-screen">
            <motion.form
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col gap-6 w-full md:w-[500px] px-4"
            >
                <div className="flex flex-col gap-1">
                    <label
                        className="uppercase font-medium tracking-[2px]"
                        htmlFor="name"
                    >
                        Name
                    </label>
                    <input
                        className="border border-black p-3 w-full lg:w-[500px] placeholder:text-black placeholder:font-normal outline-none"
                        type="text"
                        id="name"
                        placeholder="Your name..."
                        required
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        className="uppercase font-medium tracking-[2px]"
                        htmlFor="email"
                    >
                        Email
                    </label>
                    <input
                        className="border border-black p-3 w-full lg:w-[500px] placeholder:text-black placeholder:font-normal outline-none"
                        type="text"
                        id="email"
                        placeholder="Your email..."
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label
                        className="uppercase font-medium tracking-[2px]"
                        htmlFor="msg"
                    >
                        Message
                    </label>
                    <textarea
                        className="border border-black p-3 w-full lg:w-[500px] placeholder:text-black placeholder:font-normal outline-none"
                        id="msg"
                        placeholder="Message..."
                    ></textarea>
                </div>
                <button
                    className="bg-black py-3 px-9 w-full lg:w-[500px] text-white uppercase font-medium tracking-[2px]"
                    type="submit"
                >
                    send
                </button>
            </motion.form>
            <motion.div
                initial={{ x: -300, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center gap-8"
            >
                <h1 className="text-3xl font-medium tracking-[2px] md:text-4xl">
                    Get In Touch
                </h1>
                <ul>
                    <li className="flex items-center gap-2 font-medium">
                        <span>
                            <FaPhoneAlt />
                        </span>
                        +1 (555) 123-4567
                    </li>
                    <li className="flex items-center gap-2 font-medium">
                        <span>
                            <MdOutlineMail />
                        </span>
                        example@gmail.com
                    </li>
                </ul>
            </motion.div>
        </div>
    );
}
