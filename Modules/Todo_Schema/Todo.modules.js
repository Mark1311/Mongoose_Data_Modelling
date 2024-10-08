const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({

    content:{
        tyep: String,
        required: true,      
    },
    complete:{
        type: Boolean,
        default:false,
        required:true,
    },
    ownerby:{
        type: mongoose.Schema.type.ObjectId,
        ref: 'User'
    }, // Jisne Todo create kiya ha.
    subTodos:[
        {
            type: mongoose.Schema.type.ObjectId,
            ref: 'SubTodo'
        } // Array of sub_Todos.
        
    ]
    

}, {timestamps: true})


export const Todo = mongoose.model('Todo', todoSchema)