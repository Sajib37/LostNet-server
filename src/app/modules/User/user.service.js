import AppError from "../../utils/AppError.js"
import httpStatus from "http-status";
import { User } from "./user.model.js";

const registerUserIntoDB = async (payload) => {
    const isExist= await User.findOne({email:payload.email})
    if (isExist) {
        throw new AppError(httpStatus.BAD_REQUEST,"This email already exist !!")
    }
    const result = await User.create(payload)
    return result
}

export const userServices = {
    registerUserIntoDB
}