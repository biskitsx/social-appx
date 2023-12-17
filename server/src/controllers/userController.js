import User from "../models/userModel.js"
import { cloudinaryUploadImg } from "../utils/cloudinary.js"
import { createError } from "../utils/createError.js"

/* GET USER*/
export const getUser = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) return next(createError(404, "user not found"))
        res.json(user)
    } catch (e) {
        next(e)
    }
}
/* GET ALL USER*/
export const getUsers = async (req, res, next) => {
    try {
        const user = await User.find({})
        res.json(user)
    } catch (e) {
        next(e)
    }
}
/* DELETE USER */
export const deleteUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        res.json(user)
    } catch (e) {
        next(e)
    }
}
/* UPDATE USER */
export const updateUser = async (req, res, next) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body
        }, { new: true })
        res.json(user)
    } catch (e) {
        next(e)
    }
}

export const updateUserAndProfileImg = async (req, res, next) => {
    try {
        if (req.file) {
            const newPath = await cloudinaryUploadImg(req.file.path)
            console.log(newPath)
            const user = await User.findByIdAndUpdate(req.user._id, {
                ...req.body,
                picturePath: newPath
            }, { new: true })
            console.log(user)
            return res.json(user)
        }
        const user = await User.findByIdAndUpdate(req.user._id, {
            $set: req.body
        }, { new: true })
        return res.json(user)
    } catch (e) {
        next(e)
    }
}

