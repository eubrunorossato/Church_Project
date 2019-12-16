import { Model, model, Schema } from "mongoose";
import { ILed } from "../schemaInterfaces/led.interface";

const ledSchema: Schema = new Schema({
  ledAddress: { type: String, required: true },
  ledAge: { type: Number, required: true },
  ledCelula: { type: Schema.Types, required: true, ref: "Celula" },
  ledEmail: { type: String, required: true, unique: true },
  ledFrom: { type: Schema.Types.ObjectId, required: true, ref: "Celula" },
  ledIsOn: { type: Boolean, required: true },
  ledName: { type: String, required: true },
  ledRole: { type: String, required: true },
});

const led: Model<ILed> = model<ILed>("Led", ledSchema);

export { led };
