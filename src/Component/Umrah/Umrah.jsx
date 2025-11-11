import React from "react";
import Topbar from "../hooks/Topbar";
import Navbar from "../hooks/Navbar";
import UmrahMainpic from "./umrahmainpic";
import UmrahPostersection from "./Umrahposter";
import WhyChooseUs from "../Home/WhyChooseUs";
import Footer from "../Contact/Footer";


const Umrah=()=>{
return(
    <>
    <Topbar/>
    <Navbar/>
    <UmrahMainpic/>
    <UmrahPostersection/>
    <WhyChooseUs/>
    <Footer/>
    
    </>
)
}

export default Umrah