import mongoose from "mongoose";



const historySchema=new mongoose.Schema({
    name:{type:String,required:true}
})

const History=mongoose.models.History || mongoose.model('History',historySchema)

export default History