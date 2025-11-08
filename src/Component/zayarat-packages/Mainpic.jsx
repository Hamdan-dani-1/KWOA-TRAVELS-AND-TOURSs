import React from "react";
import bgImage1 from "../../assets/heroImage/heroo6.jpg";
import { motion } from "framer-motion";
import bgImage2 from "../../assets/heroImage/zuljanah.jpg";
const Mainpic = () => {
  return (
    <motion.div
      className="relative w-full h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.img
        src={bgImage2}
        alt="Contact us"
        className="w-full h-full object-cover"
        initial={{ scale: 1.05 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/20"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 sm:px-10">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-white drop-shadow-2xl z-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
         13 RAJAB PACKAGES 
        </motion.h2>

        <motion.p
          className="mt-4 text-sm sm:text-base md:text-lg text-gray-200 max-w-2xl drop-shadow-lg"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
        >
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Mainpic;
