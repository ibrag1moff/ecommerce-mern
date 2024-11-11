"use client";
// next
import Link from "next/link";

// types
import { Product } from "@/types/product";

// components
import ProductCard from "./ProductCard";

// context
import { useAuth } from "@/context/AuthContext";

type ProductsList = {
    id?: string;
    products: Product[];
};

export default function ProductsList({ id, products }: ProductsList) {
    const { user } = useAuth();
    return (
        <div className="flex flex-col items-center justify-center pb-12">
            <div
                id={id}
                className="flex flex-col items-center justify-center gap-8 px-4 s:flex-row s:flex-wrap py-12"
            >
                {products?.map((product: Product, i: number) => (
                    <ProductCard key={product._id} i={i} product={product} />
                ))}
            </div>
            {user?.isAdmin && (
                <Link href={"/createProduct"} className="bg-black py-3 px-8">
                    <span className="font-medium text-white uppercase tracking-[2px]">
                        add new products
                    </span>
                </Link>
            )}
        </div>
    );
}
