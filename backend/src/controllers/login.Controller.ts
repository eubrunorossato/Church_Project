import { Request, Response } from "express";
import { UserMember } from "../models/user.model";

export default class LoginController {
  public static createUser(req: Request, resp: Response) {
    const userToCreate = req.body;
    try {
      UserMember.create(userToCreate, (err: any, created: any) => {
        resp.send({
          data: created,
          error: err,
          message: "Creation was done",
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

  public static login (req: Request, resp: Response) {
    const userData = req.body;
    console.log(userData);
      
    UserMember.find({ userLogin: userData.userLogin, password: userData.password }, (err, result) => {
      if(result[0] != undefined) {
        resp.json({
          status: true,
        })
      } else {
        resp.json({
          err: "Usuario ou senha incorreto",
          status: false,
        })
      }  
    })
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
