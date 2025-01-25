const mongoose = require("mongoose");
const env = require("dotenv").config();

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`);
    } catch (error) {
        console.log('Error in connecting to MongoDB', error);
        process.exit(1);
    }
}

module.exports = connectDB;