import express from "express";
import { createUser, deleteUser, getUsers, updateUser } from "../controllers/UserControllers.js";

const userRouter = express.Router();

userRouter.route("/")
.post(createUser)
.get(getUsers);

userRouter.route("/:id")
.put(updateUser)
.delete(deleteUser);

export default userRouter;