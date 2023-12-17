import bcrypt from 'bcrypt'
import User from '../models/userModel.js'
import { createError } from '../utils/createError.js'
import { tokenManager } from '../utils/tokenManager.js'

export const register = async (req, res, next) => {
    try {
        // not fill
        const { email, password, firstName, lastName } = req.body
        console.log({ firstName, lastName, email, password })
        if (!(email && password && firstName && lastName)) return next(createError(400, "All field is required"))

        // email already exists
        const already = await User.findOne({ email })
        if (already) return next(createError(400, "This email already used"))

        const user = new User(req.body)
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(password, salt)
        await user.save()

        // token 
        const token = tokenManager.createToken(user._id, user.isAdmin)
        res.cookie("access_token", token)
        res.json(user)
    } catch (error) {
        next(error)
    }
}
export const login = async (req, res, next) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) return next(createError(400, "Wrong email"))

        const match = await bcrypt.compare(password, user.password)
        if (!match) return next(createError(400, "Wrong password"))

        // token 
        const token = tokenManager.createToken(user._id, user.isAdmin)
        res.cookie("access_token", token)

        res.json(user)

    } catch (error) {
        next(error)
    }
}
export const logout = (req, res, next) => {
    try {
        res
            .clearCookie("access_token")
            .json({ msg: "LOGOUT successfully" })
    } catch (error) {
        next(error)
    }
}