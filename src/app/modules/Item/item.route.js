import { Router } from "express";
import { itemControllers } from "./item.controller.js";
const router = Router();
router.post('/post-item', itemControllers.createItem)
router.patch('/:id',itemControllers.upadetItem)
router.delete('/:id',itemControllers.deletItem)

export const itemRoutes = router;