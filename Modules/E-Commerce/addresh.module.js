const mongoose = require('mongoose')

const AddreshShema = new mongoose.Schema({

    House_Number:{
        type:Number,
        required:false,
        default:null
    },
    City:{
        type:String,
        required:true
    },
    PinCode:{
        type: Number,
        required:true
    },
    State:{
        type:String,
        required:true
    },
    country:{
        type:String,
        enum:["IND","PAK","BAN","SL"],
        required:true
    }


},{timestamps:true})


export const Addresh = mongoose.model("Addresh", AddreshShema)