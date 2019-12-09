import https from "https";
import { ServerConfig } from "./config/config";
const app = require('./config/express').default();

const configPort = ServerConfig.serverPort;
const server: https.Server = new https.Server(app);

server.listen(configPort, () => {
  console.log(`Server running on port ${configPort}`);
});
