import jwt from 'jsonwebtoken'

export class tokenManager {
    static createToken(id, isAdmin) {
        return jwt.sign({id, isAdmin}, process.env.JWT)
    }
    static verifyToken(token) {
        return jwt.verify(token, process.env.JWT)
    }
}