import { model, Schema } from "mongoose";
import { USER_INFO, USER_ROLE } from "./user.constant.js";
import mongooseBcrypt from 'mongoose-bcrypt';

const itemSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: true,
        bcrypt:true,
        select:0
    },
    role: {
        type: String,
        enum: [USER_ROLE.admin, USER_ROLE.user, USER_ROLE.superAdmin],
        default: USER_ROLE.user
    },
    image: {
        type: String,
        default: USER_INFO.notProvided
    },
    presentAddress: {
        type: String,
        default: USER_INFO.notProvided
    },
    permanentAddress: {
        type: String,
        default: USER_INFO.notProvided
    },
    dateOfBirth: {
        type: Date,
        default: USER_INFO.notProvided
    },
    gurdianName: {
        type: String,
        default: USER_INFO.notProvided
    },
}, { timestamps: true })

itemSchema.plugin(mongooseBcrypt);

export const User= model('User',itemSchema)