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

const getSingleUserFromDB = async (id) => {
    const user = await User.findOne({ _id: id })
    if (!user) {
        throw new AppError(httpStatus.BAD_REQUEST, "User Not Found !!")
    }
    return user;
}

const allUserFromDB = async () => {
    const users = await User.find();
    return users;
}
const updateUserIntoDB = async ({payload,id}) => {
    const isExist = await User.findById(id);
    if (!isExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "User Not Found !!")
    }
    const result = await User.updateOne({ _id: id }, { $set: payload })
    return result;
}

const deletUserFromDB = async (id) => {
    const isExist = await User.findById(id);
    if (!isExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "User Not Found !!")
    }

    const result = await User.deleteOne({ _id: id })
    return result
}

export const userServices = {
    registerUserIntoDB,
    loginUserIntoApps,
    getSingleUserFromDB,
    allUserFromDB,
    updateUserIntoDB,
    deletUserFromDB
};
