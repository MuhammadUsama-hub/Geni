"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorhandler_1 = __importDefault(require("errorhandler"));
const node_notifier_1 = __importDefault(require("node-notifier"));
function errorNotification(_err, str, req) {
    const title = `Error in ${req.method} ${req.url}`;
    node_notifier_1.default.notify({
        title,
        message: str,
    });
}
const errorMiddleware = (app) => {
    if (process.env.NODE_ENV === "dev") {
        app.use((0, errorhandler_1.default)({ log: errorNotification }));
    }
    else {
        app.use((err, _req, res, _next) => {
            console.error(err);
            res.status(500).json({ message: "Something went wrong!" });
        });
    }
};
exports.default = errorMiddleware;
//# sourceMappingURL=error.middleware.js.map