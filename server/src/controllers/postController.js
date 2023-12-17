import { cloudinaryUploadImg, cloudinaryDeleteImg } from '../utils/cloudinary.js'
import Post from '../models/postModel.js'

export const createPost = async (req, res, next) => {
    try {
        const { title } = req.body
        let post = await new Post({title, postedBy: req.user._id }).populate('postedBy')

        if (req.file?.path) {
            const newPath = await cloudinaryUploadImg(req.file.path)
            post.picturePath = newPath
        }

        await post.save()
        return res.json(post) 
    } catch (error) {
        next(error)
    }
}
export const getPost = async (req, res, next) => {
    try {
        const post = await Post.find({}).sort({ createdAt :-1 }).populate('postedBy likes comments')
        res.json(post)
    } catch (error) {
        next(error)
    }
}

export const deletePost = async (req, res, next) => {
    try {
        const post = await Post.findById(req.params.id)
        const publicId = post.picturePath?.public_id
        if (publicId) {
            await cloudinaryDeleteImg(publicId)
        }

        await post.deleteOne()
        res.json({msg: 'delete successfully'})
    } catch (error) {
        next(error)
    }
}

export const likePost = async (req, res, next) => {
    try {
        const userId = req.user._id
        const {id} = req.params
        const post = await Post.findByIdAndUpdate(id, {
            $push: {likes: userId}
        }, {new: true}).populate('postedBy')
        res.json(post)
    } catch(error) {
        next(error)
    }
}

export const unLikePost = async (req, res, next) => {
    try {
        const userId = req.user._id
        const {id} = req.params
        const post = await Post.findByIdAndUpdate(id, {
            $pull: {likes: userId}
        }, {new:true}).populate('postedBy')
        res.json(post)
    } catch(error) {
        next(error)
    }
}

export const getUserPosts = async (req, res, next) => {
    try {
        const { id } = req.params
        const posts = await Post.find({postedBy: id}).populate('postedBy likes comments')
        res.json(posts)
    } catch(error) {
        next(error)
    }
}


// export const createPost = async (req, res, next) => {
//     try {
        
//     } catch (error) {
//         next(error)
//     }
// }
// export const createPost = async (req, res, next) => {
//     try {
        
//     } catch (error) {
//         next(error)
//     }
// }