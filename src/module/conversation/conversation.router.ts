import express, { RequestHandler } from "express";
import ConversationController from "./conversation.controller";

const conversationRouter = express.Router();

conversationRouter.post(
  "/tech",
  ConversationController.create as unknown as RequestHandler
);

export default conversationRouter;
