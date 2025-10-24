import mongoose, { Schema } from "mongoose"

const marketUsers=new mongoose.Schema({
    firstname:{type:String,required:true},
    lastname:{type:String,required:true},
    age:{type:Number,required:true,min:16}, // bigger than 15
    phone:{type:String,required:true,unique:true,validate:{validator:function(v){return /^\+992\d{9}$/.test(v)},message:'Phone number must be +992 followed by 9 digits'}}, // startsWith have to be (+992) and unique
    email:{type:String,required:false,unique:true,sparse:true,validate:{validator:function(v){return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)},message:'Invalid email format'}}, // email is not be required !
    address:[
    {
            address:{type:String,required:true},
           additionalComment:{type:String},
    }
    ],// address can be added or edited additionalComent for deliver



},{
    timestamps:true
})
export default mongoose.model('marketUsers',marketUsers)