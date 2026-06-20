// Projects.jsx
import React, { useContext, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaGithub, FaExternalLinkAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiChartdotjs, SiSocketdotio, SiOpenai, SiRedux } from "react-icons/si";
import { TbWorld } from 'react-icons/tb';
import { ThemeContext } from '../Context/Theme.Context';

const cards = [
    {
        id: 1,
        title: "Alkhaldi Law Firm",
        description: "A professional law firm website developed to present legal services, consultations, and firm expertise through a modern and responsive design. The platform enhances client engagement with intuitive navigation, service showcases, and streamlined contact options for legal assistance.",
        image: "/projects/lawyer.PNG",
        demoLink: "https://lawyer-pi-three.vercel.app/",
        codeLink: "https://github.com/shakeeldev1/lawyer",
        technologies: [
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-gray-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        ],
    },
    {
        id: 2,
        title: "AKOYA Luxury Laundry",
        description: "A modern and responsive luxury laundry services website designed to showcase premium laundry, dry cleaning, and garment care services. Built with a clean user interface, elegant branding, service highlights, and seamless customer engagement features to provide a premium digital experience.",
        image: "/projects/Akoya.PNG",
        demoLink: "https://lundary.vercel.app/",
        codeLink: "https://github.com/shakeeldev1/Londary",
        technologies: [
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Redux", icon: SiRedux, color: "text-gray-400" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-gray-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        ],
    },
    {
        id: 3,
        title: "Qatar Charity Website",
        description: "A responsive multilingual charity website designed to promote charitable initiatives, community services, and social welfare programs while facilitating community engagement. The platform provides a seamless user experience across multiple languages and devices, enabling users to access charitable resources, support initiatives, and connect with community-driven services effectively.",
        image: "/projects/Charity.PNG",
        demoLink: "https://charity-blush-psi.vercel.app/",
        codeLink: "https://github.com/shakeeldev1/Charity",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs, color: "" },
            { name: "Next.js i18n", icon: TbWorld, color: "text-blue-500" },
            { name: "Chart.js", icon: SiChartdotjs, color: "text-yellow-500" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-gray-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        ],
    },
    {
        id: 4,
        title: "FoodyMart Resturent",
        description: "A modern online food ordering platform developed to provide customers with a seamless dining experience. The website features an interactive menu, food categories, online ordering functionality, responsive design, and an intuitive user interface, allowing users to browse, select, and order meals efficiently across all devices.",
        image: "/projects/resturent.PNG",
        demoLink: "https://restaurant-rho-ruddy.vercel.app/",
        codeLink: "https://github.com/shakeeldev1/restaurant",
        technologies: [
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-gray-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        ],
    },
    {
        id: 5,
        title: "Business Startup Platform",
        description: "A modern business startup platform helping companies in Saudi Arabia, Qatar, and Oman grow through digital solutions, professional services, and strategic business development.",
        image: "/projects/bussniss startup.PNG",
        demoLink: "https://business-startup-six.vercel.app/",
        codeLink: "https://github.com/shakeeldev1/business-startup",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs, color: "" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-gray-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        ],
    },
    {
        id: 6,
        title: "Pest Control Services Platform",
        description: "A modern and responsive pest control website designed to help residential and commercial clients access professional pest management solutions. The platform showcases pest control services, treatment plans, inspection requests, and customer support features through an intuitive and user-friendly interface.",
        image: "projects/pestcontrol.png",
        demoLink: "https://pest-control-omega.vercel.app/",
        codeLink: "https://github.com/shakeeldev1/Pest-Control",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs, color: "" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Express", icon: SiExpress, color: "text-gray-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        ],
    },
];

const filterVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
};

const cardVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.5,
            type: "spring",
            stiffness: 100
        }
    },
    exit: {
        y: -50,
        opacity: 0,
        scale: 0.9,
        transition: { duration: 0.3 }
    },
    hover: {
        y: -5,
        scale: 1.01,
        transition: { duration: 0.3 }
    }
};

const skillBadgeVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
        },
    },
    hover: {
        scale: 1.05,
        transition: { duration: 0.2 }
    }
};

const Projects = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const [nav, setNav] = useState("all");

    const getFilteredCards = () => {
        if (nav === "all") return cards;
        if (nav === "business") return cards.filter(card => card.title.toLowerCase().includes("business") || card.description.toLowerCase().includes("business"));
        if (nav === "services") return cards.filter(card => card.title.toLowerCase().includes("services") || card.description.toLowerCase().includes("services"));
        return cards;
    };

    const filteredCards = getFilteredCards();

    return (
        <div className={`pb-20 text-center overflow-hidden border-b-2 border-green-500 ${theme === "dark" ? 'bg-[#111827] text-white' : 'bg-gray-50 text-gray-900'
            }`}>
            {/* Section Header - Updated with My Projects and gradient */}
            <motion.div
                className={`p-3 pt-8  md:text-5xl font-extrabold md:font-bold text-3xl text-center w-full flex items-center justify-center gap-2 ${theme === "dark" ? 'bg-[#111827]' : 'bg-gray-50'
                    }`}
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className={`h-1 w-10 md:w-16 lg:w-16 rounded-xl ${theme === "dark"
                            ? 'bg-gradient-to-r from-green-400 to-emerald-400'
                            : 'bg-gradient-to-r from-green-500 to-emerald-600'
                        }`}
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
                    <span className={theme === "dark" ? 'text-white md:font-semibold font' : 'text-gray-900'}>
                        My
                    </span>
                    <span className={theme === "dark"
                        ? 'bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent'
                        : 'bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent'
                    }>
                        Projects
                    </span>
                </motion.h1>
                <motion.div
                    className={`h-1 w-10 md:w-16 lg:w-16 rounded-xl ${theme === "dark"
                            ? 'bg-gradient-to-r from-green-400 to-emerald-400'
                            : 'bg-gradient-to-r from-green-500 to-emerald-600'
                        }`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "2.5rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                />
            </motion.div>

            {/* Subtitle */}
            <motion.p
                className={`text-xl ${theme === "dark" ? 'text-gray-300' : 'text-gray-600'} mb-6`}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
            >
                <span className={`${theme === "dark" ? 'text-green-400' : 'text-green-600'} font-semibold`}>
                    What I've Built
                </span>
            </motion.p>

            {/* Filter Navigation */}
            <motion.nav
                className={`${theme === "dark" ? 'bg-[#111827]' : 'bg-gray-50'} h-[70px] flex justify-center items-center`}
                variants={filterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <ul className="flex gap-4 flex-wrap justify-center px-4">
                    <motion.li
                        onClick={() => setNav("all")}
                        className={`lg:px-6 md:px-6 px-4 py-2 border rounded-md transition cursor-pointer ${nav === "all"
                                ? 'bg-green-500 text-white border-green-500'
                                : theme === "dark"
                                    ? 'border-green-400 hover:bg-green-400 hover:text-black text-white'
                                    : 'border-green-600 hover:bg-green-600 hover:text-white text-gray-900'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        All
                    </motion.li>
                    <motion.li
                        onClick={() => setNav("business")}
                        className={`lg:px-6 md:px-6 px-4 py-2 border rounded-md transition cursor-pointer ${nav === "business"
                                ? 'bg-green-500 text-white border-green-500'
                                : theme === "dark"
                                    ? 'border-green-400 hover:bg-green-400 hover:text-black text-white'
                                    : 'border-green-600 hover:bg-green-600 hover:text-white text-gray-900'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Business
                    </motion.li>
                    <motion.li
                        onClick={() => setNav("services")}
                        className={`lg:px-6 md:px-6 px-4 py-2 border rounded-md transition cursor-pointer ${nav === "services"
                                ? 'bg-green-500 text-white border-green-500'
                                : theme === "dark"
                                    ? 'border-green-400 hover:bg-green-400 hover:text-black text-white'
                                    : 'border-green-600 hover:bg-green-600 hover:text-white text-gray-900'
                            }`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Services
                    </motion.li>
                </ul>
            </motion.nav>

            {/* Projects Grid */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={nav}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3 md:px-3 max-w-7xl mx-auto mt-9"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    {filteredCards.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className={`rounded-xl overflow-hidden shadow-lg hover:shadow-2xl border border-gray-700 group flex flex-col h-auto group ${theme === "dark"
                                    ? 'bg-gradient-to-br from-[#1e293b] to-[#0f172a] hover:shadow-green-400/20'
                                    : 'bg-gradient-to-br from-gray-100 to-white hover:shadow-green-300/30 border-gray-300'
                                }`}
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Image Container */}
                            <div className="relative overflow-hidden h-64 md:h-72 lg:h-80 flex-shrink-0 group-hover:scale-105 transition-transform ease-in-out duration-600">
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cove"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-3 pt-2 flex flex-col flex-grow">
                                {/* Title */}
                                <motion.h1
                                    className={`text-xl md:text-2xl font-bold mb-1 transition-colors duration-300 text-left ${theme === "dark"
                                            ? 'group-hover:text-white text-green-400'
                                            : 'group-hover:text-gray-900 text-green-600'
                                        }`}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {item.title}
                                </motion.h1>

                                {/* Description */}
                                <motion.p
                                    className={`text-sm leading-relaxed text-left line-clamp-3 min-h-[60px] ${theme === "dark" ? 'text-gray-300' : 'text-gray-600'
                                        }`}
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {item.description}
                                </motion.p>

                                {/* Technologies */}
                                <motion.div
                                    className="mt-3"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <p className={`text-xs font-semibold mb-1.5 text-left ${theme === "dark" ? 'text-green-400' : 'text-green-600'
                                        }`}>
                                        Tech Stack
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {item.technologies.map((tech, idx) => (
                                            <motion.div
                                                key={idx}
                                                className="group relative"
                                                variants={skillBadgeVariants}
                                                initial="hidden"
                                                whileInView="visible"
                                                whileHover="hover"
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.03 }}
                                            >
                                                <div className={`flex items-center gap-1.5 backdrop-blur-sm px-2.5 py-1 rounded-md border transition-all duration-300 cursor-pointer shadow-md ${theme === "dark"
                                                        ? 'bg-gray-800/80 border-gray-600 hover:border-green-400'
                                                        : 'bg-gray-200/80 border-gray-300 hover:border-green-500'
                                                    }`}>
                                                    <tech.icon className={`${tech.color} text-xs`} />
                                                    <span className={`font-medium text-[11px] ${theme === "dark" ? 'text-gray-200' : 'text-gray-700'
                                                        }`}>
                                                        {tech.name}
                                                    </span>
                                                </div>
                                                <div className="absolute inset-0 rounded-md bg-green-400/0 group-hover:bg-green-400/5 transition-all duration-300 pointer-events-none" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Buttons */}
                                <motion.div
                                    className="mt-4 flex justify-start gap-3 min-h-[44px]"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    <motion.a
                                        href={item.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-500 text-white px-4 md:px-8 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold text-xs hover:bg-green-600 transition shadow-md"
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 12px rgba(34, 197, 94, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt size={12} /> Live Demo
                                    </motion.a>
                                    <motion.a
                                        href={item.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`border px-4 md:px-8 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold text-xs transition ${theme === "dark"
                                                ? 'border-gray-500 hover:bg-gray-700 text-white'
                                                : 'border-gray-400 hover:bg-gray-200 text-gray-700'
                                            }`}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub size={12} /> Source Code
                                    </motion.a>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default Projects;