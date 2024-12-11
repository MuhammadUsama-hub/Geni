import { Request, Response } from "express";
import UserService from "./user.service";
import { APIResponse } from "@/lib/types/mics";
import { User } from "./user.types";
import { toResponse } from "@/lib/utils";
import { statusConst } from "@/lib/utils/status";

const create = async (
  req: Request,
  res: Response
): Promise<APIResponse<User>> => {
  const user = await UserService.create(req.body);
  if (!user)
    return toResponse({
      error: statusConst.internal.message,
      status: statusConst.internal.code,
    });

  return toResponse({
    data: user,
    status: statusConst.created.code,
  });
};

const UserController = {
  create,
};

export default UserController;
