// Footer.jsx (With animations added, layout unchanged)
import { motion } from "framer-motion";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { SiFiverr, SiUpwork } from "react-icons/si";
import { Link as ScrollLink } from "react-scroll";
import { ThemeContext } from "../Context/Theme.Context";
import { useContext } from "react";

const Footer = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.1,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };

    const logoVariants = {
        hidden: { scale: 0, rotate: -180, opacity: 0 },
        visible: {
            scale: 1,
            rotate: 0,
            opacity: 1,
            transition: { duration: 0.6, type: "spring", stiffness: 100 },
        },
    };

    const linkVariants = {
        hidden: { y: -10, opacity: 0 },
        visible: (i) => ({
            y: 0,
            opacity: 1,
            transition: { delay: i * 0.1, duration: 0.4 },
        }),
    };

    const iconVariants = {
        hidden: { scale: 0, opacity: 0 },
        visible: (i) => ({
            scale: 1,
            opacity: 1,
            transition: { delay: 0.3 + i * 0.1, duration: 0.4, type: "spring" },
        }),
        hover: {
            scale: 1.2,
            y: -5,
            transition: { duration: 0.2 },
        },
    };

    const socialLinks = [
        { href: "https://pk.linkedin.com/in/tahseen-nawaz-7a8287322", icon: FaLinkedin, color: "text-[#0A66C2]", label: "LinkedIn" },
        { href: "https://github.com/TAHSEEN-CH", icon: FaGithub, color: "text-white", label: "GitHub" },
        { href: "http://localhost:5173/http://localhost:5173/http://localhost:5173/http://localhost:5173/", icon: SiUpwork, color: "text-[#14A800]", label: "Upwork" },
        { href: "https://www.fiverr.com/tahseen_dev01?public_mode=true#!", icon: SiFiverr, color: "text-[#1DBF73]", label: "Fiverr" },
        { href: "https://www.instagram.com/tahseennawaz9?utm_source=qr&igsh=bWE1Y2cxYXF3NjBv", icon: FaInstagram, color: "text-pink-500", label: "Instagram" },
    ];

    return (
        <motion.footer
            className={`py-4 px-4 text-center overflow-hidden
        ${theme === "dark"
                    ? 'bg-[#1E293B] text-white'
                    : 'bg-gray-50 text-gray-900'
                }
    `}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
        >
            <div className="max-w-4xl mx-auto flex flex-col pb-2 items-center">
                {/* Logo with Animation */}
                <motion.div variants={logoVariants}>
                    <motion.img
                        src="/logo.png"
                        alt="Portfolio Logo"
                        className="w-20 h-20 transition-transform duration-300 hover:scale-110"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                    />
                </motion.div>

                {/* Navigation Links with Stagger Animation */}
                <motion.ul
                    className={`flex lg:space-x-8 md:space-x-8 space-x-1 font-medium text-lg mb-6 justify-center gap-4
                ${theme === "dark" ? 'text-gray-300' : 'text-gray-600'}
            `}
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {["home", "about", "skills", "projects", "contact"].map((item, index) => (
                        <motion.li
                            key={item}
                            className={`relative cursor-pointer transition 
                        after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:transition-all after:duration-300 hover:after:w-full
                        ${theme === "dark"
                                    ? 'hover:text-green-400 after:bg-green-400'
                                    : 'hover:text-green-600 after:bg-green-600'
                                }
                    `}
                            variants={linkVariants}
                            custom={index}
                            whileHover={{ x: 3 }}
                        >
                            <ScrollLink to={item} smooth={true} duration={500} offset={-70}>
                                {item.charAt(0).toUpperCase() + item.slice(1)}
                            </ScrollLink>
                        </motion.li>
                    ))}
                </motion.ul>

                {/* Social Icons with Enhanced Animation */}
                <motion.div
                    className="flex flex-wrap gap-5 mb-6 justify-center"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`p-3 rounded-lg shadow-lg transition-all duration-300
                        ${theme === "dark"
                                    ? 'bg-[#2D3748] hover:shadow-green-400'
                                    : 'bg-gray-300 hover:shadow-green-600/30 shadow-gray-300'
                                }
                    `}
                            variants={iconVariants}
                            custom={index}
                            whileHover="hover"
                            animate="visible"
                        >
                            <motion.div
                                variants={iconVariants}
                                custom={index}
                            >
                                <social.icon size={22} className={social.color} />
                            </motion.div>
                        </motion.a>
                    ))}
                </motion.div>

                {/* Copyright Text with Animation */}
                <motion.p
                    className={`text-sm border-t pt-4 w-full text-center
                ${theme === "dark"
                            ? 'text-white/70 border-green-500'
                            : 'text-gray-500 border-green-600'
                        }
            `}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                >
                    © {new Date().getFullYear()} Tashseen Nawaz. Frontend Developer | React.js, Next.js & MERN Stack Developer. All rights reserved.
                </motion.p>
            </div>
        </motion.footer>
    );
};

export default Footer;