import React from "react";
import { CheckCircle2 } from "lucide-react";
import contact2 from "../../assets/contact2.jpg";
import contact7 from "../../assets/heroImage/heroo17.jpg";
import { Moon, Star } from "lucide-react";
import { motion } from "framer-motion";
import {
  fadeUp,
  slideLeft,
  slideRight,
  staggerContainer,
} from "./Animations.jsx";
import Navbar from "../hooks/Navbar.jsx";
import Mainpic from "./Mainpic.jsx";
import Topbar from "../hooks/Topbar.jsx";
import Footer from "../Contact/Footer.jsx";
import WhoWeAre from "./Whoare.jsx";
import ZiaratCEOSection from "./Ziyaratmessage.jsx";
import Stats from "./stats.jsx";

const About = () => {
  return (
    <>
      <Topbar />
      <Navbar />
      <Mainpic>
        We Are The Solution Of Your <br /> Spiritual Trip
      </Mainpic>

      <motion.div
        className="mt-10 px-4 sm:px-6 lg:px-8 lg:h-[510px] overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div
          className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-8 lg:gap-10"
          variants={fadeUp}
        >
          <motion.div
            className="rounded-[70px] border-2 border-accentt p-3 w-full max-w-sm md:max-w-md lg:max-w-lg"
            variants={slideLeft}
          >
            <img
              src={contact7}
              alt="Worship in the Holy Land"
              className="w-full h-48 sm:h-56 md:h-60 lg:h-64 rounded-[60px] object-cover"
            />
          </motion.div>
          <motion.div
            className="w-full sm:w-11/12 md:w-full md:max-w-xl lg:w-[400px] lg:max-w-2xl lg:mb-23"
            variants={slideRight}
          >
            <h2 className="font-bold font-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4 text-center md:text-left text-accentt">
              Experience Worshiping in the Holy Land
            </h2>
            <p className="font-medium text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed text-center md:text-left">
              Step into sacred lands where every prayer echoes through time, and
              every moment draws you closer to divine peace. Discover the beauty
              of faith as you walk the paths of prophets and feel the serenity
              of the Holy Land in your heart.
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          className="relative mt-6 md:mt-8 lg:mt-0 lg:left-[520px] lg:bottom-20 border-2 border-amber-50 bg-gray-100 rounded-[50px] p-1 w-full max-w-sm md:max-w-md lg:w-[400px] mx-auto lg:mx-0"
          variants={fadeUp}
        >
          <img
            src={contact2}
            alt="Additional contact image"
            className="w-full h-32 sm:h-36 md:h-40 lg:h-48 rounded-[50px] object-cover"
          />
        </motion.div>

        <motion.div
          className="relative mt-6 md:mt-8 lg:mt-0 lg:bottom-[200px] lg:left-10 flex justify-center lg:justify-start"
          variants={staggerContainer}
        >
          <ul className="space-y-2 text-gray-700 mt-3 font-medium text-sm sm:text-base md:text-lg max-w-md lg:max-w-none">
            <motion.li className="flex items-center gap-2" variants={fadeUp}>
              <CheckCircle2 className="text-accentt w-5 h-5 flex-shrink-0" />
              We provide consultation sessions for Hajj pilgrims
            </motion.li>
            <motion.li className="flex items-center gap-2" variants={fadeUp}>
              <CheckCircle2 className="text-accentt w-5 h-5 flex-shrink-0" />
              We provide documentation services for you
            </motion.li>
            <motion.li className="flex items-center gap-2" variants={fadeUp}>
              <CheckCircle2 className="text-accentt w-5 h-5 flex-shrink-0" />
              We guarantee your comfort on your spiritual journey
            </motion.li>
          </ul>
        </motion.div>
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex flex-col lg:flex-row lg:justify-center lg:items-center gap-6 sm:gap-8 lg:gap-1"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
      >
        <motion.div
          className="flex-1 space-y-6 sm:space-y-8 text-center lg:text-left"
          variants={slideLeft}
        >
          <h2 className="font-primary text-accentt font-semibold text-2xl sm:text-3xl lg:text-4xl leading-tight max-w-xl mx-auto lg:mx-0">
            Creating Beautiful <br /> Moments In Step Of <br /> Faith
          </h2>

          <motion.p
            className="text-sm sm:text-base max-w-sm mx-auto lg:mx-0 font-medium text-gray-600"
            variants={fadeUp}
          >
            Every journey begins with faith, every step creates a memory, and
            every moment brings you closer to peace.
          </motion.p>

          <motion.ul
            className="space-y-4 sm:space-y-6 max-w-lg mx-auto lg:mx-0"
            variants={staggerContainer}
          >
            <motion.li
              className="flex items-center gap-3 sm:gap-4"
              variants={fadeUp}
            >
              <div className="bg-accentt rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-accentts"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h2l1 4-3.5 2.5a2 2 0 01-1.5 0l-2.5-1.5V4a2 2 0 012-2h8l2 2h-6a2 2 0 00-2 2v5z"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  100% Legal And Trusted
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Built with trust. Protected by law.
                </p>
              </div>
            </motion.li>

            <motion.li
              className="flex items-center gap-3 sm:gap-4"
              variants={fadeUp}
            >
              <div className="bg-accentt rounded-full w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 sm:h-6 sm:w-6 text-accentts"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 20h5v-2a4 4 0 00-3-3.87M9 20H4v-2a4 4 0 013-3.87m10 0a3.5 3.5 0 00-7 0m7 0v.5A4.5 4.5 0 0117 20zM4 18a4.5 4.5 0 013-3.87v-.63a3.5 3.5 0 017 0m10 0a4.5 4.5 0 01-4 4.5v-.5M7 15a4 4 0 00-5 5v1"
                  />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-base sm:text-lg">
                  Lots Of Promotions
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  Promotions that make every moment rewarding.
                </p>
              </div>
            </motion.li>
          </motion.ul>
        </motion.div>

        <motion.div
          className="flex flex-col max-w-md mx-auto lg:mx-0"
          variants={slideRight}
        >
          <div className="flex-1 bg-accentt rounded-t-2xl sm:rounded-t-3xl p-6 sm:p-8 flex flex-col items-center text-center text-gray-200">
            <h3 className="font-semibold mb-2 text-base sm:text-lg">
              Our Goals
            </h3>
            <hr className="border-gray-300 w-full mb-2" />
            <p className="mb-8 sm:mb-8 max-w-xs text-sm sm:text-base">
              Experience the blessings of sacred journeys, discover the beauty
              of faith and devotion, and begin your Holy Ziyarat with peace and
              trust.
            </p>
          </div>
          <motion.div
            className="bg-accentts p-6 sm:p-8 rounded-b-2xl sm:rounded-b-3xl shadow-lg h-20 sm:h-24 lg:h-[100px] flex items-center justify-center"
            variants={fadeUp}
          >
            <div className="relative bottom-[40px] lg:bottom-[52px]">
              <div className="border-8 sm:border-8 border-accentt w-[90px] h-[90px] sm:w-24 sm:h-24 lg:w-[120px] lg:h-[120px] p-8 sm:p-8 lg:p-10 flex justify-center items-center rounded-full">
                <div className="bg-accentt-hover rounded-[35px] sm:rounded-[35px] w-16 h-12 sm:w-20 sm:h-14 lg:w-[110px] lg:h-[70px] p-3 sm:p-4 lg:p-5 flex justify-center items-center">
                  <div className="bg-white rounded-2xl sm:rounded-[35px] w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 p-1 sm:p-2 flex justify-center items-center">
                    <div className="relative inline-block bg-white rounded-full p-1 sm:p-2">
                      <Moon
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 stroke-accentt fill-white"
                        strokeWidth={2}
                      />
                      <Star
                        className="absolute top-1 left-3 sm:top-2 sm:left-4 lg:top-2 lg:left-6 w-1.5 h-1.5 sm:w-2 sm:h-2 stroke-accentt fill-white"
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
      <WhoWeAre />
      <Stats />
      <ZiaratCEOSection />
      <Footer />
    </>
  );
};

export default About;
