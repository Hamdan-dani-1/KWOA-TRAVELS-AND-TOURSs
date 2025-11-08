import react from "react"
import Navbar from "../hooks/Navbar"
import Topbar from "../hooks/Topbar"
import Mainpic from "./Mainpic" 

import Postersection from "./postersection"
import Footer from "../Contact/Footer"
import WhyChooseUs from "../Home/WhyChooseUs"
const Rajab =()=>{
    return(
        <>
        <Topbar/>
           <Navbar/>
         <Mainpic/>
         <Postersection/>
         <WhyChooseUs/>
         <Footer/>
       </>
    )
}

export default Rajab