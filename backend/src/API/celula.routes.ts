import { Express } from "express";
import { catchCelulas } from "../services/celula/celula.services";

const CelulaRoutes = (app: Express) => {
  app.route("/api/celula/get-all-celulas").get(catchCelulas);
};

export { CelulaRoutes };
