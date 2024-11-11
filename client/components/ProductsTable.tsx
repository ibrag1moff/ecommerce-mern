"use client";
// types
import { Product } from "@/types/product";
import Link from "next/link";
import { useEffect, useState } from "react";

// icons
import { FaEdit } from "react-icons/fa";
import ProductPopup from "./ProductPopup";

interface ProductsTableProps {
    products: Product[];
}

export default function ProductsTable({ products }: ProductsTableProps) {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(
        null
    );

    const closePopup = () => {
        setSelectedProduct(null);
    };

    useEffect(() =>
        window.addEventListener("click", () => setSelectedProduct(null))
    );

    return (
        <>
            <table
                onClick={(e) => e.stopPropagation()}
                className="min-w-full border-separate "
            >
                <thead>
                    <tr className="tracking-[1px] uppercase bg-slate-400">
                        <th>№</th>
                        <th className="p-2">edit</th>
                        <th>product name</th>
                        <th>category</th>
                        <th>top rated</th>
                        <th>price</th>
                        <th>created at</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, i) => (
                        <tr
                            key={product._id}
                            className={`${
                                i % 2 ? "bg-slate-400" : "bg-[#e5e5e5]"
                            } text-center uppercase tracking-[1px] font-medium`}
                        >
                            <td className="p-2">{i + 1}</td>
                            <td className="p-2">
                                <button
                                    onClick={() => setSelectedProduct(product)}
                                >
                                    <FaEdit size={25} />
                                </button>
                            </td>
                            <td className="xl:hover:underline">
                                <Link href={`/products/${product._id}`}>
                                    {product.title}
                                </Link>
                            </td>
                            <td>{product.category}</td>
                            <td>{product.popular ? "yes" : "no"}</td>
                            <td>
                                {new Intl.NumberFormat("en-US", {
                                    style: "currency",
                                    currency: "USD",
                                }).format(product.price)}
                            </td>
                            <td>
                                {new Date(
                                    product.createdAt
                                ).toLocaleDateString()}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedProduct && (
                <ProductPopup
                    product={selectedProduct}
                    closePopup={closePopup}
                />
            )}
        </>
    );
}
