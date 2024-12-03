import main from "@/lib/open-ai/connect-ai";
import { conversationBody } from "./conversation.types";
const create = async (data: conversationBody) => {
  const response = await main(data.question);
  const answerFromAi = response.choices[0].message.content;
  return answerFromAi;
};

const ConversationServices = {
  create,
};

export default ConversationServices;
