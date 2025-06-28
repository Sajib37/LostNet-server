import { Item } from "./item.model.js"

const craeteItemIntoDB = async (payload) => {
    const result = await Item.create(payload)
    if (!result) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to post !!")
    }

    return result;
}
const updateItemIntoDB = async ({ payload, id }) => {
    const isExist = await Item.findById(id);
    if (!isExist) {
        throw new AppError(httpStatus.BAD_REQUEST, "Item Not Found !!")
    }

    const result = await Item.updateOne({ _id: id }, { $set: payload })
    return result;
}
const deletItemFromDB = async (id) => {
    const result = await Item.deleteOne({ _id: id })
    return result;
}
const getAllItemFromDB = async () => {
    const result = await Item.find().populate('userId');
    return result;
}
const getSingleItemFromDB = async (id) => {
    const result = await Item.findById(id).populate('userId')
    return result;
}
export const itemServices = {
    craeteItemIntoDB,
    updateItemIntoDB,
    deletItemFromDB,
    getAllItemFromDB,
    getSingleItemFromDB
}