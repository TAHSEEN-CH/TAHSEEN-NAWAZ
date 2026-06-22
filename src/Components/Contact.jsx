// Contact.jsx (Only animations added, layout unchanged)
import { useContext, useRef, useState } from "react";
import { motion } from "framer-motion";
import emailJS from "@emailjs/browser";
import { ThemeContext } from "../Context/Theme.Context";
import Popup from "./Popup";

const Contact = () => {
  const { theme, setTheme } = useContext(ThemeContext)
  const formRef = useRef();

  // Popup states
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [popupType, setPopupType] = useState(''); // 'success' or 'error'

  // Modified handleSubmit function
  const handleSubmit = (e) => {
    e.preventDefault();

    emailJS.sendForm("service_3dgtxbg", "template_tkn87qg", formRef.current, "qzUjeVCIOscx-HBGv")
      .then(() => {
        setPopupMessage("Message Sent Successfully! 🎉");
        setPopupType('success');
        setShowPopup(true);

        if (formRef.current) {
          formRef.current.reset();
        }
      })
      .catch((err) => {
        console.log(err);
        setPopupMessage("Failed to send message. Please try again! 😞");
        setPopupType('error');
        setShowPopup(true);
      });
  };

  return (
    <div className={`flex flex-col items-center py-20 px-5 border-b-2 overflow-hidden
    ${theme === "dark"
        ? 'text-white bg-[#111827] border-green-500'
        : 'text-gray-900 bg-gray-50 border-green-600'
      }
`}>
      {/* Section Header with Animations */}
      <motion.div
        className={`p-3  md:text-5xl font-extrabold md:font-bold text-3xl  text-center w-full mb-10 flex items-center justify-center gap-2
        ${theme === "dark" ? 'bg-[#111827]' : 'bg-gray-50'}
    `}
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.div
          className={`h-1 w-10 md:w-16 lg:w-16 rounded-xl ${theme === "dark" ? 'bg-gradient-to-r from-green-400 to-blue-400' : 'bg-gradient-to-r from-green-600 to-blue-600'}`}
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
          className="flex items-center gap-1"
        >
          <span className={theme === "dark" ? 'text-white md:font-semibold font-bold' : 'text-gray-900'}>
            Get in
          </span>
          <span className={theme === "dark"
            ? 'bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent'
            : 'bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent'
          }>
            Touch
          </span>
        </motion.h1>
        <motion.div
          className={`h-1 w-10 md:w-16 lg:w-16 rounded-xl ${theme === "dark" ? 'bg-gradient-to-r from-green-400 to-blue-400' : 'bg-gradient-to-r from-green-600 to-blue-600'}`}
          initial={{ width: 0 }}
          whileInView={{ width: "2.5rem" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        />
      </motion.div>

      <div className={`flex flex-col lg:flex-row lg:max-h-[75vh] justify-center w-full group overflow-hidden max-w-7xl mx-auto transition duration-500 rounded-xl shadow-2xl ${theme === "dark" ? "hover:shadow-gray-600/30" : "shadow-gray-300"} `}>
        {/* Image Section with Animations */}
        <motion.div
          className="relative w-full lg:w-[50%] overflow-hidden "
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.img
            src="./img.png"
            alt=""
            className="group-hover:scale-107 transition duration-600 w-full md:h-[50vh] lg:h-full sm:h-[10vh] object-cover "
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />

          <motion.div
            className={`absolute inset-0 
                    ${theme === "dark" ? 'bg-black opacity-30' : 'bg-black opacity-20'}
                `}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: theme === "dark" ? 0.3 : 0.2 }}
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
                className={`inline-block ${theme === "dark" ? 'text-green-400' : 'text-green-400'}`}
                animate={{
                  textShadow: theme === "dark"
                    ? [
                      "0 0 0px #4ade80",
                      "0 0 10px #4ade80",
                      "0 0 0px #4ade80"
                    ]
                    : [
                      "0 0 0px #059669",
                      "0 0 10px #059669",
                      "0 0 0px #059669"
                    ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >cool</motion.span> <br /> together
            </motion.h1>
          </motion.div>
        </motion.div>

        {/* Form Section with Animations */}
        <motion.div
          className={`w-full lg:w-[50%] p-6 lg:h-[h-full] z-10 
                ${theme === "dark" ? 'bg-white' : 'bg-white'}
            `}
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h3
            className={`mb-6 text-2xl font-bold border-l-4 pl-4
                    ${theme === "dark"
                ? 'text-gray-800 border-green-400'
                : 'text-gray-800 border-green-600'
              }
                `}
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
              <label className={`block font-semibold text-lg ${theme === "dark" ? 'text-purple-700' : 'text-purple-700'}`}>
                Your Name :-
              </label>
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name..."
                className="w-full p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
                whileFocus={{ scale: 1.02, borderColor: theme === "dark" ? "#4ade80" : "#059669" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <label className={`block font-semibold text-lg ${theme === "dark" ? 'text-purple-700' : 'text-purple-700'}`}>
                Phone Number :-
              </label>
              <motion.input
                type="tel"
                name="phone"
                placeholder="+1 234 567 890"
                className="w-full p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
                whileFocus={{ scale: 1.02, borderColor: theme === "dark" ? "#4ade80" : "#059669" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <label className={`block font-semibold text-lg ${theme === "dark" ? 'text-purple-700' : 'text-purple-700'}`}>
                Your Email :-
              </label>
              <motion.input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
                whileFocus={{ scale: 1.02, borderColor: theme === "dark" ? "#4ade80" : "#059669" }}
                transition={{ duration: 0.2 }}
              />
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <label className={`block font-semibold  text-lg ${theme === "dark" ? 'text-purple-700' : 'text-purple-700'}`}>
                Your Message :-
              </label>
              <motion.textarea
                name="message"
                placeholder="Write your message here..."
                className="w-full overflow-y-auto p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
                whileFocus={{ scale: 1.02, borderColor: theme === "dark" ? "#4ade80" : "#059669" }}
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
                className={`w-[70%] mx-auto cursor-pointer text-black py-4 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md mt-4
                            ${theme === "dark"
                    ? 'bg-gradient-to-r from-green-400 to-green-500'
                    : 'bg-gradient-to-r from-green-500 to-green-600'
                  }
                        `}
                whileHover={{
                  scale: 1.05,
                  boxShadow: theme === "dark"
                    ? "0 0 20px rgba(74, 222, 128, 0.5)"
                    : "0 0 20px rgba(5, 150, 105, 0.4)",
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
      {/* Popup Component */}
      <Popup
        show={showPopup}
        setShow={setShowPopup}
        message={popupMessage}
        type={popupType}
      />
    </div>
  );
};

export default Contact;