import mongoose, { Document, Model, model } from 'mongoose'

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    isOnline: {
        type: Boolean,
    },
    friend: [{
        type: mongoose.Types.ObjectId,
        ref: "User"
    }],
    occupation: {
        type: String,
        default: ''
    },
    location: {
        type: String,
        default: ''
    },
    picturePath: {
        url: {
            type: String,
            default: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
        },
        asset_id: {
            type: String,
            default: ''

        },
        public_id: {
            type: String,
            default: ''
        }
    }

}, { timestamps: true })

const User = model("User", userSchema)
export default User