// Contact.jsx (Only animations added, layout unchanged)
import { useRef } from "react";
import { motion } from "framer-motion";
import emailJS from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailJS.sendForm("service_3dgtxbg", "template_tkn87qg", formRef.current, "qzUjeVCIOscx-HBGv")
      .then(() => {
        alert("Email Sent Successfully!");

        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-white flex flex-col items-center bg-[#111827] py-20 px-5 border-b-2 border-green-500 overflow-hidden">
      {/* Section Header with Animations */}
      <motion.div
        className="p-3 lg:text-4xl md:text-4xl text-2xl mt-10 text-center w-full mb-7 flex items-center justify-center gap-2"
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className="h-1 w-10 md:w-16 lg:w-16 rounded-xl bg-green-400"
          initial={{ width: 0 }}
          whileInView={{ width: "2.5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get in Touch
        </motion.h1>
        <motion.div
          className="h-1 w-10 md:w-16 lg:w-16 rounded-xl bg-green-400"
          initial={{ width: 0 }}
          whileInView={{ width: "2.5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      </motion.div>

      <div className="flex flex-col lg:flex-row lg:max-h-[72vh] items- justify-center gap- w-full group overflow-hidden max-w-7xl mx-auto">
        {/* Image Section with Animations */}
        <motion.div
          className="relative w-full lg:w-3/7 overflow-hidden md:rounded-t-xl lg:rounded-l-xl max-md:rounded-t-xl"
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src="./img.png"
            alt=""
            className="group-hover:scale-107 transition duration-600 w-full md:h-[50vh] lg:h-full sm:h-[10vh] object-cover md:rounded-t-xl lg:rounded-l-xl max-md:rounded-t-xl shadow-md"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className="absolute inset-0 bg-black opacity-30 lg:rounded-l-xl md:rounded-t-xl max-md:rounded-t-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.3 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          />

          <motion.div
            className="absolute inset-0 flex items-center justify-center p-5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <motion.h1
              className="text-white text-4xl md:text-6xl lg:text-6xl font-semibold text-start"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              Let's discuss <br /> something <motion.span
                className="text-green-400 inline-block"
                animate={{
                  textShadow: [
                    "0 0 0px #4ade80",
                    "0 0 10px #4ade80",
                    "0 0 0px #4ade80"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >cool</motion.span> <br /> together
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Form Section with Animations */}
        <motion.div
          className="w-full lg:w-3/6 p-6 lg:h-[h-full] lg:ms-[-8px] z-10 rounded-b-md lg:rounded-br-xl bg-white lg:rounded-r-xl lg:rounded-b-none md:rounded-b-2xl sm:rounded-b-xl shadow-xl"
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
            <motion.h3
            className="text-gray-800 mb-6 text-2xl font-bold border-l-4 border-green-400 pl-4"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            I'm interested in...
          </motion.h3>

          <form onSubmit={handleSubmit} className="space-y-1" ref={formRef}>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <label className="block text-purple-700 font-semibold text-lg">Your Name :-</label>
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name..."
                className="w-full p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
                whileFocus={{ scale: 1.02, borderColor: "#4ade80" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className="block text-purple-700 font-semibold text-lg">Phone Number :-</label>
              <motion.input
                type="tel"
                name="phone"
                placeholder="+1 234 567 890"
                className="w-full p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
                whileFocus={{ scale: 1.02, borderColor: "#4ade80" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label className="block text-purple-700 font-semibold text-lg">Your Email :-</label>
              <motion.input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
                whileFocus={{ scale: 1.02, borderColor: "#4ade80" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label className="block text-purple-700 font-semibold text-lg">Your Message :-</label>
              <motion.textarea
                name="message"
                placeholder="Write your message here..."
                className="w-full overflow-y-auto p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
                whileFocus={{ scale: 1.02, borderColor: "#4ade80" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              <motion.button
                type="submit"
                className="w-[70%] mx-auto cursor-pointer bg-gradient-to-r from-green-400 to-green-500 text-black py-4 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)",
                  transition: { duration: 0.2 }
                }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  💌
                </motion.span>
                Send Message
              </motion.button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;