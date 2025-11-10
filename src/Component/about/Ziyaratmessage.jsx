import React from "react";
import { motion } from "framer-motion";
import imgTopLeft from "../../assets/heroImage/heroo15.webp";
import imgTopRight from "../../assets/heroImage/heroo8.webp";
import imgBottom from "../../assets/heroImage/pilgrims2.webp";

export default function ZiaratCEOSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 items-start">
        {/* Left: Image grid with animation */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-md bg-gray-100 h-56 mt-8"
            >
              <img
                src={imgTopLeft}
                alt="Ziarat top left"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>

            <motion.div
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 2 }}
              viewport={{ once: true }}
              className="rounded-xl overflow-hidden shadow-md bg-gray-100 h-72"
            >
              <img
                src={imgTopRight}
                alt="Ziarat top right"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 2.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="rounded-xl overflow-hidden shadow-md bg-gray-100 h-64 w-3/4">
              <img
                src={imgBottom}
                alt="Ziarat bottom"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Text content with animation */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-4xl text-accentt font-extrabold leading-tight ml-5 mt-2"
          >
Karwane Voice Of Aimma      
    </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, delay: 0.8 }}
            viewport={{ once: true }}
            className="space-y-4 text-gray-700 leading-relaxed"
          >
            <p>
              Our primary purpose is to ensure that pilgrims embark on Ziarat
              tours that are beyond their expectations. We aim to create a
              perfect and hassle-free experience for our customers by offering
              top-notch and customizable Ziarat packages according to their
              needs, enabling them to focus solely on worship and
              self-reflection.
            </p>

            <p className="font-semibold text-gray-800">
              We make our best possible efforts to organize ideal Ziarat
              spiritual tours and deliberately plan every detail to meet our
              valuable clients' specific needs and preferences. With a strong
              focus on customer satisfaction, we seek to deliver exceptional
              services that nurture and elevate the spiritual experience of
              every tourist.
            </p>

            <p>
              We differ from others due to our dedication to excellent customer
              service and commitment to providing unique and memorable travel
              experiences. Choose Karwane Voice Of Aimma for a pilgrimage like no other,
              where every detail is designed with your spiritual fulfillment in
              mind.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500 mt-4 ml-5"
          >
            — Karwane Voice Of Aimma 
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
