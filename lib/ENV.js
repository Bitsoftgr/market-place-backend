import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const ENV ={
PORT:process.env.PORT || 7070,
MONGO_URL:process.env.MONGO_URL,
JWT_SECRET:process.env.JWT_SECRET,
JWT_REFRESH_SECRET:process.env.JWT_REFRESH_SECRET,
CLOUDINARY_CLOUD_NAME:process.env.CLOUDINARY_CLOUD_NAME,
CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET

}

export default ENV
