// imports
import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import cookieParser from "cookie-parser";

// routers
import { authRouter } from "./routers/Auth.js";
import { productsRouter } from "./routers/Products.js";

// dotenv
dotenv.config();

// server
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
        allowedHeaders: ["Authorization", "Content-Type"],
    })
);
app.use(cookieParser());

// routers
app.use("/auth", authRouter);
app.use("/products", productsRouter);

// mongoose
mongoose
    .connect(process.env.MONGO_URL)
    .then(() => console.log("App connected to the database"))
    .catch((e) => console.error(e));

app.get("/", (req, res) => res.status(200).send("Welcome"));

app.listen(PORT, () =>
    console.log(`Server is running on http:localhost:${PORT}`)
);
