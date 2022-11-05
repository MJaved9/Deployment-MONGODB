const mongoose=require("mongoose");


const StudentSchema=new mongoose.Schema({
    name:String,
    batch:String,
    roll_No:Number,
})

const StudentModel=mongoose.model("students",StudentSchema)


module.exports={
    StudentModel
}