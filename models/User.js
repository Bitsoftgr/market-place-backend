import mongoose, { Schema } from "mongoose"

const marketUsers=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    age:{type:Number,required:true}, // bigger than 15 
    phone:{type:Number,required:true,unique:true} ,// startsWith have to be (+992) and unique
    email:{type:String,required:false,unique:true}, // email is not be required ! 
    address:[
    {
            address:{type:String,required:true},
           additionalComent:{type:String},
    }
    ],// address can be added or edited additionalComent for deliver



},{
    timestamps:true
})