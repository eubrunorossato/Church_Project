import * as bodyParser from "body-parser";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import * as path from "path";
import Config from "./configs";
import cors from "cors";

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

for (const route of Config.globFiles(Config.routes)) {
  console.log(route);
  require(path.resolve(route)).default(app);
}
  mongoose.connect("mongodb://localhost:27017/church_project", (err) => {
      console.log(err);
    })
    
app.listen(Config.port, () => {
  console.log("Running on 3000");
});

export default app;
