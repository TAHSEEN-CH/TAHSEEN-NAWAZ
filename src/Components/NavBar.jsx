import { useState } from "react";
import { FiMenu, FiX, FiMoon } from "react-icons/fi";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="bg-gray-900 text-white transition-all fixed top-0 left-0 w-full border-b-2 border-green-500 z-50">
      {/* Navbar */}
      <nav className="flex items-center justify-between p-3 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center text-green-400 font-bold text-2xl md:text-4xl">
          <img
            src="/logo.png"
            alt="Portfolio Logo"
            className="w-16 h-16 ms-[-24px] transition-transform duration-300 hover:scale-110"
          />
          <p>Portfolio.</p>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6">
          <ScrollLink to="home" smooth={true} duration={500} offset={-70}>
            <li className="bg-green-400 text-black px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-105">
              Home
            </li>
          </ScrollLink>
          <ScrollLink to="about" smooth={true} duration={500} offset={-70}>
            <li className="bg-green-400 text-black px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-105">
              About
            </li>
          </ScrollLink>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>
            <li className="bg-green-400 text-black px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-105">
              Projects
            </li>
          </ScrollLink>
          <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>
            <li className="bg-green-400 text-black px-4 py-2 cursor-pointer rounded-lg transition-all duration-300 hover:bg-green-500 hover:scale-105">
              Contact
            </li>
          </ScrollLink>
        </ul>

        <div className="flex items-center gap-4">
          {/* Moon Icon (Just for Design) */}
          <FiMoon className="text-3xl cursor-pointer" />

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-3xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden bg-gray-800 transition-all duration-300 ${isMenuOpen ? "block" : "hidden"}`}>
        <ul className="flex flex-col items-center py-6">
          <li><ScrollLink to="home" smooth={true} duration={500} offset={-70} onClick={closeMenu} className="text-white px-4 py-2 cursor-pointer block">Home</ScrollLink></li>
          <li><ScrollLink to="about" smooth={true} duration={500} offset={-70} onClick={closeMenu} className="text-white px-4 py-2 cursor-pointer block">About</ScrollLink></li>
          <li><ScrollLink to="projects" smooth={true} duration={500} offset={-70} onClick={closeMenu} className="text-white px-4 py-2 cursor-pointer block">Projects</ScrollLink></li>
          <li><ScrollLink to="contact" smooth={true} duration={500} offset={-70} onClick={closeMenu} className="text-white px-4 py-2 cursor-pointer block">Contact</ScrollLink></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;