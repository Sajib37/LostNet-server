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


const getItemRequestPostedBy = catchAsync(async (req, res) => {
    const id=req.params.id
    const result= await ItemRequestServices.getItemRequestPostedByFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Requesed By get Item-request successfully!",
        data: result,
    });
})

const getItemRequestsByRequester = catchAsync(async (req, res) => {
    const id=req.params.id
    const result= await ItemRequestServices.getItemRequestsByRequesterFromDB(id)
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Requesed By get Item-request successfully!",
        data: result,
    });
})

export const itemRequestControllers = {
    postItemRequest,
    getItemRequestPostedBy,
    getItemRequestsByRequester
}
