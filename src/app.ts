import express, { json, urlencoded } from "express";
import errorMiddleware from "@/module/middlewares/error.middleware";
import morgan from "morgan";
import conversationRouter from "#/conversation/conversation.router";

const app = express();

// req data parsers
app.use(
  urlencoded({
    extended: true,
  })
);
app.use(json());
// request logger
app.use(morgan("short"));

//routes
app.use("/conversation", conversationRouter);

app.get("/key", (_, res) => {
  res.send(process.env.OPENAI_API_KEY);
});

//global error handler
errorMiddleware(app);

// 404 handler (optional)
app.use((_req, res) => {
  res.status(404).send("Not Found");
});

export default app;
