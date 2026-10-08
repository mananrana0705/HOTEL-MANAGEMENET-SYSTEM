import express from 'express'
import UserRegController from '../Controllers/UserRegController.js'
import BookingController from '../Controllers/BookingController.js'
import UserLoginController from '../Controllers/UserLoginController.js'
import UserLogoutController from '../Controllers/UserLogoutController.js'

const userRoute=express()

userRoute.post('/Login',UserLoginController)
userRoute.post('/Logout',UserLogoutController)
userRoute.post('/Register',UserRegController)
userRoute.post('/Booking',BookingController)

export default userRoute