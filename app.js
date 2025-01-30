const express = require("express");
const app = express();
const path = require("path");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRouter");
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", [path.join(__dirname, "views/user"), path.join(__dirname, "views/admin")]);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", userRoutes);

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});

module.exports = app;
