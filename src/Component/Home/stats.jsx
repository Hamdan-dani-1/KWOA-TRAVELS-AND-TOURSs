import React from "react";
import { motion } from "framer-motion";
import kaabah from "../../assets/heroImage/pilgrims2.webp";

const Stats = () => {
  // Fade-up for the section
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Container for staggered animation (cards come one after another)
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
      className="relative bg-cover bg-center bg-no-repeat mt-[4rem] mb-[4rem] py-[4rem] px-5 md:px-10"
      style={{ backgroundImage: `url(${kaabah})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Stats content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto">
        <motion.div
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-10 xl:gap-0"
        >
          {/* Card 1 */}
          <motion.div variants={fadeUp} className="xl:border-r-4 border-accentt">
            <h3 className="text-5xl md:text-6xl font-primary text-white mb-2">
              128K+
            </h3>
            <p className="text-gray-200 font-secondary text-sm md:text-base">
              Happy Travelers
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div variants={fadeUp} className="xl:border-r-4 border-accentt">
            <h3 className="text-5xl md:text-6xl font-primary text-white mb-2">
              23+
            </h3>
            <p className="text-gray-200 font-secondary text-sm md:text-base">
              Experience
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div variants={fadeUp} className="xl:border-r-4 border-accentt">
            <h3 className="text-5xl md:text-6xl font-primary text-white mb-2">
              15+
            </h3>
            <p className="text-gray-200 font-secondary text-sm md:text-base">
              Tour Destination
            </p>
          </motion.div>

          {/* Card 4 */}
          <motion.div variants={fadeUp}>
            <h3 className="text-5xl md:text-6xl font-primary text-white mb-2">
              99%
            </h3>
            <p className="text-gray-200 font-secondary text-sm md:text-base">
              Success Travelers
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Stats;
