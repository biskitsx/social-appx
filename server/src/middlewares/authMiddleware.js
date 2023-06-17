import User from "../models/userModel.js"
import { createError } from "../utils/createError.js"
import { tokenManager } from "../utils/tokenManager.js"

export const verifyUser = async (req, res, next) => {
    try {
        const token = req.cookies.access_token
        if (!token) return next(createError(404, "no token in cookies"))
        const decodedToken = tokenManager.verifyToken(token)
        const user = await User.findById(decodedToken.id)
        if (!user) return next(createError(404, "user not founded"))
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}

export const verifyAdmin = async (req, res, next) => {
    try {
        const token = req.cookies('access_token')
        if (!token) return next(createError(404, "no token in cookies"))
        const decodedToken = tokenManager.verifyToken(token)
        if (!decodedToken.isAdmin) return(createError(405, "you are not admin"))
        const user = await User.findById(decodedToken.id)
        if (!user) return next(createError(404, "user not founded"))
        req.user = user
        next()
    } catch (error) {
        next(error)
    }
}