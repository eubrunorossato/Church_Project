import { Request, Response } from "express";
import { UserMember } from "../models/user.model";

export default class LoginController {
  public static async createUser(req: Request, res: Response) {
    const user = req.body;
    try {
      console.log(req)
      const created = await UserMember.create({
        userLogin: user.userLogin,
        created: Date.now(),
        password: user.password,
        name: user.name,
        lastName: user.lastName,
        email: user.email,
        celula: user.celula,
      });
      res.json({
        data: created,
        message: "Creation was done",
        status: true,
      });
    } catch (err) {
      res.json({
        message: err.message,
        status: false,
      });
    }
  }

  public static async readUser(req: Request, res: Response) {
    const filter = req.body.name ? req.body : {};
    try {
      const user = await UserMember.find(filter);
      res.json({
        data: user,
        message: "Users Returned",
        status: true,
      });
    } catch (err) {
      res.json({
        message: err.message,
        status: false,
      });
    }
  }
}
