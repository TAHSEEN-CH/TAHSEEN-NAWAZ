// About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  // Floating animation for image
  const floatingAnimation = {
    y: [0, -15, 0],
    rotate: [0, 2, 0, -2, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
      repeatType: "reverse"
    }
  };

  // Glow pulse animation
  const glowPulse = {
    scale: [1, 1.1, 1],
    opacity: [0.3, 0.7, 0.3],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="about" className="bg-gray-900 text-white py-20 lg:pb-18 px-8 md:pb-6 border-b-2 border-green-500 overflow-hidden">
      <div className="container mx-auto">
        {/* Section Title Centered */}
        <motion.div
          className="text-center md:mb-10 mb-5"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-2"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            About Me
          </motion.h2>
          <motion.p
            className="text-md text-green-400"
            initial={{ width: 0 }}
            whileInView={{ width: "auto" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            - Who am I? -
          </motion.p>
        </motion.div>

        <div className="flex flex-col-reverse md:grid md:grid-cols-1 lg:grid-cols-2 md:gap-4 gap-y-15 items-center md:py-8">
          {/* Image Section with Enhanced Floating Animation */}
          <motion.div
            className="flex justify-center relative"
            animate={floatingAnimation}
            whileHover={{
              scale: 1.08,
              transition: { duration: 0.3 }
            }}
          >
            {/* Glow effect behind image */}
            <motion.div
              animate={glowPulse}
              className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl"
              style={{
                width: "110%",
                height: "110%",
                left: "-5%",
                top: "-5%"
              }}
            />

            <div className="relative z-20">
              <motion.div
                className="overflow-hidden z-20 relative rounded-lg group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="/image1.jpeg"
                  alt="Profile"
                  className="w-72 md:w-86 transition-all duration-500"
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 1 }}
                />
              </motion.div>

              {/* Animated colored background block */}
              <motion.div
                className="bg-green-400 absolute z-10 p-2 w-[70%] h-[80%] left-[-10px] top-[-10px] rounded-lg"
                animate={{
                  x: [-5, 5, -5],
                  y: [-5, 5, -5],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              {/* Decorative rotating ring */}
              <motion.div
                className="absolute -z-10 w-full h-full rounded-full border-2 border-green-400/30"
                style={{ top: "-10%", left: "-10%", width: "120%", height: "120%" }}
                animate={{
                  rotate: 360,
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            </div>
          </motion.div>

          {/* Text Section with Enhanced Animation */}
          <motion.div
            className="lg:pe-3 py-10 md:py-5"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", type: "spring", stiffness: 100 }}
          >
            <motion.p
              className="lg:text-2xl md:text-2xl md:px-0 md:leading-tight leading-relaxed text-gray-300"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              I'm a passionate <span className="text-green-400 font-semibold">Frontend Developer</span> and{" "}
              <span className="text-green-400 font-semibold">MERN Stack Developer</span> with experience building responsive,
              modern, and user-focused web applications. I specialize in{" "}
              <span className="text-green-400">React.js</span>,{" "}
              <span className="text-green-400">Next.js</span>,{" "}
              <span className="text-green-400">JavaScript</span>,{" "}
              <span className="text-green-400">Tailwind CSS</span>, and{" "}
              <span className="text-green-400">Bootstrap</span>, creating fast, scalable, and visually appealing digital
              experiences. My backend expertise includes{" "}
              <span className="text-green-400">Node.js</span>,{" "}
              <span className="text-green-400">Express.js</span>, and{" "}
              <span className="text-green-400">MongoDB</span>, enabling me to develop complete MERN Stack solutions from concept
              to deployment.
            </motion.p>

            <motion.p
              className="lg:text-[18px] md:text-xl md:px-0 leading-relaxed text-gray-300 mt-4"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I am committed to writing clean, maintainable code and building intuitive user interfaces that deliver exceptional
              user experiences. Whether it's a business website, dashboard, e-commerce platform, or full-stack web application,
              I focus on delivering high-quality solutions that combine performance, functionality, and modern design while
              continuously expanding my expertise in emerging web technologies.
            </motion.p>

            {/* Resume Button */}
            <motion.div
              className="mt-8"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a href="/Tahseen_Nawaz_Resume.pdf">
                <motion.button
                  className="bg-green-400 cursor-pointer text-black px-8 py-3 rounded-lg font-semibold hover:bg-green-500 transition shadow-lg relative overflow-hidden group"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(74, 222, 128, 0.6)",
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Button shine effect */}
                  <motion.span
                    className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500"
                  />
                  Download Resume
                </motion.button>
              </a>
            </motion.div>

            {/* Animated decorative line */}
            <motion.div
              className="w-0 h-0.5 bg-green-400 mt-6"
              initial={{ width: 0 }}
              whileInView={{ width: "100px" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;