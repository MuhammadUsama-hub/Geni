import express, { RequestHandler } from "express";
import { create } from "./user.controller";

const userRouter = express.Router();

userRouter.post("/", create as unknown as RequestHandler);

export default userRouter;
