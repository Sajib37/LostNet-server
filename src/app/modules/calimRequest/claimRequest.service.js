import { ItemRequest } from "./claimRequest.model.js"

const postItemRequestIntoDB =async (payload) => {
    const result = await ItemRequest.create(payload)
    return result;
}


export const ItemRequestServices = {
    postItemRequestIntoDB
}