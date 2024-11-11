"use client";
// icons
import { FaTimes } from "react-icons/fa";

// types
import { Product } from "@/types/product";

// utils
import { deleteProduct, togglePopular } from "@/utils/products";

// context
import { usePopup } from "@/context/PopupContext";

interface ProductPopupProps {
    product: Product;
    closePopup: () => void;
}

export default function ProductPopup({
    product,
    closePopup,
}: ProductPopupProps) {
    const { openModal, showError } = usePopup();

    const handleDelete = async () => {
        try {
            await deleteProduct(product._id);
            openModal("Product was successfully deleted!");
        } catch (e) {
            showError("Error deleting product");
        }
    };

    const handlePopular = async () => {
        try {
            await togglePopular(product._id);
            openModal("Product was marked as popular");
        } catch (e: any) {
            showError(e.message);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white p-6 rounded-lg shadow-lg w-96"
            >
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-bold mb-1">{product.title}</h2>
                    <button onClick={closePopup}>
                        <FaTimes size={20} />
                    </button>
                </div>
                <p>
                    Category:{" "}
                    <span className="font-semibold">{product.category}</span>
                </p>
                <p>
                    Price:
                    <span className="font-semibold">
                        {new Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                        }).format(product.price)}
                    </span>
                </p>
                <p>
                    Popular:
                    <span className="font-semibold">
                        {product.popular ? "Yes" : "No"}
                    </span>
                </p>
                <div className="flex gap-4 mt-6">
                    <button
                        onClick={handlePopular}
                        className="border border-black text-black px-4 py-2 rounded-md xl:hover:bg-black xl:hover:text-white transition-all duration-300"
                    >
                        Mark as popular
                    </button>

                    <button
                        onClick={handleDelete}
                        className="border border-black text-black px-4 py-2 rounded-md xl:hover:bg-black xl:hover:text-white transition-all duration-300"
                    >
                        Delete
                    </button>
                </div>
            </div>
        </div>
    );
}
