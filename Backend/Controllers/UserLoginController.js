import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import RegModel from '../Models/RegModel.js';

const UserLoginController=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const user=await RegModel.findOne({email});
        if(!user){
            return res.status(400).send({
                success:false,
                message:"user not exist"
            })
        }

        const Match=await bcrypt.compare(password,user.password)
        if(!Match){
            return res.status(409).send({
                success:false,
                message:"invalid credential"
            })
        }

        const token=await jwt.sign({id:user._id},process.env.JWT_SECRET,{
            expiresIn:"1d"
        })

        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENV=="production",
            maxAge:24*60*60*1000
        })

        res.status(200).json({
            success:true,
            message:"Login Successfully"
        })
    }catch(err){
        console.log(err)
    }
}

export default UserLoginController

