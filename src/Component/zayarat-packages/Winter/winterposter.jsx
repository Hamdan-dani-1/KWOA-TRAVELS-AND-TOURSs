import React from "react";
import { motion } from "framer-motion";
import Poster from "./winterpakage.jpg";
import BuyNowButton from "../buynowbutton";
import Whatsapp from "../../Contact/Whatsapp";

const WinterPostersection = () => {
  const headingColor = "#926F4B"; // brown color for headings

  return (
    <div className="relative min-h-screen flex justify-center items-center bg-gradient-to-br from-green-90 via-white to-gray-100 py-20 px-6 overflow-hidden">
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
              const phone = "923001234567";
              const message = encodeURIComponent(
                "I want to buy this Iraq/Iran package"
              );
              const url = `https://wa.me/${phone}?text=${message}`;
              window.open(url, "_blank", "noopener,noreferrer");
            }}
          />

          <h2 className="text-3xl font-extrabold" style={{ color: headingColor }}>
            Experience the Ultimate Iraq & Iran Spiritual Journey
          </h2>

          <p className="text-gray-700 leading-relaxed">
            Experience the ultimate <strong>14-day Iraq</strong> or{" "}
            <strong>18-day Iran–Iraq</strong> spiritual journey by air, covering
            the holiest sites in both countries. This is our <strong>Regular Package</strong> 
            with guaranteed flights and standard services from Karachi, Islamabad, and Lahore.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Enjoy the <strong>best services</strong> from our tour company with seamless processing, timely travel, 
            and a very comfortable Ziyarat schedule under the guidance of a religious scholar from <strong>Najaf-e-Ashraf</strong>.
          </p>

          <h3 className="text-2xl font-bold mt-6" style={{ color: headingColor }}>
            ✈️ By Air Package Highlights for IRAQ IRAN
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>
              <strong>Flights Included:</strong> Lahore → Najaf | Najaf → Tehran | Mashhad → Lahore (or vice versa)
            </li>
            <li>
              <strong>Comfortable Stays:</strong> 4 Nights Najaf | 5 Nights Karbala | 1 Night Kazmain | 4 Nights Qum | 5 Nights Mashhad
            </li>
            <li>
              <strong>Ziyarat Coverage:</strong>
              <br />
              <span className="block pl-4"><strong>IRAQ:</strong> Karbala, Najaf, Kufa, Samarra, Kazmain, Balad, Musayyab</span>
              <span className="block pl-4"><strong>IRAN:</strong> Mashhad, Nishapur, Qum, Tehran, Jamkaran</span>
            </li>
          </ul>

          <h3 className="text-2xl font-bold mt-6" style={{ color: headingColor }}>
            🕋 By Air 2025 Inclusions
          </h3>

          <ul className="list-disc ml-6 text-gray-700 space-y-1">
            <li>✅ Airport Taxes (Iraq)</li>
            <li>✅ Return Flights as per schedule</li>
            <li>✅ 3 Daily Meals (Halal/Pakistani cuisine)</li>
            <li>✅ VIP Transport in Iraq</li>
            <li>✅ Expert Guidance (Urdu/English speakers)</li>
          </ul>

          <p style={{ color: headingColor }} className="mt-4 font-semibold">
            ⏳ Closing Dates: Book at least 30 days before departure!
          </p>

          <h3 className="text-lg font-bold mt-6" style={{ color: headingColor }}>
            For further information Contact us:
          </h3>
          <ul className="ml-6 text-gray-700 space-y-1">
            <li>03454001049</li>
            <li>03000701049</li>
            <li>03094095633</li>
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

export default WinterPostersection;
