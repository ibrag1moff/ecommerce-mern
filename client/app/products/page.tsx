"use client";
// next
import { useEffect, useState } from "react";

// utils
import { getPopularProducts, searchProduct } from "@/utils/products";

// components
import ProductsList from "@/components/ProductsList";
import SearchInput from "@/components/SearchInput";

// spinners
import { BeatLoader } from "react-spinners";

export default function Products() {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [isSearching, setIsSearching] = useState<boolean>(false);

    const fetchPopularProducts = async () => {
        const popularProducts = await getPopularProducts();
        setProducts(popularProducts);
        setIsSearching(false);
    };

    useEffect(() => {
        fetchPopularProducts();
    }, []);

    const handleSearch = async (query: string) => {
        if (query.trim() === "") {
            fetchPopularProducts();
            return;
        }
        setLoading(true);
        setIsSearching(true);
        const searchResults = await searchProduct(query);
        setProducts(searchResults);
        setLoading(false);
    };

    return (
        <div className="py-20">
            <SearchInput onSearch={handleSearch} />
            {isSearching == false ? (
                <h1 className="pt-16 px-4 md:px-12 uppercase text-gray-700 tracking-[2px]">
                    you might be interested
                </h1>
            ) : null}
            {loading && (
                <p className="w-full h-screen flex items-center justify-center">
                    <BeatLoader size={25} />
                </p>
            )}
            {products.length ? (
                <ProductsList id="#!" products={products} />
            ) : (
                <h1 className="flex items-center justify-center text-center text-3xl uppercase tracking-[2px] h-[50vh] px-3">
                    No products found
                </h1>
            )}
        </div>
    );
}
