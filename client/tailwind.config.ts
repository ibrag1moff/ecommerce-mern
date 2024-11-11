import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                heroOne:
                    "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/bg.webp')",
                heroTwo:
                    "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/bg2.jpg')",
                heroThree:
                    "linear-gradient(rgba(0,0,0,0.6),rgba(0,0,0,0.6)),url('/bg3.webp')",
                categoryOne:
                    "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/men-collection.webp')",
                categoryTwo:
                    "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/women-collection.jpg')",

                categoryThree:
                    "linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/accessories-collection.webp')",
                women: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/women.avif')",
                men: "linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/men.webp')",
            },
            screens: {
                xs: "350px",
                xss: "400px",
                s: "500px",
            },
        },
    },
    plugins: [],
};
export default config;
