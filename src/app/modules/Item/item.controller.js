import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import httpStatus from "http-status";
import { itemServices } from "./item.service.js";

const createItem = catchAsync(async (req, res) => {
    const payload = req.body;
    const result= await itemServices.craeteItemIntoDB(payload)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "item posted successfully!",
        data: result,
    });
})
const upadetItem = catchAsync(async (req, res) => {
    const payload = req.body;
    const id= req.params.id
    const result= await itemServices.updateItemIntoDB({payload,id})
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "item updated successfully!",
        data: result,
    });
})
const deletItem = catchAsync(async (req, res) => {
    const id= req.params.id
    const result= await itemServices.deletItemFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "item deleted successfully!",
        data: result,
    });
})

export const itemControllers = {
    createItem,
    upadetItem,
    deletItem
}