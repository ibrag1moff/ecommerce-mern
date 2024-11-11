"use client";
// next
import { useEffect, useMemo, useRef, useState } from "react";

// utils
import { getAllProducts } from "@/utils/products";

// components
import ProductsTable from "@/components/ProductsTable";

// types
import { Product } from "@/types/product";

export default async function AdminDashboard() {
    const [products, setProducts] = useState<Product[]>([]);
    const [searchQuery, setSearchQuery] = useState<string>("");

    const inputRef = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProducts();
                if (data) setProducts(data);
            } catch (e) {
                console.error(e);
            }
        };
        fetchProducts();
    }, []);

    const filteredProducts = useMemo(() => {
        return products.filter((product: Product) =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [products, searchQuery]);

    return (
        <div className="py-24 px-3 min-h-screen">
            <h1 className="text-center text-4xl font-semibold mb-4 md:text-5xl">
                Admin Dashboard
            </h1>
            <form className="py-8">
                <input
                    className="w-full outline-none border-b border-black mb-4 text-gray-700 placeholder:text-gray-700 text-lg sm:text-2xl lg:text-4xl mt-8 uppercase placeholder:tracking-[2px]"
                    type="text"
                    placeholder="Search for products..."
                    ref={inputRef}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </form>
            <ProductsTable products={filteredProducts} />
        </div>
    );
}
