import Link from "next/link";

export default function Footer() {
    const footerLinks = [
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

    return (
        <div className="py-12 md:py-0 px-4 border-t-2">
            <footer className="flex flex-col items-center justify-center gap-20  h-screen">
                <div className="flex flex-col items-center justify-center gap-6">
                    <h1 className="font-semibold text-center">
                        Don’t miss out on limited-time offers, personalized
                        discounts, and the latest innovations.
                    </h1>
                    <form className="flex flex-col gap-4">
                        <input
                            className="border border-black p-3 xs:w-[350px] placeholder:text-black placeholder:font-normal outline-none"
                            type="email"
                            placeholder="Email"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-black py-3 px-12 xs:w-[350px] text-white tracking-[1px] font-medium"
                        >
                            Submit
                        </button>
                    </form>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <h1 className="uppercase font-semibold">
                        scan to learn more
                    </h1>
                    <img src="/QR-code.png" alt="QR code" />
                </div>
                <div className="flex items-center gap-3 lg:gap-12 flex-wrap justify-center">
                    {footerLinks.map((link) => (
                        <Link
                            className="uppercase font-semibold xl:hover:underline"
                            href={link.href}
                        >
                            {link.title}
                        </Link>
                    ))}
                </div>
            </footer>
        </div>
    );
}
