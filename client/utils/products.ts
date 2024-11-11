// axios
import axios from "axios";

// types
import { Product } from "@/types/product";

const BASE_URL = `http://localhost:3001`;

// get all products
export const getAllProducts = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/products`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};

// get popular products
export const getPopularProducts = async () => {
    try {
        const res = await axios.get(`${BASE_URL}/products/popular`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};

// get single product
export const getSingleProduct = async (_id: string) => {
    try {
        const res = await axios.get(`${BASE_URL}/products/${_id}`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};

// search products
export const searchProduct = async (query: string) => {
    try {
        const res = await axios.get(`${BASE_URL}/products/search?q=${query}`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};

// create new product (for admins)
export const createProduct = async (
    title: string,
    category: string,
    image: string,
    price: number,
    description: string
) => {
    try {
        const res = await axios.post(`${BASE_URL}/products/create`, {
            title,
            category,
            image,
            price,
            description,
        });
        return res.data;
    } catch (e) {
        if (axios.isAxiosError(e)) {
            console.error("Axios error:", e.response?.data || e.message);
            throw new Error(
                e.response?.data?.msg ||
                    "An error occurred while creating the product."
            );
        } else {
            console.error("Unexpected error:", e);
            throw new Error("An unexpected error occurred.");
        }
    }
};

// delete product (for admins)
export const deleteProduct = async (_id: string) => {
    try {
        const res = await axios.delete(`${BASE_URL}/products/${_id}`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};

// toggle popular (for admins)
export const togglePopular = async (_id: string) => {
    try {
        const res = await axios.put(`${BASE_URL}/products/${_id}/popular`);
        return res.data;
    } catch (e) {
        console.error(e);
    }
};
