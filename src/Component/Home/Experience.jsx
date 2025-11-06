import React from "react";
import { motion } from "framer-motion";
import kaabah from "../../assets/heroImage/pilgrims.webp";
import ImamHussain from "../../assets/heroImage/ImamHussain1.webp";
import kaabah1 from "../../assets/heroImage/kaabah image9.jpg";

const Experience = () => {
  const images = [
    { src: kaabah, alt: "Kaabah Pilgrims" },
    { src: kaabah1, alt: "Kaabah View" },
    { src: ImamHussain, alt: "Imam Hussain Shrine" },
  ];

  // Smooth slide-up animation for entry
  const slideUp = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        delay: i * 0.2,
      },
    }),
  };

  return (
    <section className="bg-white py-20 mt-[2rem] md:mt-[3rem] lg:mt-[4rem] overflow-hidden">
      <div className="max-w-[1100px] mx-auto text-center px-4">
        {/* Heading */}
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold font-primary text-accentt mb-5"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
        >
          Experience the Privilege of Every Step
        </motion.h1>

        {/* Subheading */}
        <motion.p
          className="text-gray-600 text-sm sm:text-base md:text-lg mb-14 leading-relaxed font-secondary max-w-2xl mx-auto"
          variants={slideUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          Every step you take brings you closer to spiritual peace. Walk the
          sacred path with devotion and faith — from the call of your heart to
          the House of Allah.
        </motion.p>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center items-center">
          {images.map((img, i) => (
            <motion.div
              key={i}
              variants={slideUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={i * 0.3}
              whileHover={{
                y: -12, // slight lift-up effect
                scale: 1.03,
                boxShadow: "0 12px 30px rgba(0,0,0,0.25)",
                transition: { duration: 0.25, ease: "easeOut" }, // fast + smooth
              }}
              whileTap={{ scale: 0.98 }} // slight press effect on click
              className={` 
                w-full max-w-[400px] h-[350px] mx-auto relative
                border-[5px] border-accentt rounded-[3rem]
                overflow-hidden shadow-lg
                transition-transform duration-200
                ${
                  i === images.length - 1
                    ? "sm:col-span-2 sm:justify-self-center lg:col-span-1 lg:justify-self-auto"
                    : ""
                }
              `}
            >
              {/* Image Layer */}
              <div
                className="h-full w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${img.src})` }}
              ></div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 hover:opacity-40 transition duration-300"></div>

              {/* Caption */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center text-white">
                <motion.h3
                  className="text-lg font-semibold font-primary tracking-wide"
                  variants={slideUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.4 + 0.4}
                >
                  {img.alt}
                </motion.h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
