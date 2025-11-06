import React from "react";
import { Mail, Phone, Twitter, Facebook } from "lucide-react";

const Topbar = () => {
  return (
    <div className="bg-accentt text-white text-sm py-2 px-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 ml-[10px] sm:ml-[30px]">
          <Mail size={16} />
          <span>quba@gmail.com</span>
        </div>

        <div className="hidden sm:flex items-center gap-1">
          <Phone size={16} />
          <span>(871) 224-456</span>
        </div>
      </div>

      <div className="flex items-center gap-3 mr-[5px] sm:mr-[40px]">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary transition"
        >
          <Twitter size={16} />
        </a>

        <a
          href="https://facebook.com/hamdan mansoor"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary transition"
        >
          <Facebook size={16} />
        </a>

        <a
          href="https://wa.me/+923088887540"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-secondary transition"
        >
          <i className="fa-brands fa-whatsapp text-[16px]"></i>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
