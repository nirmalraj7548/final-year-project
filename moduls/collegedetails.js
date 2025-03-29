import mongoose from "mongoose";



const collegeSchema=new mongoose.Schema({
    schoolid:{type:String},
    name:{type:String,required:true},
    grade:{type:String,required:true},
    age:{type:String,required:true},
    gender:{type:String,required:true}
})

const college=mongoose.models.college||mongoose.model("college",collegeSchema)

export default college;