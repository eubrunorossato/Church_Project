import { Request, Response } from "express";
import { ILed } from "../../dbConfigs/schemaInterfaces/led.interface";
import { led } from "../../dbConfigs/schemas/led.schema";
import { IResponse } from "./responseInterfaces/findResponse.interface";
import { Schema } from "mongoose";
let response: IResponse = {
  message: "",
  status: true,
};

const catchAllLeds = async (req: Request, res: Response) => {
  const body = req.body;
  const ledFilter: object = body.celulaName ? body : {};

  const allLeds: ILed[] = await led.find(ledFilter, (error: Error) => {
    if (error) {
      response = {
        message: "Nenhum liderado foi encontrado",
        status: false,
      };
      res.json({
        response,
      });
    }
  })
    .populate("ledCelula", "celulaName")
    .populate("ledFrom", "celulaLeader");

  if (allLeds.length === 0) {
    response = {
      message: "Nenhum liderado foi encontrado",
      status: false,
    };
    res.json({
      response,
    });
  }

  response = {
    data: allLeds,
    status: true,
  };
  res.json({
    response,
  });
};

const createLed = async (req: Request, res: Response) => {
  const body: ILed = req.body;
  const newLeader: object = {
    ledAddress: body.ledAddress,
    ledAge: body.ledAge,
    ledCelula: body.ledCelula,
    ledEmail: body.ledEmail,
    ledFrom: body.ledFrom,
    ledIsOn: true,
    ledName: body.ledName,
    ledRole: body.ledRole,
  };

  await led.create(newLeader, (error: Error) => {
    if (error) {
      response = {
        message: "Não foi possivel criar seu liderado",
        status: false,
      };
      res.json({
        response,
      });
    }
  });

  response = {
    message: "Liderado criado com sucesso",
    status: true,
  };
  res.json({
    response,
  });
};
const updateLedFields = async (req: Request, res: Response) => {
  const body: ILed = req.body;
  const ledId: Schema.Types.ObjectId = body._id;
  const fieldsToBeUpdate: object = body;

  await led.findByIdAndUpdate(ledId, fieldsToBeUpdate, (error: Error) => {
    if (error) {
      response = {
        message: "Não foi possivel atualizar seu liderado",
        status: false,
      };
      res.json({
        response,
      });
    }
  });

  response = {
    message: "Liderado atualizado com sucesso",
    status: true,
  };
  res.json({
    response,
  });
};

export {
  catchAllLeds,
  createLed,
  updateLedFields,
};
