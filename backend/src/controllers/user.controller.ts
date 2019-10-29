import { Request, Response } from "express";
import { UserMember } from "../models/user.model";

export default class LoginController {
  public static async createUser(req: Request, resp: Response) {
    const user = req.body.form;
    try {
      console.log(user)
      const created = await UserMember.create({
        userLogin: user.userLogin,
        created: Date.now(),
        password: user.password,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        celula: user.celula,
      });
      resp.json({
        data: created,
        message: "Creation was done",
        status: true,
      });
    } catch (err) {
      resp.json({
        message: err.message,
        status: false,
      });
    }
  }

  public static async readUser(req: Request, resp: Response) {
    const filter = req.body.name ? req.body : {};
    try {
      const user = await UserMember.find(filter);
      JSON.stringify(user);
      resp.json({
        data: user,
        message: "Users Returned",
        status: true,
      });
    } catch (err) {
      resp.json({
        message: err.message,
        status: false,
      });
    }
  }
}
