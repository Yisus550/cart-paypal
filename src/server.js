const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/db");

connectDB();

const server = express();

server.use(express.json());
server.use(morgan("dev"));

module.exports = server;
