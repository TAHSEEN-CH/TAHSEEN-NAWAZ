import { useContext, useEffect, useState } from "react";
import { FiMenu, FiX, FiMoon, FiSun } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeContext } from "../Context/Theme.Context";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const [scrolled, setScrolled] = useState(false);

  const { theme, setTheme } = useContext(ThemeContext)
  // console.log(theme);

  // Navigation items array
  const navItems = [
    { id: "home", label: "Home", delay: 0.1 },
    { id: "about", label: "About", delay: 0.2 },
    { id: "skills", label: "Skills", delay: 0.3 },
    { id: "projects", label: "Projects", delay: 0.4 },
    { id: "contact", label: "Contact", delay: 0.5 },
  ];



  useEffect(() => {
    const handleScroll = () => {
      // Check if scroll value is greater than 1px
      if (window.scrollY > 1) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
    <div className={`fixed top-0 left-0 w-full z-50 transition-all duration-600 ease-in-out 
  ${theme === "dark"
        ? 'text-white bg-gray-900'
        : 'text-gray-800 bg-gray-50'
      }
  ${scrolled
        ? `bg-transparent backdrop-blur-md border-b-1 ${theme === "dark" ? 'border-gray-800 shadow-gray-800' : 'border-gray-100/30   shadow-gray-300 '} shadow-md py-0.5`
        : `border-b-1 ${theme === "dark" ? 'border-green-500/50 shadow-green-500/40' : 'border-green-600/30 shadow-green-600/30'} shadow-md py-2`
      }`}>

      <nav className="flex items-center justify-between max-w-7xl mx-auto px-3 md:px-5 lg:px-0">
        {/* Logo */}
        <motion.div
          className={`flex items-center font-bold text-2xl md:text-4xl
        ${theme === "dark" ? "text-green-400" : "text-green-600"}
      `}
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="/logo.png"
            alt="Portfolio Logo"
            className="w-16 h-16 ms-[-10px] transition-transform duration-300 hover:scale-110"
          />
          <p className={theme === "dark" ? "text-green-400" : "text-green-600"}>
            Tahseen_Dev
          </p>
        </motion.div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex gap-6">
          {navItems.map((item) => (
            <ScrollLink key={item.id} to={item.id} smooth={true} duration={500} offset={-70}>
              <motion.li
                className={`px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:scale-105
              ${theme === "dark"
                    ? 'bg-green-400 text-black hover:bg-green-500'
                    : 'bg-green-600 text-white hover:bg-green-700'
                  }
            `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: item.delay }}
              >
                {item.label}
              </motion.li>
            </ScrollLink>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {/* Theme Toggle Button */}
          <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <motion.div
              key={theme}
              initial={{ scale: 0.3 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.4,
                type: "spring",
                bounce: 0.4,
                stiffness: 300
              }}
              whileHover={{ scale: 1.2 }}
              className={theme === "dark" ? "text-white" : "text-gray-700"}
            >
              {theme === "light" ? (
                <FiMoon className="text-3xl cursor-pointer" />
              ) : (
                <FiSun className="text-3xl cursor-pointer" />
              )}
            </motion.div>
          </button>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden text-3xl focus:outline-none ${theme === "dark" ? "text-white" : "text-gray-800"}`}
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className={`lg:hidden rounded-lg mx-4 mb-4 overflow-hidden
          ${theme === "dark"
                ? ' backdrop-blur-sm'
                : ' backdrop-blur-sm'
              }
        `}
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
          >
            <ul className="flex flex-col items-center py-6 space-y-3">
              {navItems.map((item) => (
                <motion.li key={item.id} variants={mobileMenuItemVariants}>
                  <ScrollLink
                    to={item.id}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    onClick={closeMenu}
                    className={`px-4 py-2 cursor-pointer block transition-colors duration-300 text-lg
                  ${theme === "dark"
                        ? 'text-white hover:text-green-400'
                        : 'text-gray-700 hover:text-green-600'
                      }
                `}
                  >
                    {item.label}
                  </ScrollLink>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Navbar;