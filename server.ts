import app from "@/app";
import dotenv from "dotenv";
import http from "http";

dotenv.config();
const server = http.createServer(app);
const PORT = process.env.PORT;

server.listen(PORT, () => {
  console.log(`server started at port ${PORT}`);
});
