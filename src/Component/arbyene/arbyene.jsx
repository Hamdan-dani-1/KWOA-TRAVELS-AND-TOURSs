import React from "react";

import Topbar from "../hooks/Topbar";
import Navbar from "../hooks/Navbar";
import Mainpic from "./Mainpic";
import Arbeyene1 from "./arbyeneposter";
import Arbeyene2 from "./arbyeneposter2";
import WhyChooseUs from "../Home/WhyChooseUs";
import Footer from "../Contact/Footer";
const Arbyene=()=>{
return(
    <>
    <Topbar/>
    <Navbar/>
    <Mainpic/>
   
    <Arbeyene2/>
     <Arbeyene1/>
     <WhyChooseUs/>
     <Footer/>
    </>
)
}
export default Arbyene