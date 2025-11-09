import React from "react";

import Topbar from "../../hooks/Topbar";
import Navbar from "../../hooks/Navbar";
import WhyChooseUs from "../../Home/WhyChooseUs";
import Footer from "../../Contact/Footer";
import IranMainpic from "./iranpic";
import IranPostersection from "./iranposter";
const Iranspecial=()=>{
    return(
        <>
        <Topbar/>
        <Navbar/>
        <IranMainpic/>
        <IranPostersection/>
        <WhyChooseUs/>
        <Footer/>


        </>
    )
}

export default Iranspecial