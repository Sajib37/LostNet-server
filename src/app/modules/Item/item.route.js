import { Router } from "express";
import { itemControllers } from "./item.controller.js";
const router = Router();
router.post('/post-item', itemControllers.createItem)


export const itemRoutes = router;