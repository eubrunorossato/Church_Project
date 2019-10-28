import { Express } from "express";
import userCreated from "../controllers/user.controller";

export default class LoginRoute {
  constructor(app: Express) {
    app.route("/user/createUser").post(userCreated.createUser);
    app.route("/user/getUser").get(userCreated.readUser);
  }
}
