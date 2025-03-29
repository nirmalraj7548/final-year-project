 import mongoose from "mongoose";



const tableSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    age:{type:String,required:true},
    phone:{type:String,required:true}
})

const DataTable=mongoose.models.dataTable||mongoose.model("dataTable",tableSchema)

export default DataTable;