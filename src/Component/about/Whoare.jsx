import React from "react";
import { motion } from "framer-motion";
import aboutImg from "../../assets/heroImage/heroo9.jpg";

const WhoWeAre = () => {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row-reverse items-center gap-12">
        {/* Image Section (Right Side Now) */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2"
        >
          <img
            src={aboutImg}
            alt="TravelSite journey"
            className="rounded-2xl shadow-xl w-full h-auto object-cover"
          />
        </motion.div>

        {/* Text Section (Left Side Now) */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-3xl md:text-3xl font-primary font-bold text-accentt mb-6 leading-tight">
            Who We Are — Creating Unforgettable Experiences of Faith & Discovery
          </h2>

          <p className="text-gray-700 text-base md:text-lg font-secondary leading-relaxed mb-4">
            Welcome to{" "}
            <span className="font-bold text-accentt">TravelSite</span>, your
            trusted companion for sacred journeys across the holiest lands. We
            design immersive Ziyarat and Umrah experiences that blend devotion,
            comfort, and cultural exploration.
          </p>

          <p className="text-gray-700 text-base md:text-lg font-secondary leading-relaxed mb-4">
            Our team of experts curates each itinerary to ensure peace, purpose,
            and profound connection with every step. Whether you seek spiritual
            reflection or cultural discovery, TravelSite crafts journeys that
            stay in your heart forever.
          </p>

          <p className="text-gray-700 text-base md:text-lg font-secondary leading-relaxed">
            Join us on a transformative adventure — where faith meets the world,
            and your story of devotion begins.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 px-6 py-3 bg-accentt text-white font-secondary rounded-xl shadow-md hover:bg-accentt-hover transition"
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
