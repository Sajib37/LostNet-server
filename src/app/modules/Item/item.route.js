import { Router } from "express";
import { itemControllers } from "./item.controller.js";
import { upload } from "../../middleware/multerMemory.js";

const router = Router();
router.post('/post-item', upload.single("image"), itemControllers.createItem)
router.patch('/:id', upload.single("image"),itemControllers.upadetItem)
router.delete('/:id', itemControllers.deletItem)
router.get("/get-single-item/:id",itemControllers.getSingleItem)
router.get("/", itemControllers.getAllItem)
router.get("/delivered-items",itemControllers.getAllDeliveredItem)
router.get("/userItems/:id", itemControllers.getItemsByUserId)
export const itemRoutes = router;