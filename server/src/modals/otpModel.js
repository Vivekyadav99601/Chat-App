import mongoose from "mongoose";

const OtpSchema = mongoose.Schema({
    otp:{
        type:String,
        reqyired:true,
    },
    email:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,
        expires:600,
    },

})
const OTP = mongoose.model("OTP",OtpSchema)
export default OTP;