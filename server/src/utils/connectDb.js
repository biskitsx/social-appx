import mongoose from "mongoose"
import { logger  } from "./logger.js"
export const connectDb = async () => {
    try {
        const MONGO = process.env.MONGO_URI
        await mongoose.connect(MONGO)
        logger.info("Connected to DB")
    } catch(e) {
        logger.error("Can't Connect to DB")
    }
}