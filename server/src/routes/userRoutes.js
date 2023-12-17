import { Router } from "express";
import { deleteUser, getUser, getUsers, updateUser, updateUserAndProfileImg } from "../controllers/userController.js";
import { verifyUser } from '../middlewares/authMiddleware.js'
import { upload } from '../middlewares/uploadImage.js'
const router = Router()

router.get("/:id/info", getUser)
router.get("/", getUsers)
router.delete("/:id", deleteUser)
// router.put("/update/:id", updateUser)
router.put("/", verifyUser, upload.single('img'), updateUserAndProfileImg)

export default router