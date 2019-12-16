import mongoose from "mongoose";
import { ILeader } from "./leader.interface";

export interface ILed extends mongoose.Document {
  ledName: string;
  ledFrom: ILeader["_id"];
  ledAge: number;
  ledIsOn: boolean;
  ledRole: string;
  ledEmail: string;
  ledAddress: string;
  ledCelula: ILeader["_id"];
}
