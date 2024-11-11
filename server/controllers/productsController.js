// models
import { Product } from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).send(products);
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

export const getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send({ msg: "Product not found" });

        res.status(200).send(product);
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

export const createProduct = async (req, res) => {
    try {
        const { title, description, price, category, image } = req.body;

        // Validate fields
        if (!title || !description || !price || !category || !image) {
            return res.status(400).send({ msg: "All fields are required." });
        }

        const newProduct = new Product({
            title,
            description,
            price,
            category,
            image,
        });

        await newProduct.save();
        res.status(201).send(newProduct);
    } catch (e) {
        console.error("Error creating product:", e);
        if (e.code === 11000) {
            return res
                .status(400)
                .send({ msg: "Product with this title already exists." });
        }
        res.status(500).send({
            msg: "Internal Server Error",
            error: e.message,
        });
    }
};

export const deleteProduct = async (req, res) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).send("Product not found");

        res.status(200).send(product);
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { name, description, price, category, brand, stock, image } =
            req.body;
        const product = await findByIdAndUpdate(req.params.id, {
            name,
            description,
            price,
            category,
            brand,
            stock,
            image,
        });
        if (!product) return res.status(404).send("Product not found");

        res.status(200).json(product);
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

export const getPopularProducts = async (req, res) => {
    try {
        const products = await Product.find({ popular: true });
        res.status(200).send(products);
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

export const searchProducts = async (req, res) => {
    try {
        const query = req.query.q || "";
        const products = await Product.find({
            title: { $regex: query, $options: "i" },
        });
        res.status(200).send(products);
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

export const togglePopular = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).send({ msg: "Product not found" });

        if (product.popular) {
            return res.status(200).send({ msg: "Product is already popular" });
        }

        product.popular = true;
        await product.save();

        res.status(200).send({ msg: "Product marked as popular" });
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
