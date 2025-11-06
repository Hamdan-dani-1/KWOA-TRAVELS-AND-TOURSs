import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Heart, Star, Shield } from "lucide-react";
import choose from "../../assets/heroImage/choose.jpeg";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <CheckCircle2 className="w-8 h-8 text-accentt mx-auto mb-3" />,
      title: "Trusted Service",
      desc: "Our team ensures reliability, transparency, and comfort in every step of your journey.",
    },
    {
      icon: <Heart className="w-8 h-8 text-accentt mx-auto mb-3" />,
      title: "Customer Care",
      desc: "We value your satisfaction and provide 24/7 assistance for a smooth experience.",
    },
    {
      icon: <Star className="w-8 h-8 text-accentt mx-auto mb-3" />,
      title: "Affordable Packages",
      desc: "Enjoy quality and luxury at the best possible rates — no hidden charges.",
    },
    {
      icon: <Shield className="w-8 h-8 text-accentt mx-auto mb-3" />,
      title: "Secure Experience",
      desc: "Your safety and trust are our top priorities throughout your spiritual or travel journey.",
    },
  ];

  // Animation variants for smoother code reuse
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2, ease: "easeOut" },
    }),
  };

  return (
    <section
      className="relative py-16 px-6 bg-fixed bg-center bg-cover mt-[50px] mb-[50px]"
      style={{ backgroundImage: `url(${choose})` }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/50"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto text-center text-white">
        {/* Heading */}
        <motion.h2
          className="text-3xl sm:text-4xl font-bold font-primary"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          Why <span className="text-accentt">Choose Us</span>
        </motion.h2>

        {/* Accent line */}
        <motion.div
          className="h-1 w-20 bg-accentt mx-auto mt-3 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        ></motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-gray-200 mt-4 max-w-2xl mx-auto text-sm sm:text-base"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          We combine dedication, quality, and care to provide the best
          experience for every traveler.
        </motion.p>

        {/* Animated Cards */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-6 shadow-lg hover:-translate-y-2 hover:shadow-xl transition-all duration-500"
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              {item.icon}
              <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-gray-200 text-sm mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
