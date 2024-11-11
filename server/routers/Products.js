// imports
import express from "express";

// controllers
import {
    createProduct,
    deleteProduct,
    getAllProducts,
    getPopularProducts,
    getProductById,
    searchProducts,
    togglePopular,
    updateProduct,
} from "../controllers/productsController.js";

// middlewares
import { isAdmin, authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

// public routes
router.get("/", getAllProducts);
router.get("/popular", getPopularProducts);
router.get("/search", searchProducts);
router.get("/:id", getProductById);

// admin only routes
router.post("/create", createProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", deleteProduct);
router.put("/:id/popular", authMiddleware, isAdmin, togglePopular);

export { router as productsRouter };
