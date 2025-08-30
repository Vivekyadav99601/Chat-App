import React from "react";
import {BrowserRouter,Routes ,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./pages/About"
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import Services from "./pages/Services";
import Register from "./pages/Signup";
import Chats from "./pages/chats";
import ChatPage from "./pages/ChatPage";
import Dashboard from "./pages/Dahboard";
import {Toaster} from "react-hot-toast";


const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Toaster/>
    <Navbar />
    <Routes>

    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/logout" element={<Logout/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/signup" element={<Register/>} />
    <Route path="/chats" element={<Chats/>} />
    <Route path="/chatPage" element={<ChatPage/>} />
    <Route path="/dashboard" element={<Dashboard/>} />

    </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App;