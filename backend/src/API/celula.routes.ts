import { Express } from "express";
import { catchCelulas, createNewCelula, updateCelulaState } from "./services/celula/celula.services";

const CelulaRoutes = (app: Express) => {
  app.route("/api/celula/get-all-celulas").get(catchCelulas);
  app.route("/api/celula/create-celula").post(createNewCelula);
  app.route("/api/celula/update-celula").put(updateCelulaState);
};

export { CelulaRoutes };
