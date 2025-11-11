
import React from "react";
import Topbar from "../hooks/Topbar";
import Navbar from "../hooks/Navbar";
import AshuraMainpic from "./ashuramainpic";
import AshuraPostersection from "./AshuraPoster";
import WhyChooseUs from "../Home/WhyChooseUs";
import Footer from "../Contact/Footer";

const Ashura=()=>{
    return(
        <>
        <Topbar/>
        <Navbar/>
        <AshuraMainpic/>
        <AshuraPostersection/>
        <WhyChooseUs/>
        <Footer/>
        </>
    )
}
export default Ashura