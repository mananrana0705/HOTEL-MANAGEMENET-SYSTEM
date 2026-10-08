import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import RegModel from '../Models/RegModel.js';

const UserRegController=async(req,res)=>{
    try{
        const {username,email,password}=req.body;
        if(!username || !email || !password){
            res.status(400).send({
                success:fals,
                message:"please Provide details"
            })
        }

        const existingUser=await RegModel.findOne({email})
        if(existingUser){
            return res.status(400).json({
                success:false,
                messsage:"user already exist"
            })
        }

        const hashPassword=await bcrypt.hash(password,10);

        const newUser=new RegModel({
            username,
            email,
            password:hashPassword
        })
        await newUser.save();

        res.status(200).send({
            success:true,
            message:"user registered successfully"
        })
    }
    catch(err){
        console.log(err)
    }
}

export default UserRegController