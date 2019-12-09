import bodyParser from "body-parser";
import express from "express";
import mongoose from "mongoose";
import { ServerConfig } from "./config";

export default () => {
  const server = express();

  server.use(bodyParser.json());

  mongoose
    .connect(`${ServerConfig.mongooseHost}${ServerConfig.mongoosePort}/${ServerConfig.mongooseDbName}`,
      { useNewUrlParser: true })
    .catch((err: Error) => {
      console.log(err);
    });
};
