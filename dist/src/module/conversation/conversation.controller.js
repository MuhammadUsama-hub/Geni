"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const conversation_service_1 = __importDefault(require("./conversation.service"));
const status_1 = require("@/lib/utils/status");
const create = async (req, res) => {
    const answer = await conversation_service_1.default.create(req.body);
    if (!answer)
        return res.json({
            error: status_1.statusConst.internal.message,
            status: status_1.statusConst.internal.code,
        });
    return res.json({
        message: status_1.statusConst.created.message,
        status: status_1.statusConst.created.code,
        data: answer,
    });
};
const ConversationController = {
    create,
};
exports.default = ConversationController;
//# sourceMappingURL=conversation.controller.js.map