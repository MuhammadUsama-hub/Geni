import { Request, Response } from "express";
import UserService from "./user.service";
import { statusConst } from "@/lib/utils/status";

export const create = async (req: Request, res: Response) => {
  const user = await UserService.create(req.body);
  if (!user) {
    return res
      .status(statusConst.internal.code)
      .json({ error: statusConst.internal.message });
  }

  return res.status(statusConst.created.code).json({ data: user, error: null });
};
