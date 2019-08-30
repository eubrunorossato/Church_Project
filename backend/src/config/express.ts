import * as bodyParser from "body-parser";
import express, { Request, Response } from "express";
import mongoose from "mongoose";
import * as path from "path";
import Config from "./configs";
// import cors from "cors";

const app = express();

// app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

for (const route of Config.globFiles(Config.routes)) {
  console.log(route);
  require(path.resolve(route)).default(app);
}
<<<<<<< HEAD

mongoose.set("useNewUrlParser", true);
mongoose
    .connect("mongodb://localhost/church_project", {
=======
mongoose
    .connect(Config.mongodb, {
>>>>>>> eab1a04cae11aadd818be5bc169752aea34f6316
      promiseLibrary: global.Promise,
      useMongoClient: true,
    })
<<<<<<< HEAD
    .catch((err) => {
      console.log(err);
      console.log("Error connecting");
=======
    .catch(() => {
      console.log("Error connecting to mongo");
>>>>>>> eab1a04cae11aadd818be5bc169752aea34f6316
    });

app.listen(Config.port, () => {
  console.log("Running on 3000");
});

export default app;
