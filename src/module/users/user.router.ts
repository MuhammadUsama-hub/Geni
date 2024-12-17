import express from "express";
import { create } from "./user.controller";

const userRouter = express.Router();

userRouter.post("/", create);

export default userRouter;
