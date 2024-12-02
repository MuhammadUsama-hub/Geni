import app from "@/app";
import dotenv from "dotenv";
import http from "http";

dotenv.config();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

server.listen(port, () => {
  console.log(`server started at port ${port}`);
});
