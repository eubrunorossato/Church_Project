import { Express } from "express";
import LoginController from "../controllers/login.Controller";

export default class LoginRoute {
  constructor(app: Express) {
    app.route("/login").post(LoginController.createUser);
  }
}
