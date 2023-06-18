import { Router } from "express";
import { createPost, deletePost, getPost, getUserPosts, likePost, unLikePost } from "../controllers/postController.js";
import { upload } from "../middlewares/uploadImage.js";
import { verifyAdmin, verifyUser } from "../middlewares/authMiddleware.js";
const router = Router()

router.post('/', verifyUser ,upload.single('img') ,createPost)
// router.post('/login', login)
router.get('/all-post', getPost)
router.delete('/:id', deletePost)

router.put('/like/:id', verifyUser, likePost)
router.put('/unlike/:id', verifyUser, unLikePost)


router.get('/user/:id', getUserPosts)
export default router