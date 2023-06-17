import mongoose, { Document, Model, model } from 'mongoose'

const postSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    comments: [{
        comment: String,
        commentedBy: {
            type: mongoose.Types.ObjectId,
            ref: "User"
        }
    }],
    picturePath: {},
    postedBy: {
        type: mongoose.Types.ObjectId,
        ref: "User"
    }
},{ timestamps: true})

const Post = model("Post", postSchema)
export default Post