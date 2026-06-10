import { useState } from "react";
import { FiMenu, FiX, FiMoon } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut"
      }
    },
    visible: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeInOut",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const mobileMenuItemVariants = {
    hidden: {
      x: -50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      x: -50,
      opacity: 0,
      transition: {
        duration: 0.2
      }
    }
  };

  return (
    <div className="bg-gray-900 text-white transition-all fixed top-0 left-0 w-full border-b-2 border-green-500 z-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-3 max-w-7xl mx-auto">
        {/* Logo */}
        <motion.div 
          className="flex items-center text-green-400 font-bold text-2xl md:text-4xl"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logo.png"
            alt="Portfolio Logo"
            className="w-16 h-16 ms-[-10px] transition-transform duration-300 hover:scale-110"
          />
          <p>Tahseen_Dev</p>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-6">
          <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
            <motion.li 
              className="bg-green-400 text-black px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Home
            </motion.li>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
            <motion.li 
              className="bg-green-400 text-black px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              About
            </motion.li>
          </ScrollLink>
          <ScrollLink to="skills" smooth={true} duration={500} offset={-70}>
            <motion.li 
              className="bg-green-400 text-black px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Skills
            </motion.li>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
            <motion.li 
              className="bg-green-400 text-black px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Projects
            </motion.li>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            <motion.li 
              className="bg-green-400 text-black px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-105"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Contact
            </motion.li>
          </ScrollLink>
        </ul>

        <div className="flex items-center gap-4">
          {/* Moon Icon with Animation */}
          <motion.div
            whileHover={{ rotate: 180, scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            <FiMoon className="text-3xl cursor-pointer" />
          </motion.div>

          {/* Mobile Menu Button with Animation */}
          <motion.button
            className="lg:hidden text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMenuOpen ? <FiX /> : <FiMenu />}
            </motion.div>
          </motion.button>
        </div>
      </nav>

      {/* Mobile Menu with Enhanced Animation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="lg:hidden bg-gray-800/95 backdrop-blur-lg rounded-lg mx-4 mb-4 overflow-hidden"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul className="flex flex-col items-center py-6 space-y-3">
              <motion.li variants={mobileMenuItemVariants}>
                <ScrollLink 
                  to="home" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  onClick={closeMenu} 
                  className="text-white px-4 py-2 cursor-pointer block hover:text-green-400 transition-colors duration-300 text-lg"
                >
                  Home
                </ScrollLink>
              </motion.li>
              <motion.li variants={mobileMenuItemVariants}>
                <ScrollLink 
                  to="about" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  onClick={closeMenu} 
                  className="text-white px-4 py-2 cursor-pointer block hover:text-green-400 transition-colors duration-300 text-lg"
                >
                  About
                </ScrollLink>
              </motion.li>
              <motion.li variants={mobileMenuItemVariants}>
                <ScrollLink 
                  to="skills" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  onClick={closeMenu} 
                  className="text-white px-4 py-2 cursor-pointer block hover:text-green-400 transition-colors duration-300 text-lg"
                >
                  Skills
                </ScrollLink>
              </motion.li>
              <motion.li variants={mobileMenuItemVariants}>
                <ScrollLink 
                  to="projects" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  onClick={closeMenu} 
                  className="text-white px-4 py-2 cursor-pointer block hover:text-green-400 transition-colors duration-300 text-lg"
                >
                  Projects
                </ScrollLink>
              </motion.li>
              <motion.li variants={mobileMenuItemVariants}>
                <ScrollLink 
                  to="contact" 
                  smooth={true} 
                  duration={500} 
                  offset={-70} 
                  onClick={closeMenu} 
                  className="text-white px-4 py-2 cursor-pointer block hover:text-green-400 transition-colors duration-300 text-lg"
                >
                  Contact
                </ScrollLink>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;