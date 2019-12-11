import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { CelulaRoutes } from "../API/celula.routes";
import { ServerConfig } from "./config";

const server = express();

server.use(bodyParser.json());
CelulaRoutes(server);

mongoose
  .connect(`${ServerConfig.mongooseHost}${ServerConfig.mongoosePort}/${ServerConfig.mongooseDbName}`,
    { useNewUrlParser: true })
  .catch((err: Error) => {
    console.log(err);
  });

export { server };
