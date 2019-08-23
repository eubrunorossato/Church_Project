import * as bodyParser from "body-parser";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import * as path from "path";
import Config from "./configs";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

for (const route of Config.globFiles(Config.routes)) {
  console.log(route);
  require(path.resolve(route)).default(app);
}

mongoose.connect("mongodb://localhost:27017/church_project", (err) => {
  if (err) {
    console.log("Connection error");
  }
});

app.listen(Config.port, () => {
  console.log("Running on 3000");
});

export default app;
