import { Express } from "express";

class CelulaRoutes {
  constructor(app: Express) {
    app.route("/api/celula/get-all-celulas").get();
    app.route("/api/celula/get-all-celulas").post();
    app.route("/api/celula/get-all-celulas").put();
  }
}

export { CelulaRoutes };
