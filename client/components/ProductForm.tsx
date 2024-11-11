"use client";
// next
import { ChangeEvent, FormEvent, useState } from "react";

// utils
import { createProduct } from "@/utils/products";

// context
import { usePopup } from "@/context/PopupContext";

// components
import Popup from "./Popup";
import ErrorPopup from "./ErrorPopup";

export default function ProductForm() {
    // data
    const [title, setTitle] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [image, setImage] = useState<string>("");
    const [price, setPrice] = useState<number | "">("");
    const [description, setDescription] = useState<string>("");

    const { modalActive, openModal, closeModal, showError, hideError } =
        usePopup();

    const handleCreate = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const newPrice = Number(price);

            if (newPrice < 0 || isNaN(newPrice)) {
                console.error("Invalid price:", newPrice);
                return; // Exit the function early
            }
            console.log({ title, description, newPrice, category, image });

            await createProduct(title, category, image, newPrice, description);

            // Clear form fields
            setTitle("");
            setCategory("");
            setImage("");
            setPrice("");
            setDescription("");

            openModal("New product was successfully created!");
        } catch (e) {
            console.error("Error creating product:", e);

            showError("Failed to create product. Please try again.");

            // Clear form fields
            setTitle("");
            setCategory("");
            setImage("");
            setPrice("");
            setDescription("");
        }
    };

    const handlePriceChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        // Only update state if the value is a valid number or an empty string
        setPrice(value === "" ? "" : parseFloat(value));
    };

    return (
        <form
            onSubmit={handleCreate}
            className="flex flex-col lg:flex-row lg:flex-wrap gap-6 items-center justify-center"
        >
            <div className="flex flex-col lg:flex-row lg:flex-wrap gap-6 items-center justify-center w-full">
                <div className="flex flex-col gap-1 w-full lg:w-[500px]">
                    <label
                        className="uppercase font-medium tracking-[2px]"
                        htmlFor="title"
                    >
                        title
                    </label>
                    <input
                        className="border border-black p-2 w-full lg:w-[500px] placeholder:text-black placeholder:font-normal outline-none"
                        type="text"
                        id="title"
                        placeholder="Name your product..."
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-1 w-full lg:w-[500px]">
                    <label
                        className="uppercase font-medium tracking-[2px]"
                        htmlFor="category"
                    >
                        category
                    </label>
                    <input
                        className="border border-black p-2 w-full lg:w-[500px] placeholder:text-black placeholder:font-normal outline-none"
                        type="text"
                        id="category"
                        placeholder="What's product's category..."
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-1 w-full lg:w-[500px]">
                    <label
                        className="uppercase font-medium tracking-[2px]"
                        htmlFor="image"
                    >
                        image (url)
                    </label>
                    <input
                        className="border border-black p-2 w-full lg:w-[500px] placeholder:text-black placeholder:font-normal outline-none"
                        type="text"
                        id="image"
                        placeholder="Paste url..."
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <div className="flex flex-col gap-1 w-full lg:w-[500px]">
                    <label
                        className="uppercase font-medium tracking-[2px]"
                        htmlFor="price"
                    >
                        price (in USD)
                    </label>
                    <input
                        className="border border-black p-2 w-full lg:w-[500px] placeholder:text-black placeholder:font-normal outline-none"
                        type="number"
                        id="price"
                        placeholder="Write a price..."
                        value={price}
                        onChange={handlePriceChange}
                        required
                    />
                </div>
                <div className="flex flex-col gap-1 w-full lg:w-[500px]">
                    <label
                        className="uppercase font-medium tracking-[2px]"
                        htmlFor="description"
                    >
                        description
                    </label>
                    <textarea
                        className="border border-black p-2 w-full lg:w-[500px] placeholder:text-black placeholder:font-normal outline-none"
                        id="description"
                        placeholder="Description..."
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
            </div>
            <button
                type="submit"
                className="bg-black text-white font-medium tracking-[2px] uppercase py-2 px-9 w-full lg:w-[500px]"
            >
                create
            </button>
        </form>
    );
}
