import React from "react";
import Navbar from "../../hooks/Navbar";
import Topbar from "../../hooks/Topbar";
import ShabanMainpic from "./shabanmainpic";
import ShabanPostersection from "./shabanposter";
import WhyChooseUs from "../../Home/WhyChooseUs";
import Footer from "../../Contact/Footer";

const Shaban=()=>{
    return(
        <>
        <Topbar/>
        <Navbar/>
        <ShabanMainpic/>
        <ShabanPostersection/>
        <WhyChooseUs/>
        <Footer/>

        </>
    )
}
export default Shaban

