import { Request, Response } from "express";
import ConversationServices from "./conversation.service";
import { statusConst } from "@/lib/utils/status";

const create = async (req: Request, res: Response): Promise<any> => {
  const answer = await ConversationServices.create(req.body);
  if (!answer)
    return res.json({
      error: statusConst.internal.message,
      status: statusConst.internal.code,
    });

  return res.json({
    message: statusConst.created.message,
    status: statusConst.created.code,
    data: answer,
  });
};

const ConversationController = {
  create,
};
export default ConversationController;
