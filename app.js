const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const connectDB = require("./config/db");

connectDB();

app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`);
})

module.exports = app;