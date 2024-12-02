import { Request, Response } from "express";

const create = async (req: Request, res: Response) => {
  const data = req.body;
};

const ConversationController = {
  create,
};
export default ConversationController;
