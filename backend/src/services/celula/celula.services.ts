import { Request, Response } from "express";
import { ICelula } from "../../dbConfigs/schemaInterfaces/celula.interface";
import celulaSchema from "../../dbConfigs/schemas/celula.schema";
import { IFindResponse } from "../responseInterfaces/findResponse.interface";

const catchCelulas = async (req: Request, res: Response) => {
  const celulaFilter: object = req.body.celulaName ? req.body : {};
  const celulaList: ICelula[] = await celulaSchema.find(celulaFilter, (error: Error) => {
    if (error) {
      const response: IFindResponse = {
        message: error.message,
        status: false,
      };
      res.json({
        response,
      });
    }
  });

  if (celulaList.length === 0) {
    const response: IFindResponse = {
      message: "Nenhuma célula foi encontrada",
      status: false,
    };
    res.json({
      response,
    });
  } else {
    const response: IFindResponse = {
      data: celulaList,
      status: true,
    };
    res.json({
      response,
    });
  }

};

const createNewCelula = async (req: Request, res: Response) => {
  const body: ICelula = req.body;
  const newCelulaJson: object = {
    celulaAddress: body.celulaAddress,
    celulaApt: body.celulaApt,
    celulaIsOn: body.celulaIsOn,
    celulaLeader: body.celulaLeader,
    celulaName: body.celulaName,
    celulaTime: body.celulaTime,
    celulaTrainingLeader: body.celulaTrainingLeader,
  };

};

export {
  catchCelulas,
  createNewCelula,
};
