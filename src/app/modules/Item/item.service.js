import { Item } from "./item.model.js"

const craeteItemIntoDB = async (payload) => {
    const result = await Item.create(payload)
    if (!result) {
        throw new AppError(httpStatus.BAD_REQUEST, "Failed to post !!")
    }

    return result;
}

export const itemServices = {
    craeteItemIntoDB
}