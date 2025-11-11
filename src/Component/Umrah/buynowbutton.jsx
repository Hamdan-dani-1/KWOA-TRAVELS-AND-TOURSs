import React from "react";
import { motion } from "framer-motion";

const BuyNowButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative overflow-hidden rounded-2xl px-8 py-3 text-white text-lg font-semibold shadow-lg"
      style={{
        background: "linear-gradient(to right, #926F4B, #A7835C)" // brown gradient
      }}
    >
      <span className="relative z-10">Book Now !!!</span>

      {/* Wave Animation */}
      <motion.span
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5, ease: "linear" }}
        className="absolute inset-0 opacity-40"
        style={{
          background: "linear-gradient(to right, #B08C61, #D1A17F, #B08C61)", // lighter brown wave
          transform: "skewX(-20deg)"
        }}
      />
    </motion.button>
  );
};

export default BuyNowButton;
