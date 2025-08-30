import React ,{useState} from "react"
import toast from "react-hot-toast";
import api from "../../config/Api.jsx";
import {useNavigate} from "react-router-dom";

const OTPModel =({ isOpen, onClose,callingPage,data})=>{
    const navigate= useNavigate();

    const [otp,setOtp] = useState("");

const handleOTPSubmit = async()=>{
    
    data.otp = otp; 
    console.log("OTP data",data);
    console,log("OTP Submitted",otp);

    try {
        let res;
        if(callingPage ==="register"){
            res = await api.post("/auth/register",data);
        }else{
            res= await api.post("/auth/login",data);
        }
        toast.success(res.data.message);
        onClose();
        callingPage === "register"?navigate("/login"):navigate("/dashboard");

    } catch (error) {
        toast.error("Error Creating account");
    }
    };


    return(
        <>
        <div className="fixes inset-0 bg-black/50 flex items-center justify-center z-20">
         <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-lg font-semibold mb-4 ">Enter your OTP</h2>
            <input
             type="text"
             placeholder="enter otp "
             className="border border-gray-200 p-2 rounded w-full mb-4"
             value={otp}
             onChange={(e) =>setOtp(e.target.value)}
             />
             <button
              className="bg-blue-500 text-white p-2 rounded" 
              onClick={handleOTPSubmit}>
                {callingPage ==="register"?"verify & register":"verify & login"}
                </button>
            </div>   
        </div>
        </>
    );
};
export default OTPModel;
