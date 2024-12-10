import { Request, Response } from "express";
import UserService from "./user.service";

const create = async (req: Request, res: Response): Promise<any> => {
  const user = await UserService.create(req.body);
  if (!user) return res.status(400).json({ message: "internal error" });

  return res.status(200).json({ data: user });
};

const UserController = {
  create,
};

export default UserController;
