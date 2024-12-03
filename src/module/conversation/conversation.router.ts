import express from "express";
import ConversationController from "./conversation.controller";

const conversationRouter = express.Router();

conversationRouter.post("/tech", ConversationController.create);

export default conversationRouter;
