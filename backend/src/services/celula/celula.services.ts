import { Request, Response } from "express";
import { ICelula } from "../../dbConfigs/schemaInterfaces/celula.interface";
import celulaSchema from "../../dbConfigs/schemas/celula.schema";

class CelulaServices {
  public async catchCelulas(req: Request, res: Response) {
    const celulaFilter: object = req.body.celulaName ? req.body : {};
    const celulaList: ICelula[] = await celulaSchema.find(celulaFilter, (error: Error) => {
      if (error) {
        res.json({
          message: error.message,
          status: false,
        });
      }
    });

    if (celulaList.length === 0) {
      res.json({
        message: "Nenhuma célula foi encontrada",
        status: false,
      });
    } else {
      res.json({
        data: celulaList,
      });
    }

  }
}
