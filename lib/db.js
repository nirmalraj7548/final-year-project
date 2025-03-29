import mongoose from "mongoose"


const dbconnection=async()=>{
    try {
        await mongoose.connect(process.env.DB_URL)
        console.log("Connected")
    } catch (error) {
        console.log("not connected")
    }
}

export  default dbconnection