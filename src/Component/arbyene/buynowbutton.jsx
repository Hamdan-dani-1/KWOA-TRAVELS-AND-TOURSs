import React from "react";
import { motion } from "framer-motion";

const BuyNowButton = ({ onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-green-600 px-8 py-3 text-white text-lg font-semibold shadow-lg"
    >
      <span className="relative z-=50">Book Now !!!</span>

      {/* Wave Animation */}
      <motion.span
        initial={{ x: "-100%" }}
        whileHover={{ x: "100%" }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5, ease: "linear" }}
        className="absolute inset-0 bg-gradient-to-r from-green-200 via-green-100 to-green-200 opacity-40"
        style={{ transform: "skewX(-20deg)" }}
      />
    </motion.button>
  );
};

export default BuyNowButton;
