import React from "react";
import { motion } from "framer-motion";
import Poster from "../poster.png";
import BuyNowButton from "./buynowbutton";
import Whatsapp from "../Contact/Whatsapp";

const Postersection = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-green-50 via-white to-gray-100 py-20 px-6 overflow-hidden">
      {/* Floating background blobs for depth */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 bg-green-200 opacity-30 rounded-full blur-3xl"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-100 opacity-30 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Main Container */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="relative z-10 max-w-6xl w-full bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl p-10 grid md:grid-cols-2 gap-12 items-start border border-green-100"
      >
        {/* LEFT SIDE TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-6"
        >
<BuyNowButton
  onClick={() => {
    // WhatsApp number in international format without '+' or leading zeros
    const phone = "923001234567";
    
    // The message you want to pre-fill
    const message = encodeURIComponent("I want to buy this Iraq package");
    
    // Correct WhatsApp URL
    const url = `https://wa.me/${phone}?text=${message}`;
    
    // Open in a new tab
    window.open(url, "_blank", "noopener,noreferrer");
  }}
/>



          <h2 className="text-3xl font-extrabold text-green-800">IRAQ Group</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>Flights: Lahore, Najaf, Lahore, Karachi, Najaf, Karachi</li>
            <li>Stay: 5 Nights Karbala & 9 Nights Najaf in 4-Star hotels</li>
            <li>Ziarat: Karbala, Najaf, Samarra, Kazmain, Balad, Musayyib, Kufa</li>
            <li>Departure: 30 December 2025</li>
            <li>Closing Dates: 30 days before departure</li>
          </ul>

          <h2 className="text-3xl font-extrabold text-green-800 pt-6">IRAN IRAQ Group</h2>
          <ul className="list-disc ml-6 text-gray-700 space-y-2">
            <li>
              Flights: Lahore/Karachi to Najaf, Najaf to Tehran, Mashhad to Lahore/Karachi
            </li>
            <li>
              Stay: 5 Nights Karbala & 4 Nights Najaf in Iraq, 4 Nights Qum & 4 Nights Mashhad
            </li>
            <li>
              Ziarat: Karbala, Najaf, Samarra, Kazmain, Balad, Musayyib, Qum, Mashhad
            </li>
            <li>Departure: 30 December 2025</li>
            <li>Closing Dates: 30 days before departure</li>
          </ul>

          <p className="mt-4 text-gray-600 italic">
            From ISB flight from Lahore not available
          </p>

          <h3 className="text-lg font-bold text-green-700 mt-6">
            For further information Contact us:
          </h3>
          <ul className="ml-6 text-gray-700 space-y-1">
            <li>03454001049</li>
            <li>03000701049</li>
            <li>03094095633</li>
          </ul>

          <p className="text-sm text-gray-600 mt-4">
            Karbala ziyarat package from Pakistan Price.
          </p>
        </motion.div>

        {/* RIGHT SIDE POSTER (slow fade from right) */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1.8, // slow fade
            ease: [0.25, 0.8, 0.25, 1], // smooth cubic easing
          }}
          viewport={{ once: true }}
        >
          <motion.img
            src={Poster}
            alt="Ziyarat Poster"
            className="w-full max-w-md rounded-2xl shadow-2xl border border-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Postersection;
