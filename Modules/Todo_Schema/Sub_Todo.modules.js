const mongoose = require('mongoose')

const subtodoSchema = new mongoose.Schema({

    content:{
        type:String,
        required: true,
    },
    complete:{
        type: Boolean,
        default:false
    },
    owneBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})


export const SubTodo = mongoose.model('SubTodo', subtodoSchema)

