import { Model, model, Schema } from "mongoose";
import { ICelula } from "../schemaInterfaces/celula.interface";

const celulaSchema: Schema = new Schema({
  celulaAddress: { required: true, type: String },
  celulaApt: { required: false, type: Number },
  celulaIsOn: { required: true, type: Boolean },
  celulaLeader: { required: true, type: String },
  celulaName: { required: true, type: String },
  celulaTime: { required: true, type: String },
  celulaTrainingLeader: { required: false, type: String },
});

const celula: Model<ICelula> = model<ICelula>("Celula", celulaSchema);

export default celula;
