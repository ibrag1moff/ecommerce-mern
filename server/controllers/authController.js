// imports
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// models
import { User } from "../models/userModel.js";

// register
export const register = async (req, res) => {
    const { username, password } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, password: hashedPassword });
        await user.save();
        res.status(201).send(user);
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

// login
export const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username });
        if (!user) return res.status(404).send({ msg: "User not found" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(400).send({ msg: "Invalid credentials" });

        // Create a token
        const token = jwt.sign(
            { id: user._id, username: user.username, isAdmin: user.isAdmin },
            process.env.JWT_SECRET,
            { expiresIn: "1h" }
        );

        // Set the cookie
        res.cookie("jwt", token, {
            httpOnly: true, // Prevents JavaScript from accessing the cookie
            secure: process.env.NODE_ENV === "production", // Use secure cookies in production
            maxAge: 3600000, // Cookie expiration time (1 hour)
        });

        return res.status(200).send({
            token,
            user: {
                username: user.username,
                isAdmin: user.isAdmin,
            },
        });
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

// assign-users
export const assignAdmin = async (req, res) => {
    const { isAdmin } = req.body;
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).send("User not found");

        user.isAdmin = isAdmin;
        await user.save();
        res.status(200).send(user);
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

// get a list of users
export const getAdmins = async (req, res) => {
    try {
        const users = await User.find({ isAdmin: true });
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

// get a list of users
export const getUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).send(users);
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};

// delete user
export const deleteUser = async (req, res) => {
    try {
        const user = await User.deleteOne({ username });
        if (user.deletedCount > 0) {
            console.log(`User with username ${username} banned successfully`);
        } else {
            console.log(`User with username ${username} not found`);
        }
    } catch (e) {
        res.status(500).send({ msg: e.message });
    }
};
