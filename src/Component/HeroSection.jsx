import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { HeroImage } from "../JsonData/Data";

const HeroSection = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState("next");

  useEffect(() => {
    if (!swiperRef.current) return;

    const swiper = swiperRef.current.swiper;
    swiper.on("slideChangeTransitionStart", () => {
      setDirection(swiper.activeIndex > swiper.previousIndex ? "next" : "prev");
    });
  }, []);

  return (
    <main className="max-w-[1920px] mx-auto bg-black overflow-hidden relative">
      <Swiper
        ref={swiperRef}
        modules={[Autoplay, Navigation, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={1200}
        navigation={{
          prevEl: ".custom-prev",
          nextEl: ".custom-next",
        }}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        className="h-[650px] relative bg-black"
      >
        {HeroImage.map((item, index) => (
          <SwiperSlide key={item.id} className="bg-black">
            <section
              className={`relative h-[650px] bg-cover bg-center bg-no-repeat flex items-center justify-center xl:justify-start px-6 transition-all duration-[1200ms] ease-out ${
                activeIndex === index
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
              style={{ backgroundImage: `url(${item.image})` }}
            >
          
              <div className="absolute inset-0 bg-black/60 transition-opacity duration-700"></div>

              <div
                className={`relative z-10 text-white max-w-[567px] xl:left-[130px] text-center xl:text-left transition-all duration-[1000ms] ease-out ${
                  activeIndex === index
                    ? "opacity-100 translate-x-0"
                    : direction === "next"
                    ? "opacity-0 translate-x-10"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <h1 className="text-4xl font-bold mb-6 drop-shadow-lg">
                  {item.title}
                </h1>
                <p className="mb-8 text-[1rem] opacity-90">{item.text}</p>
                <button className="bg-accentt text-black px-6 py-3 rounded-full font-semibold hover:bg-accentt-hover transition duration-300 shadow-md">
                  Get Started
                  <i className="ri-arrow-right-line ml-2"></i>
                </button>
              </div>

              <section
                className={`hidden absolute z-20 top-[150px] right-[150px] border-4 border-white rounded-[30px] w-[400px] h-[350px] transition-all duration-[1200ms] ease-out xl:block ${
                  activeIndex === index
                    ? "opacity-100 translate-x-0"
                    : direction === "next"
                    ? "opacity-0 translate-x-10"
                    : "opacity-0 -translate-x-10"
                }`}
              >
                <div
                  className="m-[15px] h-[310px] rounded-[20px] bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${item.innerImage})` }}
                ></div>
              </section>

              <section
                className={`hidden absolute z-20 top-[100px] right-[450px] border-4 border-white rounded-full w-[150px] h-[150px] transition-all duration-[1200ms] delay-200 ease-out xl:block ${
                  activeIndex === index
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                <div
                  className="m-[10px] h-[120px] rounded-full bg-cover bg-center bg-no-repeat"
                  style={{ backgroundImage: `url(${item.smallbox})` }}
                ></div>
              </section>
            </section>
          </SwiperSlide>
        ))}

        <div className="absolute top-[510px] left-1/2 -translate-x-1/2 z-[9999] flex items-center justify-center space-x-10 sm:left-1/6 sm:top-[480px]">
          <div
            className="custom-prev w-[70px] h-[70px] bg-white/20 hover:bg-white/40 text-white 
              rounded-full flex items-center justify-center cursor-pointer 
              transition-all duration-300 backdrop-blur-sm border border-white/30"
          >
            <i className="fa-solid fa-arrow-left text-white text-3xl"></i>
          </div>

          <div
            className="custom-next w-[70px] h-[70px] bg-white/20 hover:bg-white/40 text-white 
              rounded-full flex items-center justify-center cursor-pointer 
              transition-all duration-300 backdrop-blur-sm border border-white/30"
          >
            <i className="fa-solid fa-arrow-right text-white text-3xl"></i>
          </div>
        </div>
      </Swiper>
    </main>
  );
};

export default HeroSection;
