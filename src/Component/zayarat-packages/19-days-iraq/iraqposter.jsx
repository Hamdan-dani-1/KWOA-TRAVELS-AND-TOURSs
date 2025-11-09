import React from "react";
import { motion } from "framer-motion";
import Poster from "./19iraq.jpg";
import BuyNowButton from "../buynowbutton";
import Whatsapp from "../../Contact/Whatsapp";

const IraqPostersection = () => {
  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-green-90 via-white to-gray-100 py-20 px-6 overflow-hidden">
      {/* Floating background blobs */}
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

      {/* Main Content */}
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
              const phone = "+923088887540";
              const message = encodeURIComponent(
                "I want to book the 19 Days Iraq Ziyarat Package January 2026"
              );
              const url = `https://wa.me/${phone}?text=${message}`;
              window.open(url, "_blank", "noopener,noreferrer");
            }}
          />

          <h2 className="text-3xl font-extrabold text-green-800">
            19 Days <span className="text-green-700">IRAQ Ziyarat Package – January 2026</span>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Travel to <strong>Karbala</strong> – A Journey of Love & Faith.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Join our exclusive <strong>19 Days Special Iraq Ziyarat Group</strong> and
            experience a deeply spiritual journey to the holy cities of{" "}
            <strong>Karbala, Najaf, Kadhmain,</strong> and <strong>Samarra</strong>.
            Whether you're traveling from <strong>Karachi, Lahore,</strong> or{" "}
            <strong>Islamabad</strong>, our package ensures comfort, convenience,
            and spiritual fulfillment.
          </p>

          <h3 className="text-2xl font-bold text-green-700 mt-6">
            🛫 Departure Cities & Cost
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>From Karachi: <strong>$899 USD</strong></li>
            <li>From Lahore: <strong>$1025 USD</strong></li>
            <li>From Islamabad: <strong>$999 USD</strong></li>
          </ul>

          <h3 className="text-2xl font-bold text-green-700 mt-6">
            ✅ What's Included?
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Return Air Ticket</li>
            <li>Visa Processing</li>
            <li>AC Transport within Iraq</li>
            <li>Economy Accommodation</li>
            <li>3 Meals (Breakfast, Lunch & Dinner)</li>
            <li>Experienced Religious Guide</li>
            <li>Complete Ziyarat Schedule</li>
          </ul>

          <p className="mt-4 text-green-700 font-semibold">
            📅 Departure Date: <strong>January 2nd Week – Secure your seat early!</strong>
          </p>

          <p className="text-gray-700 leading-relaxed">
            🧕 Ideal for Families & Individuals — Travel safely in a well-managed group with{" "}
            <strong>Karwane Voice of Aimma Pvt Ltd</strong> /{" "}
            <strong>Sky Travel & Tours</strong>, trusted for years.
          </p>

          <h3 className="text-lg font-bold text-green-700 mt-6">
            For Booking & Inquiries:
          </h3>
          <ul className="ml-6 text-gray-700 space-y-1">
            <li>📞 0345-4001049</li>
            <li>📞 0300-0701049</li>
            <li>📞 0309-4095633</li>
          </ul>

          <Whatsapp />
        </motion.div>

        {/* RIGHT SIDE POSTER */}
        <motion.div
          className="flex justify-center items-center"
          initial={{ opacity: 0, x: 120 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.8, ease: [0.25, 0.8, 0.25, 1] }}
          viewport={{ once: true }}
        >
          <motion.img
            src={Poster}
            alt="Iraq Ziyarat Poster"
            className="w-full max-w-md rounded-2xl shadow-2xl border border-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IraqPostersection;
