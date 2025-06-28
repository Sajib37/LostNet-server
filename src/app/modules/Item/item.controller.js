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

export const itemControllers = {
    createItem
}