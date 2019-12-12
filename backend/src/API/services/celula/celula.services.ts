import { Request, Response } from "express";
import { ICelula } from "../../../dbConfigs/schemaInterfaces/celula.interface";
import celulaSchema from "../../../dbConfigs/schemas/celula.schema";
import { IResponse } from "../responseInterfaces/findResponse.interface";

const catchCelulas = async (req: Request, res: Response) => {
  const celulaFilter: object = req.body.celulaName ? req.body : {};
  const celulaList: ICelula[] = await celulaSchema.find(celulaFilter, (error: Error) => {
    if (error) {
      const response: IResponse = {
        message: error.message,
        status: false,
      };
      res.json({
        response,
      });
    }
  });

  if (celulaList.length === 0) {
    const response: IResponse = {
      message: "Nenhuma célula foi encontrada",
      status: false,
    };
    res.json({
      response,
    });
  } else {
    const response: IResponse = {
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
    celulaIsOn: true,
    celulaLeader: body.celulaLeader,
    celulaName: body.celulaName,
    celulaTime: body.celulaTime,
    celulaTrainingLeader: body.celulaTrainingLeader,
  };

  await celulaSchema.create(newCelulaJson, (err: Error) => {
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
    message: "Celula criada com sucesso",
    status: true,
  };
  res.json({
    response,
  });
};

const updateCelulaState = async (req: Request, res: Response) => {
  const body: ICelula = req.body;
  const idCelulaFilter: object = body._id;
  const celulaUpate: object = body;

  await celulaSchema.findByIdAndUpdate(idCelulaFilter, celulaUpate, (err: Error) => {
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
    message: "Celula atualizada com sucesso",
    status: true,
  };
  res.json({
    response,
  });
};

export {
  catchCelulas,
  createNewCelula,
  updateCelulaState,
};
