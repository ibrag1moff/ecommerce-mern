// imports
import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    category: { type: String, required: true },
    popular: { type: Boolean, default: false },
    image: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export const Product = mongoose.model("Product", productSchema);