import catchAsync from "../../utils/catchAsync.js";
import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse.js";
import { userServices } from "./user.service.js";
const registerUser = catchAsync(async (req, res) => {
    const userData = req.body;
    const result= await userServices.registerUserIntoDB(userData)
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User registered successfully!",
        data: result,
    });
})
const loginUser = catchAsync(async (req, res) => {
    const paylod = req.body;
    const result= await userServices.loginUserIntoApps(paylod)
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User Login successfully!",
        data: result,
    });
})



export const userControllers = {
    registerUser,
    loginUser
}