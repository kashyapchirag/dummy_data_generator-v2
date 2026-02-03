import mongoose from "mongoose";
const connect = async() =>{
    try{
        mongoose.connect("mongodb://localhost:27017/company")
        console.log('mongodb connected');
    }catch(err){
        console.log(err.message)
    }
}
connect();
const employeeSchema = new mongoose.Schema({
    name:String,
    salary:Number,
    language:String,
    city:String,
    isManager:Boolean
})
export const Employee = mongoose.model("employee",employeeSchema)