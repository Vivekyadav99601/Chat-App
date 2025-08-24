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


const App = ()=>{
  return(
    <>
    <BrowserRouter>
    <Navbar />
    <Routes>

    <Route path="/about" element={<About/>} />
    <Route path="/contact" element={<Contact/>} />
    <Route path="/home" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/logout" element={<Logout/>} />
    <Route path="/services" element={<Services/>} />
    <Route path="/signup" element={<Register/>} />

    </Routes>
    
    </BrowserRouter>
    </>
  )
}
export default App;