import { Request, Response } from "express";

export default class LoginController {
  public static createUser(req: Request, resp: Response) {
    try {
      const userDatas = req.body;
      resp.send(userDatas);
    } catch (err) {
      resp.send({
        message: err.message,
        status: false,
      });
    }
  }
}
