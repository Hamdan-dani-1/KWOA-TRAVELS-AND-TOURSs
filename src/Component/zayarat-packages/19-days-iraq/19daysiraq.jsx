import React from "react";
import Topbar from "../../hooks/Topbar";
import Navbar from "../../hooks/Navbar";
import IranMainpic from "../iran-special/iranpic";
import WhyChooseUs from "../../Home/WhyChooseUs";
import Footer from "../../Contact/Footer";
import IraqPostersection from "./iraqposter";

const DaysIraq=()=>{
    return(
 <>
 <Topbar/>
 <Navbar/>
<IranMainpic/>
<IraqPostersection/>
<WhyChooseUs/>
<Footer/>
 </>

    )
}
export default DaysIraq