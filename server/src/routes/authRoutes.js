import express from "express";
import { Register,Login,GoggleLogin,SendOTPLogin,SendOTPRegister } from "../controllers/authController.js";

const router= express.Router();

router.post("/register",Register);
router.post("/login",Login);
router.post("/goggleLogin",GoggleLogin);
router.post("/sendOTPLogin",SendOTPLogin);
router.post("/sendOTPRegister",SendOTPRegister);

export default router;
