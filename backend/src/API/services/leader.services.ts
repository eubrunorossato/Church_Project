import { Request, Response } from "express";
import { ILeader } from "../../dbConfigs/schemaInterfaces/leader.interface";
import leaderSchema from "../../dbConfigs/schemas/leader.schema";
import { IResponse } from "./responseInterfaces/findResponse.interface";

const catchAllLeaders = async (req: Request, res: Response) => {
  const leaderFilter: object = req.body.celulaName ? req.body : {};
  const leaderList: ILeader[] = await leaderSchema.find(leaderFilter, (error: Error) => {
    if (error) {
      const response: IResponse = {
        message: error.message,
        status: false,
      };
      res.json({
        response,
      });
    }
  }).populate("leaderFrom", "celulaName");

  if (leaderList.length === 0) {
    const response: IResponse = {
      message: "Nenhum lider foi encontrado",
      status: false,
    };
    res.json({
      response,
    });
  } else {
    const response: IResponse = {
      data: leaderList,
      status: true,
    };
    res.json({
      response,
    });
  }
};

const createNewLeader = async (req: Request, res: Response) => {
  const body: ILeader = req.body;
  const newLeaderJson: object = {
    churchRole: body.churchRole,
    leaderAge: body.leaderAge,
    leaderFrom: body.leaderFrom,
    leaderIsOn: true,
    leaderName: body.leaderName,
    leaderedBy: body.leaderedBy,
    leaderedEmail: body.leaderedEmail,
  };

  await leaderSchema.create(newLeaderJson, (err: Error) => {
    if (err) {
      const response: IResponse = {
        message: err.message,
        status: false,
      };
      res.json({
        response,
      });
    }
  });

  const response: IResponse = {
    message: "Lider criado com sucesso",
    status: true,
  };
  res.json({
    response,
  });
};

export {
  catchAllLeaders,
  createNewLeader,
};
