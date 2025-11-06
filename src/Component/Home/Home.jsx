import React from 'react'
import Topbar from '../hooks/Topbar';
import Navbar from '../hooks/Navbar';
import HeroSection from '../Home/HeroSection';
import Experience from '../Home/Experience';
import ZiyaratPackages from '../Home/ziyarat';
import Stats from '../Home/stats';
import Ashura from '../Home/Ashura';
import Booking from '../Home/Booking';
import Arbaeen from '../Home/Arbaeen';
import WhyChooseUs from '../Home/WhyChooseUs';
import Footer from '../Contact/Footer';

const Home = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <HeroSection/>
        <Experience/>
        <ZiyaratPackages/>
        <Stats/>
        <Ashura/>
        <Booking/>
        <Arbaeen/>
        <WhyChooseUs/>
        <Footer/>
    </div>
  )
}

export default Home
