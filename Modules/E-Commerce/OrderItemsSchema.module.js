const mongoose = require("mongoose")


const OrderItemsSchema = new mongoose.Schema({
    productId :{
        type: mongoose.Schema.type.ObjectId,
        ref: 'Product'
    },

    quantity:{
        type:Number,
        required:true
    }
})


export const OrderItems = mongoose.model('OrderItems', OrderItemsSchema)