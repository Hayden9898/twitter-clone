import express from "express";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

//middleware which runs between request and response
app.use(express.json()); //to parse req.body
app.use(express.urlencoded({ extended: true })); //to parse form data (urlencoded)

app.use("/api/auth", authRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectMongoDB();
});