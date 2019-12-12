import { Express } from "express";
import { catchCelulas, createNewCelula } from "./services/celula/celula.services";

const CelulaRoutes = (app: Express) => {
  app.route("/api/celula/get-all-celulas").get(catchCelulas);
  app.route("/api/celula/create-celula").post(createNewCelula);
};

export { CelulaRoutes };
