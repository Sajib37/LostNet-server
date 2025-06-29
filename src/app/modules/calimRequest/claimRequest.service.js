import { ItemRequest } from "./claimRequest.model.js";
import mongoose from "mongoose";

const postItemRequestIntoDB = async (payload) => {
    const result = await ItemRequest.create(payload);
    return result;
};

const getItemRequestPostedByFromDB = async (id) => {
    const result = await ItemRequest.aggregate([
        {
            $lookup: {
                from: "items",
                localField: "itemId",
                foreignField: "_id",
                as: "item",
            },
        },
        { $unwind: "$item" },
        {
            $lookup: {
                from: "users",
                localField: "item.userId",
                foreignField: "_id",
                as: "poster",
            },
        },
        { $unwind: "$poster" },
        {
            $lookup: {
                from: "users",
                localField: "requestedBy",
                foreignField: "_id",
                as: "requestedUser",
            },
        },
        { $unwind: "$requestedUser" },
        {
            $match: {
                "poster._id": new mongoose.Types.ObjectId(id),
            },
        },
    ]);

    return result;
};

const getItemRequestsByRequesterFromDB = async (requestedById) => {
    const result = await ItemRequest.find({
        requestedBy: requestedById,
        isDeleted: false,
    })
        .populate("requestedBy")
        .populate({
            path: "itemId",
            populate: {
                path: "userId",
                model: "User",
            },
        });

    return result;
};

export const ItemRequestServices = {
    postItemRequestIntoDB,
    getItemRequestPostedByFromDB,
    getItemRequestsByRequesterFromDB,
};
