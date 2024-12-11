import { InferSchemaType } from "mongoose";
import { userSchema } from "./user.model";

export type User = InferSchemaType<typeof userSchema>;

export type UserCreate = Pick<User, "name" | "email" | "preferences">;
