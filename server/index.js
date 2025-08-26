import dotenv from "dotenv"
dotenv.config();

import express from "express";
import connectDB from "./src/config/database.js"
import authroutes from "./src/routes/authRoutes.js"
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";

const app = express();
app.use(cors({origin:"http://localhost:5173" , credentials:true}));

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/auth",authroutes);

app.get("/api",(req,res) =>{
    res.status(200).json({
        message:"CHatApp Bankend is working",
    });
});

app.use((err,req,res,next) =>{
const statuscode = err.statusCode || 500;
const message = err.message ||"Internal Server Error";
res.status(statuscode).json({
    message,
});

});

const port = process.env.PORT || 5000;

app.listen(port,async ()=>{
    console.log("server Started at ",port);
    connectDB();
});
