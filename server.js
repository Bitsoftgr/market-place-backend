import express from "express";
import mongoose from "mongoose";
import cors from "cors"
import ENV from './lib/ENV.js'

 const app=express()
 
 app.use(express())

 app.use(cors())

 mongoose.connect(ENV.MONGO_URL)
 .then(()=>console.log("MongoDb connected "))
.catch((err)=>console.log(`Error ocured while connecting mongoDb ${err.message}` ))
const PORT=ENV.PORT
app.listen(PORT,()=>console.log(`Backend is running under port ${PORT} `))

