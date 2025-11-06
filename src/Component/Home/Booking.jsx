import React from "react";
import { motion } from "framer-motion";
import bgImage from "../../assets/heroImage/booking7.webp";
import ImamHussain from "../../assets/heroImage/booking8.webp";
import { Link } from "react-router-dom";

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 80, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", duration: 0.8, bounce: 0.3 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const Booking = () => {
  return (
    <section
      className="relative bg-fixed bg-center bg-cover py-16 px-4 sm:py-20 sm:px-6 lg:py-24 lg:px-12 mt-[4rem] mb-[4rem]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

      <motion.div
        className="relative z-10 text-center text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div
          variants={cardVariants}
          className="max-w-3xl mx-auto mb-10 sm:mb-12"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-5xl font-primary text-white mb-4">
            How to Book and Choose Your Package
          </h1>
          <p className="text-gray-200 font-secondary text-sm sm:text-base md:text-lg">
            Follow these simple steps to make your spiritual journey seamless and stress-free.
          </p>
        </motion.div>

        {/* Booking Steps */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto md:justify-items-center"
          variants={containerVariants}
        >
          {[
            {
              id: 1,
              title: "Choose Package",
              desc: "Browse our exclusive range of Hajj, Umrah, and Ziyarat packages to find one that fits your schedule, budget, and spiritual needs.",
            },
            {
              id: 2,
              title: "Booking",
              desc: "Once you've chosen your desired package, fill out the booking form with your personal details and travel preferences.",
            },
            {
              id: 3,
              title: "Payment",
              desc: "Complete your booking securely with our flexible payment options. Receive instant confirmation and start preparing for your journey.",
            },
          ].map((step) => (
            <motion.div
              key={step.id}
              variants={cardVariants}
              whileHover={{ scale: 1.03 }}
              className={`flex flex-col items-center ${
                step.id === 3
                  ? "md:col-span-2 md:max-w-[370px] md:justify-self-center lg:col-span-1"
                  : ""
              }`}
            >
              <div className="max-w-[320px] sm:w-[320px] md:w-auto lg:h-[357px] border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] rounded-3xl p-[10px]">
                <div className="flex flex-col justify-between text-center bg-accentt text-white rounded-2xl shadow-2xl p-6 sm:p-8 h-full">
                  <div>
                    <h1 className="text-4xl sm:text-5xl font-primary mb-3 sm:mb-4">
                      0{step.id}
                    </h1>
                    <h2 className="text-xl sm:text-2xl font-primary mb-2 sm:mb-3">
                      {step.title}
                    </h2>
                    <p className="text-white text-sm sm:text-base font-secondary leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={containerVariants}
          className="mt-14 sm:mt-16 flex flex-col md:flex-row items-center justify-center gap-8 sm:gap-10"
        >
          {/* Text */}
          <motion.div
            variants={cardVariants}
            className="text-center md:text-left max-w-lg px-4"
          >
            <p className="text-gray-200 font-secondary mb-6 text-sm sm:text-base">
              Need help choosing the right package? Our dedicated travel
              consultants are here to assist you every step of the way.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-accentt text-white px-6 sm:px-8 py-3 rounded-full font-secondary font-medium text-base sm:text-lg hover:bg-[color:var(--color-accentt-hover)] transition-colors duration-300"
            >
              <Link to ="/contact">  Contact Us</Link>
            
            </motion.button>
          </motion.div>

          {/* Image */}
          <motion.div
            variants={imageVariants}
            className="p-[10px] rounded-3xl border-4 border-white shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          >
            <div className="w-[300px] sm:w-[350px] md:w-[400px] h-[200px] sm:h-[230px] md:h-[250px] rounded-2xl overflow-hidden shadow-lg">
              <img
                src={ImamHussain}
                alt="Booking Help"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Booking;
