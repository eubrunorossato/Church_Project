import mongoose from "mongoose";
import { ICelula } from "./celula.interface";

export interface ILeader extends mongoose.Document {
  leaderName: string;
  leaderFrom: ICelula["_id"];
  leaderAge: number;
  leaderIsOn: boolean;
  churchRole: string;
  leaderedBy?: ILeader["_id"];
  leaderedEmail: string;
}
