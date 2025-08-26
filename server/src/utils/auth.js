import jwt from "jsonwebtoken";

const gentoken  = (user,res) =>{ 
const token = jwt.sign({ id:user_id},process.env.JWT_SECRET,{expiresIn:"1D"});

res.cookie("token",token,{
    httpOnly:true,
    secure:process.env.NODE_ENV ==="production",
   maxAge:24*60*60*1000,
   sameSite:"lax",

});
};
export default gentoken;