import { Router } from "express";
import { createPost, deletePost, getPost, getUserPosts, likePost, unLikePost } from "../controllers/postController.js";
import { upload } from "../middlewares/uploadImage.js";
import { verifyAdmin, verifyUser } from "../middlewares/authMiddleware.js";
const router = Router()

router.post('/', verifyUser, upload.single('img'), createPost)
// router.post('/login', login)
router.get('/', getPost)
router.delete('/:id', deletePost)

router.put('/:id/like', verifyUser, likePost)
router.put('/:id/unlike', verifyUser, unLikePost)


router.get('/:id/info', getUserPosts)
export default router