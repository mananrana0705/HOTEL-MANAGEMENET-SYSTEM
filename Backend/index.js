import express from "express"
import dotenv from "dotenv"
import userRoute from "./Routes/UserRoute.js"
import connectDb from "./db/db.js"
import cors from 'cors'
dotenv.config()

const app=express()

app.use(express.json())
app.use(cors())

app.use("/api",userRoute)

const port=process.env.PORT

app.listen(port,()=>{
    console.log(`server is running on ${port}`)
    connectDb()
})

export default app
