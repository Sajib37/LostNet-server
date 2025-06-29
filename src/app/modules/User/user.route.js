import { Router } from "express";
import { userControllers } from "./user.controller.js";
import { upload } from "../../middleware/multerMemory.js";
const router = Router();
router.post('/register', userControllers.registerUser)
router.post('/login', userControllers.loginUser)
router.get('/',userControllers.getAllUser)
router.get('/:id',userControllers.getSingleUser)
router.patch('/:id', upload.single("image"), userControllers.updateUser)
router.delete('/:id', userControllers.deletUser)

export const userRoutes = router;