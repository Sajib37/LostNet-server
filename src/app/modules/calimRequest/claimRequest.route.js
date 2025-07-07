import { Router } from "express";
import { itemRequestControllers } from "./claimRequest.controller.js";

const router = Router();
router.post('/', itemRequestControllers.postItemRequest)
router.get('/posted-by/:id',itemRequestControllers.getItemRequestPostedBy)
router.get('/requested-by/:id',itemRequestControllers.getItemRequestsByRequester)
router.get('/by-item/:id',itemRequestControllers.getItemRequestByItem)
export const itemRequestRoutes = router;