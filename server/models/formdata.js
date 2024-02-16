import mongoose from "mongoose";

const FormSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true
    }
},
{ timestamps: true }
);
const FormData = mongoose.model("FormData",FormSchema);
export default FormData;
