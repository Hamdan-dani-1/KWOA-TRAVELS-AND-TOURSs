import React from "react";
import { motion } from "framer-motion";
import ashuraImg from "../../assets/heroImage/ImamHussain1.webp";
import { ashuraPackages } from "../../JsonData/Data";

const Ashura = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={fadeUp}
      className="bg-[#f9f8f6] py-10 px-5 md:px-10"
      id="ashura"
    >
      {/* Section Heading */}
      <motion.div
        variants={fadeUp}
        className="text-center mb-14"
      >
        <h2 className="text-3xl font-primary sm:text-4xl md:text-5xl font-bold text-accentt mb-4">
          Ashura Oblige Packages
        </h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed font-secondary">
          Commemorate the sacred event of Karbala with our exclusive Ashura
          packages. Experience deep spiritual connection, reflection, and
          devotion during the most revered days of Muharram.
        </p>
      </motion.div>

      {/* Grid Layout with staggered animation */}
      <motion.div
        variants={container}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center sm:justify-items-center"
      >
        {ashuraPackages.map((pkg, index) => (
          <motion.div
            key={pkg.id}
            variants={fadeUp}
            className={`
              w-[320px] sm:w-[300px] md:w-[340px] lg:w-[290px] xl:w-[400px]
              mx-auto relative rounded-2xl overflow-hidden bg-white 
              shadow-md hover:shadow-2xl transition-all duration-500 group
              ${index === ashuraPackages.length - 1
                ? "sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto"
                : ""}
            `}
          >
            {/* Image */}
            <div className="relative h-56 overflow-hidden">
              <img
                src={ashuraImg}
                alt={pkg.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
              <div className="absolute bottom-3 left-4 text-white text-sm flex items-center gap-2">
                <i className="fa-solid fa-location-dot text-accentt"></i>
                {pkg.location}
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 font-primary">
                {pkg.title}
              </h3>
              <p className="text-gray-600 text-sm mb-3 font-secondary">
                {pkg.description}
              </p>

              <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                <span className="flex items-center gap-1">
                  <i className="fa-regular fa-clock text-accentt"></i>
                  {pkg.duration}
                </span>
                <span className="flex items-center gap-1 font-semibold text-accentt">
                  <i className="fa-solid fa-tag"></i> {pkg.price}
                </span>
              </div>

              <button className="w-full py-2 rounded-xl bg-accentt hover:bg-accentt-hover text-white font-semibold font-secondary transition-all">
                View Details
              </button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Ashura;

