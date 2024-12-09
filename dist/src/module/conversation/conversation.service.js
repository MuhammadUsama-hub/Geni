"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const connect_ai_1 = __importDefault(require("@/lib/open-ai/connect-ai"));
const create = async (data) => {
    const response = await (0, connect_ai_1.default)(data.question);
    const answerFromAi = response.choices[0].message.content;
    return answerFromAi;
};
const ConversationServices = {
    create,
};
exports.default = ConversationServices;
//# sourceMappingURL=conversation.service.js.map