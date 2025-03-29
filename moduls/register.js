import mongoose from "mongoose";



const tableSchema=new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
})

const Register=mongoose.models.register||mongoose.model("register",tableSchema)

export default Register;