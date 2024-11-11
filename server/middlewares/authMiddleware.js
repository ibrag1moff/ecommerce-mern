// jwt
import jwt from "jsonwebtoken";

// protected route
export const authMiddleware = (req, res, next) => {
    const token = req.cookies.jwt;
    console.log(token);

    if (!token) return res.status(401).send({ msg: "No token provided" });

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).send({ msg: "Invalid token" });
        }

        req.user = {
            id: decoded._id,
            username: decoded.username,
            isAdmin: decoded.isAdmin,
        };

        next();
    });
};

// checking if user is an admin
export const isAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).send({ msg: "Access denied. Admins only" });
    }
};
