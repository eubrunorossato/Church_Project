import { Model, model, Schema } from "mongoose";
import { ILeader } from "../schemaInterfaces/leader.interface";

const leaderSchema: Schema = new Schema({
  churchRole: { required: true, type: String },
  leaderAge: { required: true, type: Number },
  leaderFrom: { required: true, type: Schema.Types.ObjectId, ref: "Celula" },
  leaderIsOn: { required: true, type: Boolean },
  leaderName: { required: true, type: String },
  leaderedBy: { required: false, type: Schema.Types.ObjectId },
  leaderedEmail: { required: true, type: String, unique: true },
});

const leader: Model<ILeader> = model<ILeader>("leader", leaderSchema);

export default leader;
