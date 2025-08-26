import React from "react";
import { motion } from "framer-motion";

const Home = ()=>{
    return(
        <>
        <div className="hero min-h[90vh] h-screen bg-gradient-to-b from-primary to-secondary flex items-center">
            <div className="max-w-md mx-auto text-primary-content text-center space-y-10">
                <motion.h1 
                initial={{y: -100,x: -100}}
                animate={{y:0,x:0}}
                transition={{duration:0.5}}
                className="text-2xl font-bold">Welcome to Chatapp </motion.h1>
        <motion.p 
        initial={{opacity:0,scale:0.5}}
        animate={{opacity:100,scale:1}}
        transition={{duration:1,ease:"easeIn"}}

        > Connect, chat and collaborate with friends and colleagues in
            real-time. Experience seamless communication with our modern
            messaging platform.</motion.p>

<motion.button 
           className="btn btn-primary" 
           initial={{y:40}}
           animate={{y:0}}
           transition={{duration:0.7,ease:"easeIn"}}>Get Started</motion.button> 

            </div>
           
        </div>
        </>
    )
}
export default Home;