import { Router } from "express";
import { itemRequestControllers } from "./claimRequest.controller.js";

const router = Router();
router.post('/',itemRequestControllers.postItemRequest)

export const itemRequestRoutes = router;