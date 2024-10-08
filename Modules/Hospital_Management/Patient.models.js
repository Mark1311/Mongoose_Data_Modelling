const mongoose = require('mongoose')

const patientSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    diagonseWith:{
        type:String,
        required:true
    },
    addresh:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    bloodGroup:{
        type:String,
        required:true,
        enum:["A+","B+","AB+","AB-","B-","B+"]
    },
    gender:{
        type:String,
        required:true,
        enum:["Male","Female","Other"]
    },
    admittedIn:{
        type: mongoose.Schema.type.ObjectID,
        ref:"Hospital"
    }
},{timestamps:true})


export const Patient = mongoose.model("Patient", patientSchema)