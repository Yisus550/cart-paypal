const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const cartRoutes = require("./routes/cartRoutes");
const paymentRoutes = require("./routes/paymentRoutes");
const productRoutes = require("./routes/productRoutes");

connectDB();

const server = express();

server.use(express.json());
server.use(morgan("dev"));

server.use("/auth", authRoutes);
server.use("/cart", cartRoutes);
server.use("/payment", paymentRoutes);
server.use("/products", productRoutes);

module.exports = server;
