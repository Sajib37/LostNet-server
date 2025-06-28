import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import { ItemRequestServices } from "./claimRequest.service.js";
import httpStatus from "http-status";


const postItemRequest = catchAsync(async (req, res) => {
    const payload=req.body
    const result= await ItemRequestServices.postItemRequestIntoDB(payload)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Request for item successfully!",
        data: result,
    });
})

export const itemRequestControllers = {
    postItemRequest
}
