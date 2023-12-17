// package import
import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'
import cors from 'cors'
import morgan from 'morgan'
// dotenv
dotenv.config()

// routes import 
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import postRoutes from './routes/postRoutes.js'

// middleware import
import { errorMiddleware } from './middlewares/errorMiddleware.js'

// utils import
// import { connectDb } from './utils/connectDb.js'
import { connectDb } from './utils/connectDb.js'
import { logger } from './utils/logger.js'

// express app
const app = express()

// middleware
app.use(morgan('dev'))
app.use(express.json())
app.use(cookieParser())
// app.use(cors({ credentials: true, origin: "***" }))
// app.use(cors())
app.use(cors({ origin: ["http://localhost:5173", "server:5173"], credentials: true }))

// routes
app.use("/api/auth", authRoutes)
app.use("/api/users", userRoutes)
app.use("/api/posts", postRoutes)

// handle Error
app.use(errorMiddleware)

// listening
const PORT = process.env.PORT
app.listen(PORT, async () => {
    logger.info(`LISTENING AT PORT: ${PORT}`)
    await connectDb()
})
