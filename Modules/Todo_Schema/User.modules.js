const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required : true,
        lowercase: true,
        unique: true,
    },
    email: {
        type: String,
        required : true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required : [true, "Bhai ye jaruri h bhai"],
        min: [8, "Password must be atlest 8 words"],
        max: 12
    }
}, {timestamps:true})

export const User = mongoose.model('User', userSchema)