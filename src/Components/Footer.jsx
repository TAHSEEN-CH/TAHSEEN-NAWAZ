import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Footer = () => {
    return (
        <footer className="bg-[#1E293B] text-white py-4 px-4 text-center">
            <div className="max-w-4xl mx-auto flex flex-col pb-2 items-center">

                {/* Logo */}
                <img
                    src="/logo.png"
                    alt="Portfolio Logo"
                    className="w-20 h-20 transition-transform duration-300 hover:scale-110"
                />

                {/* Navigation Links */}
                <ul className="flex lg:space-x-8 md:space-x-8 space-x-4 text-gray-300 font-medium text-lg mb-6">
                    <li className="relative cursor-pointer hover:text-green-400 transition 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full">
                        <ScrollLink to="home" smooth={true} duration={500} offset={-70}>Home</ScrollLink>
                    </li>
                    <li className="relative cursor-pointer hover:text-green-400 transition 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full">
                        <ScrollLink to="about" smooth={true} duration={500} offset={-70}>About</ScrollLink>
                    </li>
                    <li className="relative cursor-pointer hover:text-green-400 transition 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full">
                        <ScrollLink to="projects" smooth={true} duration={500} offset={-70}>Projects</ScrollLink>
                    </li>
                    <li className="relative cursor-pointer hover:text-green-400 transition 
                 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-green-400 after:transition-all after:duration-300 hover:after:w-full">
                        <ScrollLink to="contact" smooth={true} duration={500} offset={-70}>Contact</ScrollLink>
                    </li>
                </ul>

                {/* Social Icons */}
                <div className="flex space-x-5 mb-6">
                    <a href="#" className="p-3 bg-[#2D3748] text-gray-300 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-400">
                        <FaTiktok size={22} />
                    </a>
                    <a href="#" className="p-3 bg-[#2D3748] text-red-500 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-400">
                        <FaYoutube size={22} />
                    </a>
                    <a href="#" className="p-3 bg-[#2D3748] text-[#1877F2] rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-400">
                        <FaFacebook size={22} />
                    </a>
                    <a href="#" className="p-3 bg-[#2D3748] text-pink-500 rounded-lg shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-400">
                        <FaInstagram size={22} />
                    </a>
                </div>

                {/* Copyright Text */}
                <p className="text-white/70 text-sm border-t border-green-500 pt-4 w-full text-center">
                    © {new Date().getFullYear()} Tashseen Nawaz. Frontend Web Developer. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;