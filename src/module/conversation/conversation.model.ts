import { Schema, Types, model } from "mongoose";

export const conversationSchema = new Schema(
  {
    question: {
      type: String,
      trim: true,
      required: true,
    },
    answer: {
      type: String,
      trim: true,
      required: true,
    },
    topic: {
      type: Types.ObjectId,
      ref: "User",
      required: true,
    },
    user: {
      type: Types.ObjectId,
      ref: "Topic",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Conversation = model("Conversation", conversationSchema);

export default Conversation;
