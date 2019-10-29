import { Request, Response } from "express";
import { UserMember } from "../models/user.model";

export default class UserController {
  public static async login(req: Request, resp: Response) {
    const userData = req.body.loginForm;
    console.log(userData);

    try {
      const data = await UserMember.find({ userLogin: userData.userLogin, password: userData.password });

      if (data.length === 0) {
        throw new Error("Usuario ou senha incorretos");
      }

      resp.json({
        message: "Logou",
        status: true,
      });
    } catch (err) {
      resp.json({
        message: err.message,
        status: false,
      });
    }
  }

  public static showUser(req: Request, resp: Response) {
    try {
      const members = req.body;
      UserMember.find(members).exec((err, users) => {
        resp.send({
          data: users,
          status: true,
        });
      });
    } catch (err) {
      resp.send({
        message: err.message,
        status: false,
      });
    }
  }
}

