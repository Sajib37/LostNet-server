import catchAsync from "../../utils/catchAsync.js";
import { sendResponse } from "../../utils/sendResponse.js";
import httpStatus from "http-status";
import { itemServices } from "./item.service.js";
import { sendImageToCloudinary } from "../../utils/sendImageToCloudinary.js";

const createItem = catchAsync(async (req, res) => {
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
    const result = await itemServices.craeteItemIntoDB(payload);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "item posted successfully!",
        data: result,
    });
});
const upadetItem = catchAsync(async (req, res) => {
    const id = req.params.id;
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

    const result = await itemServices.updateItemIntoDB({ payload, id });
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "item updated successfully!",
        data: result,
    });
});
const deletItem = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await itemServices.deletItemFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "item deleted successfully!",
        data: result,
    });
});
const getAllItem = catchAsync(async (req, res) => {
    const result = await itemServices.getAllItemFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All Item retrieve successfully!",
        data: result,
    });
});
const getAllDeliveredItem = catchAsync(async (req, res) => {
    const result = await itemServices.getAllDeliveredItemFromDB();
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "All Delivered Item retrieve successfully!",
        data: result,
    });
});

const getSingleItem = catchAsync(async (req, res) => {
    const id = req.params.id;
    const result = await itemServices.getSingleItemFromDB(id);
    sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Item retrieve successfully!",
        data: result,
    });
});

export const itemControllers = {
    createItem,
    upadetItem,
    deletItem,
    getAllItem,
    getSingleItem,
    getAllDeliveredItem,
};
