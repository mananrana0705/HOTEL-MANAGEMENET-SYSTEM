import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const connectDb=async()=>{
    await mongoose.connect("mongodb://localhost:27017/LOGIN_BOOK")
    .then(()=>console.log("mongoose connected successfully"))
    .catch(err=> console.log(err))
}

export default connectDb