import mongoose from "mongoose";



const schooldetailsSchema=new mongoose.Schema({
    name:{type:String,required:true},
    grade:{type:String,required:true},
    age:{type:String,required:true},
    gender:{type:String,required:true}
})

const schooldetails=mongoose.models.schooldetails||mongoose.model("schooldetails",schooldetailsSchema)

export default schooldetails;