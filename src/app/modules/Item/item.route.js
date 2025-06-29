import { Router } from "express";
import { itemControllers } from "./item.controller.js";
const router = Router();
router.post('/post-item', itemControllers.createItem)
router.patch('/:id',itemControllers.upadetItem)
router.delete('/:id', itemControllers.deletItem)
router.get("/get-single-item/:id",itemControllers.getSingleItem)
router.get("/", itemControllers.getAllItem)
router.get("/delivered-items",itemControllers.getAllDeliveredItem)

export const itemRoutes = router;