import AppError from "../../utils/AppError.js";
import httpStatus from "http-status";
import { User } from "./user.model.js";
import jwt from "jsonwebtoken";
import config from "../../config/index.js";

const registerUserIntoDB = async (payload) => {
    const isExist = await User.findOne({ email: payload.email });
    if (isExist) {
        throw new AppError(
            httpStatus.BAD_REQUEST,
            "This email already exist !!"
        );
    }
    const result = await User.create(payload);
    return result;
};

const loginUserIntoApps = async (payload) => {
    const { password, email } = payload;
    const isUserExist = await User.findOne({ email: email }).select("+password");
    if (!isUserExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "Email does not exist !!");
    }
    if (!password) {
        throw new AppError(httpStatus.BAD_REQUEST, "Password not given !!");
    }
    const matchPassword = await isUserExist.verifyPassword(password);

    if (!matchPassword) {
        throw new AppError(httpStatus.FORBIDDEN, "Wrong password !!");
    }
    const jwtPayload = {
        email: isUserExist?.email,
        role: isUserExist?.role,
        id: isUserExist?._id,
    };
    const createAccessToken = (jwtPayload) => {
        return jwt.sign(jwtPayload, config.jwt_secret_key, {
            expiresIn: config.jwt_secret_expires_in,
        });
    };

    return {
        accessToken: createAccessToken(jwtPayload)
    }
};

export const userServices = {
    registerUserIntoDB,
    loginUserIntoApps
};
