import { Router } from "express";
import { deleteUser, getUser, getUsers, updateUser, updateUserAndProfileImg } from "../controllers/userController.js";
import {verifyUser} from '../middlewares/authMiddleware.js'
import {upload} from '../middlewares/uploadImage.js'
const router = Router()

router.get("/get/:id", getUser)
router.get("",getUsers )
router.delete("/delete/:id", deleteUser)
router.put("/update/:id", updateUser)
router.put("/update-img", verifyUser,upload.single('img') ,updateUserAndProfileImg)

export default router