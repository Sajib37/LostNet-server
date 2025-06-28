import { Router } from "express";
import { userControllers } from "./user.controller.js";
const router = Router();
router.post('/register', userControllers.registerUser)

// router.get('/')
// router.get('/:id')
// router.patch('/:id')

export const userRoutes = router;