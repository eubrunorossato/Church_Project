import { Request, Response } from "express";
import { ILed } from "../../dbConfigs/schemaInterfaces/led.interface";
import { led } from "../../dbConfigs/schemas/led.schema";
import { IResponse } from "./responseInterfaces/findResponse.interface";
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
    .populate("ledCelula", "celulaLeader")
    .populate("ledFrom", "celulaName");

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
    status: false,
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
    status: false,
  };
  res.json({
    response,
  });
};

export {
  catchAllLeds,
  createLed,
};
