import mongoose from "mongoose";

//schema
const regSchema = new mongoose.Schema({
    username: {
        type:String,
        required: true
    },
    email: {
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
},{timestamps:true})

const RegModel=mongoose.model('users',regSchema)
export default RegModel