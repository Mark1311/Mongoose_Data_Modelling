const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    description:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    productImage:{
        type:String
    },
    price:{
        type: Number,
        default:0
    },
    stock:{
        type:Number,
        default:0
    },
    category:{
        type:mongoose.Schema.type.ObjectId,
        ref:'Category',
        required: true
    },
    ownerby:{
        type:mongoose.Schema.type.ObjectId,
        ref: "User"
    }
}, {timestamps:true})

export const Product = mongoose.model('Product', ProductSchema)