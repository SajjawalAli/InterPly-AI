import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    fireBaseUid: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true,
        lowercase: true
    },
    interviewCoin: {
        type: Number,
        default: 150
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema) 