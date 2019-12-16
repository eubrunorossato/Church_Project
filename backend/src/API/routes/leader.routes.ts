import { Express } from "express";
import { catchAllLeaders, createNewLeader, leaderFieldsUpdate } from "../services/leader.services";

const leaderRoute = (app: Express) => {
  app.route("/api/leader/get-all-leaders").get(catchAllLeaders);
  app.route("/api/leader/create-leader").post(createNewLeader);
  app.route("/api/leader/update-leader").put(leaderFieldsUpdate);
};

export { leaderRoute };
