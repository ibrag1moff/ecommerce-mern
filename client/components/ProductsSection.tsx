"use client";
// next
import Link from "next/link";
import { useEffect } from "react";

// components
import ProductCard from "./ProductCard";
import SectionTitle from "./SectionTitle";

interface ProductsSectionProps {
    data: any;
    title: string;
    href: string;
}

export default function ProductsSection({
    data,
    title,
    href,
}: ProductsSectionProps) {
    return (
        <div className="py-20 relative z-20 border-b">
            <SectionTitle title={title} />
            <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-center gap-y-8">
                {products.map((product: any, i: number) => (
                    <ProductCard key={product._id} product={product} i={i} />
                ))}
            </div>
            <div className="text-center mt-9">
                <Link
                    href={href}
                    className="xl:hover:before:bg-black relative py-3 px-8 D:px-10 overflow-hidden border border-black bg-transparent  text-black transition-all xl:before:absolute before:bottom-0 before:right-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-black before:transition-all before:duration-500 xl:hover:text-white hover:before:left-0 hover:before:w-full"
                >
                    <span className="relative z-10 tracking-[4px] font-medium uppercase">
                        view all
                    </span>
                </Link>
            </div>
        </div>
    );
}
