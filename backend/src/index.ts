import express from "express";
import { ServerConfig } from "./config/config";

const configPort = ServerConfig.serverPort;
const server = express();

server.listen(configPort, () => {
  console.log(`Server running on port ${configPort}`);
});
