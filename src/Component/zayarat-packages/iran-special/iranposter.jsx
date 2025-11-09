import React from "react";
import { motion } from "framer-motion";
import Poster from "./iranposter.jpg";
import BuyNowButton from "../buynowbutton";
import Whatsapp from "../../Contact/Whatsapp";

const IranPostersection = () => {
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
              const phone = "923001234567";
              const message = encodeURIComponent(
                "I want to book the Iran December 2025 By Air Package"
              );
              const url = `https://wa.me/${phone}?text=${message}`;
              window.open(url, "_blank", "noopener,noreferrer");
            }}
          />

          <h2 className="text-3xl font-extrabold text-green-800">
            Embark on a Sacred Journey — <span className="text-green-700">Iran By Air, December 2025</span>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Embark on a <strong>spiritual 20-day journey</strong> from Pakistan
            to <strong>Iran by Air</strong> this December 2025 with our complete
            package. Experience the <strong>snow season</strong> while
            performing Ziyarat at the most revered shrines across Iran.
          </p>

          <h3 className="text-2xl font-bold text-green-700 mt-6">
            🌍 Iran – December Package Highlights
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>
              <strong>Flights:</strong> Lahore–Tehran–Lahore / Lahore–Mashhad–Lahore /
              Karachi–Tehran–Karachi
            </li>
            <li>
              <strong>Route:</strong> Tehran → Qom → Kerman → Mashhad → Tehran
            </li>
            <li>
              <strong>Duration:</strong> 20 days (14-day option also available)
            </li>
            <li>
              <strong>Visa Processing:</strong> Iran visa included
            </li>
            <li>
              <strong>Transport:</strong> AC luxury buses for local travel
            </li>
            <li>
              <strong>Trains:</strong> Includes one 5-Star and one 3-Star train journey
            </li>
            <li>
              <strong>Accommodation:</strong> Hotels near holy shrines
            </li>
            <li>
              <strong>Meals:</strong> 3 Pakistani-style meals daily
            </li>
          </ul>

          <h3 className="text-2xl font-bold text-green-700 mt-6">
            🕋 Inclusions
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>✅ Iran tourist visa (including insurance)</li>
            <li>✅ Airport-to-airport service — transport, hotels, meals, guidance</li>
            <li>✅ Ziyarat-centric accommodations (within 400–450m of shrines)</li>
            <li>✅ SIM cards provided for easy connectivity</li>
            <li>✅ Spiritual guidance by Urdu-speaking scholars</li>
          </ul>

          <p className="mt-4 text-green-700 font-semibold">
            ⏳ Limited Slots — Book your spot early for December 2025!
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
            alt="Iran Ziyarat Poster"
            className="w-full max-w-md rounded-2xl shadow-2xl border border-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default IranPostersection;
