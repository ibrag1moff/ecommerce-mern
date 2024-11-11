"use client";
// next & react
import Link from "next/link";

// icons
import { AiOutlinePlus } from "react-icons/ai";

// types
import { Product } from "@/types/product";

// framer motion
import { motion } from "framer-motion";

interface ProductCardProps {
    product: Product;
    i: number;
}

export default function ProductCard({ product, i }: ProductCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            viewport={{ once: true }}
        >
            <Link
                href={`/products/${product._id}`}
                className="flex flex-col gap-1 cursor-pointer w-[300px]"
            >
                <div className="relative group">
                    <img
                        className="w-full h-[300px] object-cover"
                        src={product.image}
                        alt="Product Image"
                    />
                </div>
                <div className="flex items-center justify-between px-1">
                    <h1 className="font-medium tracking-[2px] w-[200px] whitespace-nowrap text-ellipsis overflow-hidden">
                        {product.title}
                    </h1>
                    <span className="font-medium tracking-[2px]">
                        ${product.price}
                    </span>
                </div>
            </Link>
        </motion.div>
    );
}
