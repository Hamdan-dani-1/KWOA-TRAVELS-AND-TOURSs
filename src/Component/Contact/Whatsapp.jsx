import React from "react";
import { FaWhatsapp } from "react-icons/fa";
const Whatsapp = () => {
  return (
    <div>
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 rounded-full
             shadow-lg hover:shadow-xl transition-transform duration-300 transform hover:scale-110 hover:rotate-6
             focus:outline-none focus:ring-4 focus:ring-green-300 z-50"
        title="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="w-7 h-7 animate-pulse drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]" />
      </a>
    </div>
  );
};

export default Whatsapp;
