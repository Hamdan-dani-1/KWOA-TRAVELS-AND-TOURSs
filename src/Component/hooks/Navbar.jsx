import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuIcon, setMenuIcon] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const onMenuIcon = () => {
    setMenuIcon(!menuIcon);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="absolute top-9 left-0 w-full flex justify-between items-center p-6 bg-black/40 text-white shadow-lg backdrop-blur-sm z-20">
      <h1 className="text-2xl ml-[10px] font-bold sm:ml-[30px]">TravelSite</h1>
      
      {/* Desktop Menu */}
      <ul className="hidden lg:flex lg:space-x-8">
        <li className="hover:text-accentt cursor-pointer transition">
          <Link to="/home">Home</Link>
        </li>

        {/* Zayarat Dropdown */}
        <li 
          className="relative group cursor-pointer"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <div className="flex items-center gap-1">
            Zayarat Packages
            <i className="fa-solid fa-chevron-down text-sm mt-[2px]"></i>
          </div>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <ul className="absolute top-full left-0 mt-2 bg-black/70 backdrop-blur-md rounded-md shadow-lg w-[200px] py-2 text-white z-50">
              <li className="px-4 py-2 hover:bg-accentt transition">
                <Link to="/zayarat/iraq">Iraq Packages</Link>
              </li>
              <li className="px-4 py-2 hover:bg-accentt transition">
                <Link to="/zayarat/iran">Iran Packages</Link>
              </li>
              <li className="px-4 py-2 hover:bg-accentt transition">
                <Link to="/zayarat/syria">Syria Packages</Link>
              </li>
            </ul>
          )}
        </li>

        <li className="hover:text-accentt cursor-pointer transition">Ashura Oblige 
          
           </li>
        <li className="hover:text-accentt cursor-pointer transition">Arbaeen</li>
        <li className="hover:text-accentt cursor-pointer transition">Umrah</li>
        <li className="hover:text-accentt cursor-pointer transition">About</li>
        <li className="hover:text-accentt mr-[20px] cursor-pointer transition">
                    <Link to="/contact">Contact</Link>

        </li>
      </ul>

      {/* Mobile Menu Icon */}
      <div className="text-[2rem] sm:mr-[30px] lg:hidden">
        <i className="fa-solid fa-bars" onClick={onMenuIcon}></i>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          transition-all duration-700 ease-in-out overflow-hidden lg:hidden 
          backdrop-blur-md bg-accentt absolute top-[92px] left-0 w-full z-50
          ${menuIcon ? 'max-h-[500px] opacity-100 visible' : 'max-h-0 opacity-0 invisible'}
        `}
      >
        <ul className="pl-[3rem] pt-[1rem] pb-[1rem] space-y-2 text-white">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/testimonials">Testimonials</Link></li>
          <li><Link to="/our-work">Our Work</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
