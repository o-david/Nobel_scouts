import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import User from "./models/user.model.js";
import { createUser, getUsers } from "./controllers/UserControllers.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 3000;
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/users", userRouter);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});