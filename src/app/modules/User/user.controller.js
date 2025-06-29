import catchAsync from "../../utils/catchAsync.js";
import httpStatus from "http-status";
import { sendResponse } from "../../utils/sendResponse.js";
import { userServices } from "./user.service.js";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";
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
const getSingleUser = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result= await userServices.getSingleUserFromDB(id)
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "get Single user successfully!",
        data: result,
    });
})
const getAllUser = catchAsync(async (req, res) => {
    const result = await userServices.allUserFromDB();
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Get all users successfully!",
        data: result,
    });
})
const updateUser = catchAsync(async (req, res) => {
        let payload = {};
    
        if (req.body.data) {
            payload = JSON.parse(req.body.data);
        }
    
        if (req.file) {
            const uploadResult = await sendImageToCloudinary(
                req.file.originalname,
                req.file.buffer,
                req.file.mimetype
            );
            payload.image = uploadResult.secure_url;
        }
    const id = req.params.id;
    const result = await userServices.updateUserIntoDB({payload,id})
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Update user successfully!",
        data: result,
    });
})

const deletUser = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await userServices.deletUserFromDB(id)
    
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Delet user successfully!",
        data: result,
    });
})




export const userControllers = {
    registerUser,
    loginUser,
    getSingleUser,
    getAllUser,
    updateUser,
    deletUser
}