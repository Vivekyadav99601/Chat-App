import mongoose from "mongoose";

const connectDB = async()=>{
    try{

        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongoose connected",conn.connection.host);
        
    }catch(error){
     console.log("Error connectiog DB",error.message);
     process.exit(1);
     
    }
}
export default connectDB;