// imports
import express from "express";

// controllers
import {
    assignAdmin,
    deleteUser,
    getAdmins,
    getUsers,
    login,
    register,
} from "../controllers/authController.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.patch("/assign-admin", assignAdmin);
router.get("/admins", getAdmins);
router.get("/users", getUsers);
router.delete("/:id", deleteUser);

export { router as authRouter };
