import React from "react";
import { motion } from "framer-motion";
import Poster from "./shaban.jpg";
import BuyNowButton from "../buynowbutton";
import Whatsapp from "../../Contact/Whatsapp";

const ShabanPostersection = () => {
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
                "I want to book a seat for the Shaban Ziyarat Group"
              );
              const url = `https://wa.me/${phone}?text=${message}`;
              window.open(url, "_blank", "noopener,noreferrer");
            }}
          />

          <h2 className="text-3xl font-extrabold text-green-800">
            Click to Book Your <span className="text-green-700">Shaban Group Seat</span>
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Celebrate <strong>Wiladat e Imam Hussain A.S & Hazrat Abbas A.S</strong> 
            in the blessed city of <strong>Karbala</strong>.  
            Join our <strong>exclusive Shaban Ziyarat Groups</strong> and experience
            this spiritually uplifting journey.
          </p>

          <h3 className="text-2xl font-bold text-green-700 mt-6">
            🌙 Group Options
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>10 Days Iraq Group – 3 & 4 Shaban in Karbala</li>
            <li>17 Days Iraq Group – 3, 4 & 15 Shaban in Karbala</li>
            <li>20 Days Iran–Iraq Group – 3, 4 Shaban in Karbala, 15 Shaban in Mashhad</li>
          </ul>

          <h3 className="text-2xl font-bold text-green-700 mt-6">
            🕌 Stays & Ziyarat
          </h3>
          <p className="text-gray-700">
            Stay in <strong>Najaf (3–4 Nights)</strong>, <strong>Karbala (5–10 Nights)</strong>,
            and <strong>Kazmain (1–2 Nights)</strong>.
          </p>

          <p className="text-gray-700">
            Ziyarat includes: Najaf, Kufa, Kazmain, Samarra, Balad, Karbala, Musayyab,
            and for Iran–Iraq groups: Qum, Mashhad, Tehran, Nishapur.
          </p>

          <h3 className="text-2xl font-bold text-green-700 mt-6">
            ✈️ Services Included
          </h3>
          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>Visa & Return Air Tickets (Lahore–Najaf–Lahore)</li>
            <li>3-Star Hotel (Sharing basis)</li>
            <li>3 Times Double Dish Meals</li>
            <li>AC Transport for all Ziyarat</li>
            <li>Guidance by Scholars</li>
            <li>Jashn & Spiritual Gatherings</li>
          </ul>

          <p className="mt-4 text-green-700 font-semibold">
            Register yourself & your family to join this <strong>spiritual journey</strong>.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Organized by <strong>Karwane Voice of Aimma Pvt Ltd</strong> /{" "}
            <strong>Sky Travel & Tours</strong>.
          </p>

          <h3 className="text-lg font-bold text-green-700 mt-6">
            For Booking & Inquiries:
          </h3>
          <ul className="ml-6 text-gray-700 space-y-1">
            <li>📞 0308-8887540</li>
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
            alt="Shaban Ziyarat Poster"
            className="w-full max-w-md rounded-2xl shadow-2xl border border-gray-200"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 120 }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ShabanPostersection;
