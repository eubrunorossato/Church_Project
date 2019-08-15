import { Model, model, Schema } from "mongoose";
import { IUserMemberDb } from "../interfaces/userMember.interface";

export let UserMemberSchema: Schema = new Schema ({
    created: {
        required: true,
        type: Schema.Types.Date,
    },
    email: {
        required: true,
        type: Schema.Types.String,
    },
    lastName: {
        required: true,
        type: Schema.Types.String,
    },
    name: {
        required: true,
        type: Schema.Types.String,
    },
    password: {
        required: true,
        type: Schema.Types.String,
    },
    userLogin: {
        required: true,
        type: Schema.Types.String,
    },
});

export const UserMember: Model<IUserMemberDb> = model<IUserMemberDb> (
    "User",
    UserMemberSchema,
);
