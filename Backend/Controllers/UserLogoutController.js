import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const UserLogoutController=(req,res)=>{
    try{
        res.clearCookie("token",{
            httpOny:true,
            secure:process.env.NODE_ENV=="production",
        })
        res.status(200).json({
            success:true,
            message:"Logout Successfully"
        })
    }
    catch(err){
        console.log(err)
    }
}

export default UserLogoutController