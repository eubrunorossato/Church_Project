import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { celulaRoutes } from "../API/routes/celula.routes";
import { leaderRoute } from "../API/routes/leader.routes";
import { ServerConfig } from "./config";

const server = express();

server.use(bodyParser.json());
celulaRoutes(server);
leaderRoute(server);

mongoose
  .connect(`${ServerConfig.mongooseHost}${ServerConfig.mongoosePort}/${ServerConfig.mongooseDbName}`,
    { useNewUrlParser: true })
  .catch((err: Error) => {
    console.log(err);
  });

export { server };
