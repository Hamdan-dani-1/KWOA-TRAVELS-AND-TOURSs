import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import kaabah1 from "../../assets/heroImage/ImamHussain1.webp";
import { ziyaratPackages } from "../../JsonData/Data";

const ZiyaratPackages = () => {
  // Animation variants
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="bg-[#f9f8f6] py-10 px-5 md:px-10"
      id="ziyarat"
    >
      {/* Section Heading */}
      <div className="text-center mb-14">
        <motion.h2
          variants={fadeUp}
          className="text-3xl font-primary sm:text-4xl md:text-5xl font-bold text-accentt mb-4"
        >
          Ziyarat Packages
        </motion.h2>

        <motion.p
          variants={fadeUp}
          transition={{ delay: 0.2 }}
          className="max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed font-secondary"
        >
          Explore our curated spiritual journeys designed with care and devotion.
          Each package ensures comfort, guidance, and meaningful experiences
          across sacred lands.
        </motion.p>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        centeredSlides={true}
        pagination={{
          clickable: true,
          el: ".custom-swiper-pagination",
        }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 1, centeredSlides: true },
          768: { slidesPerView: 2, centeredSlides: false },
          1024: { slidesPerView: 3, centeredSlides: false },
        }}
        className="max-w-7xl mx-auto pb-12"
      >
        {ziyaratPackages.map((pkg) => (
          <SwiperSlide key={pkg.id}>
            <div className="max-w-[350px] sm:max-w-[380px] mx-auto relative rounded-2xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition-all duration-500 group">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={kaabah1}
                  alt={pkg.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent"></div>
                <div className="absolute bottom-3 left-4 text-white text-sm flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-accentt"></i>
                  {pkg.location}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-lg md:text-xl font-semibold text-gray-900 mb-2 font-primary">
                  {pkg.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 font-secondary">
                  {pkg.description}
                </p>

                <div className="flex justify-between items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center gap-1">
                    <i className="fa-regular fa-clock text-accentt"></i>
                    {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-accentt">
                    <i className="fa-solid fa-tag"></i> {pkg.price}
                  </span>
                </div>

                <button className="w-full py-2 rounded-xl bg-accentt hover:bg-accentt-hover text-white font-semibold font-secondary transition-all">
                  View Details
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination */}
      <div className="custom-swiper-pagination flex justify-center mt-6"></div>

      {/* Custom Style */}
      <style>
        {`
          .custom-swiper-pagination .swiper-pagination-bullet {
            background: #c59d5f;
            opacity: 0.4;
            transition: all 0.3s ease;
          }
          .custom-swiper-pagination .swiper-pagination-bullet-active {
            opacity: 1;
            width: 14px;
            height: 14px;
          }
        `}
      </style>
    </motion.section>
  );
};

export default ZiyaratPackages;
