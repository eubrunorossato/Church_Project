import express, { Request, Response } from "express";
import Config from "./configs";

const app = express();

app.listen(Config.port, () => {
  console.log("Running on 3000");
});

app.get("/", (res: Request, resp: Response ) => {
  resp.send("Olá");
});
