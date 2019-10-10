import bodyParser from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import path from "path";
import Config from "./configs";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

for (const route of Config.globFiles(Config.routes)) {
  console.log(route);
  require(path.resolve(route)).default(app);
}

mongoose
    .connect(Config.mongodb, {
      promiseLibrary: global.Promise,
      useMongoClient: true,
    })
    .catch((err) => {
      console.log(err);
      console.log("Error connecting");
    });

app.listen(Config.port, () => {
  console.log("Running on 3000");
});

export default app;
