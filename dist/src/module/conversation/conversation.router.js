"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const conversation_controller_1 = __importDefault(require("./conversation.controller"));
const conversationRouter = express_1.default.Router();
conversationRouter.post("/tech", conversation_controller_1.default.create);
exports.default = conversationRouter;
//# sourceMappingURL=conversation.router.js.map