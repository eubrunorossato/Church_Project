import mongoose from "mongoose";

export interface ICelula extends mongoose.Document {
  celulaName: string;
  celulaAddress: string;
  celulaApt?: number;
  celulaLeader: string;
  celulaTime: string;
  celulaTrainingLeader?: string;
  celulaIsOn: boolean;
}
