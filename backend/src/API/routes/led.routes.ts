import { Express } from "express";
import { catchAllLeds, createLed } from "../services/led.services";

const ledRoutes = (app: Express) => {
  app.route("/api/leader/get-all-leds").get(catchAllLeds);
  app.route("/api/leader/create-leds").post(createLed);
};

export { ledRoutes };
