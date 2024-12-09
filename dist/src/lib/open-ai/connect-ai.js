"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = main;
const openai_1 = __importDefault(require("openai"));
const client = new openai_1.default({ apiKey: process.env.OPENAI_API_KEY || "" });
async function main(question) {
    console.log(process.env.OPENAI_API_KEY);
    const chatCompletion = await client.chat.completions.create({
        messages: [{ role: "user", content: question }],
        model: "gpt-4o",
    });
    return chatCompletion;
}
//# sourceMappingURL=connect-ai.js.map