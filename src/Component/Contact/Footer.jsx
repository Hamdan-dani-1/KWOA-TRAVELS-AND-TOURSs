import { Phone, Clock, MapPin } from "lucide-react";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Contact from "../../assets/contct1.jpeg";
import back from "../../assets/heroImage/back.jpeg";
import React from "react";

export default function Footer() {
  return (
    <div className="w-full relative">
      <div className=" mt-10 flex flex-col md:flex-row justify-between items-center bg-accentt-hover text-white rounded-[50px] px-6 md:px-12 py-6 w-[80%]  mx-auto relative z-10  shadow-lg">
        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Phone className="text-white" size={24} />
          <div>
            <h4 className="font-semibold text-lg">Telephone</h4>
            <p className="text-sm text-gray-200">+923001234567</p>
          </div>
        </div>

        <div className="flex items-center gap-3 mb-4 md:mb-0">
          <Clock className="text-white" size={24} />
          <div>
            <h4 className="font-semibold text-lg">Operational</h4>
            <p className="text-sm text-gray-200">Mon – Sat, 9 am – 4 pm</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <MapPin className="text-white" size={24} />
          <div>
            <h4 className="font-semibold text-lg">Location</h4>
            <p className="text-sm text-gray-200">2213 Maple Street, QA 1233</p>
          </div>
        </div>
      </div>

      <div
        className="relative w-full bg-gray-900 bg-opacity-90 text-white py-16 -mt-16"
        style={{
          backgroundImage: `url(${back})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className="absolute inset-0 opacity-20 pointer-events-none "
          style={{
            backgroundImage: `url(${Contact})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-between justify-items-center text-white mt-10">
          <div className="space-y-4 flex  flex-col justify-center items-center mt-10 sm:mt-0">
            <h2 className="text-2xl font-semibold mb-3 text-center text-white font-primary">
              Travel
            </h2>
            <p className="text-gray-300 text-sm w-45 text-center sm:text-center leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut elit
              tellus, luctus nec ullamcorper mattis.
            </p>
            <div className="flex gap-3 sm:justify-center lg:text-center lg:items-center">
              <div className="w-9 h-9 rounded-full bg-accentt flex items-center justify-center cursor-pointer hover:bg-accentts transition">
                <Facebook className="text-white w-4 h-4" />
              </div>
              <div className="w-9 h-9 rounded-full bg-accentt flex items-center justify-center cursor-pointer hover:bg-accentt-hover transition">
                <Twitter className="text-white w-4 h-4" />
              </div>
              <div className="w-9 h-9 rounded-full bg-accentt flex items-center justify-center cursor-pointer hover:bg-accentt-hover transition">
                <Instagram className="text-white w-4 h-4" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3  text-white font-primary">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm font-serif flex  flex-col justify-center items-center">
              <li className="hover:text-accentt cursor-pointer transition">
                About Us
              </li>
              <li className="hover:text-accentt cursor-pointer transition">
                Service
              </li>
              <li className="hover:text-accentt-hover cursor-pointer transition">
                Package
              </li>
              <li className="hover:text-accentt cursor-pointer transition">
                FAQ’s
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3  text-white font-primary">
              Support
            </h3>
            <ul className="space-y-2 text-gray-300 text-sm font-serif flex  flex-col justify-center items-center">
              <li className="hover:text-accentt cursor-pointer ">Condition</li>
              <li className="hover:text-accentt cursor-pointer transition">
                Disclaimer
              </li>
              <li className="hover:text-accentt cursor-pointer transition">
                Support
              </li>
              <li className="hover:text-accentt cursor-pointer transition">
                Privacy
              </li>
            </ul>
          </div>
          {/* Column 4 */}
          <div className="text-center sm:text-left">
            <h3 className="text-2xl font-semibold mb-3  text-white font-primary">
              Newsletter
            </h3>
            <div className="flex flex-col sm:flex-col lg:flex-col gap-3 justify-center sm:justify-start">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2.5 rounded-full  shadow-2xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accentt text-gray-700 placeholder-gray-400 bg-white"
              />
              <button className="bg-accentt hover:bg-accentt-hover text-white px-5 py-2 rounded-full transition">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <footer className="w-full bg-accentt text-white text-center p-4 text-sm hover:bg-accentt-hover transition-colors duration-300">
        &copy; 2024 Travel | Powered by Travel
      </footer>
    </div>
  );
}
