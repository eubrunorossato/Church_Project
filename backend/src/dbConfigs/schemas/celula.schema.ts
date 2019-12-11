import { Model, model, Schema } from "mongoose";
import { ICelula } from "../schemaInterfaces/celula.interface";

const celulaSchema: Schema = new Schema({
  celulaAddress: String,
  celulaApt: Number,
  celulaIsOn: Boolean,
  celulaLeader: String,
  celulaName: String,
  celulaTime: Date,
  celulaTrainingLeader: String,
});

const celula: Model<ICelula> = model<ICelula>("Celula", celulaSchema);

export default celula;
