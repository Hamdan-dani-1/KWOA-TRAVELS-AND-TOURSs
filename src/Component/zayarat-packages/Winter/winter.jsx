import React from "react";
import Topbar from "../../hooks/Topbar";
import Navbar from "../../hooks/Navbar";
import Mainpic from "./MainWinterpic";
import WinterPostersection from "./winterposter";
import WhyChooseUs from "../../Home/WhyChooseUs";
import Footer from "../../Contact/Footer";
const Winter=()=>{
    return(
   <>
   <Topbar/>
   <Navbar/>
   <Mainpic/>
   <WinterPostersection/>
   <WhyChooseUs/>
   <Footer/>
   </>
    )
}


export default Winter