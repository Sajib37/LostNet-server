import { Router } from "express";
import { userControllers } from "./user.controller.js";
const router = Router();
router.post('/register', userControllers.registerUser)
router.post('/login', userControllers.loginUser)
router.get('/',userControllers.getAllUser)
router.get('/:id',userControllers.getSingleUser)
router.patch('/:id', userControllers.updateUser)
router.delete('/:id', userControllers.deletUser)

export const userRoutes = router;