import { ServerConfig } from "./config/config";
import { server } from "./config/express";

const configPort = ServerConfig.serverPort;

server.listen(configPort, () => {
  console.log(`Server running on port ${configPort}`);
});
