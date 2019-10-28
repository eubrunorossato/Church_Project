import { Document, Schema } from "mongoose";

export interface IUserMemberDb extends Document {
    _id: Schema.Types.ObjectId;
    lastName: string;
    name: string;
    email: string;
    userLogin: string;
    password: string;
    created: Date;
}

export interface IUserMember {
    _id: Schema.Types.ObjectId;
    lastName: string;
    name: string;
    email: string;
    userLogin: string;
    password: string;
    celula: string;
    created: Date;
}

export interface IUserMemberDbResponse {
    Status: boolean;
    Message?: string;
    data?: [IUserMember];
}
