const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    username:{
        tyep:String,
        required: true,
        lowercase: true,
        unique: true
    },
    email:{
        tyep:String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        min:[8, "Please Min Lenght of Passwors is 8"],
        max:12
    }
}, {timestamps:true})

export const User = mongoose.model('User', UserSchema)