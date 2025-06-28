import { model, Schema, Types } from "mongoose";

const itemSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    dateOfFound: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        required: true,
        enum: ['Delivered', 'Available'],
        default: 'Available'
    },
    userId: {
        type: Types.ObjectId,
        ref: "User",
        required: true,
    },
},{timestamps:true});

export const Item = model("Item", itemSchema);
