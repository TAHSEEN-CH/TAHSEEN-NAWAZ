// Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BsBootstrapFill } from 'react-icons/bs';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';

const cards = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with cart functionality, user authentication, and payment integration. Built with MERN stack and Redux for state management.",
        image: "/logo.png",
        demoLink: "https://example.com/demo1",
        codeLink: "https://github.com/example/project1",
        technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
        icons: [
            { icon: <FaHtml5 />, style: "text-red-400 text-2xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-2xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-2xl" },
            { icon: <FaReact />, style: "text-blue-400 text-2xl" },
        ],
    },
    {
        id: 2,
        title: "Portfolio Dashboard",
        description: "Interactive dashboard for creative professionals with dynamic content management, project showcase, and contact form integration.",
        image: "/logo.png",
        demoLink: "https://example.com/demo2",
        codeLink: "https://github.com/example/project2",
        technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "MongoDB"],
        icons: [
            { icon: <FaReact />, style: "text-blue-400 text-2xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-2xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-2xl" },
            { icon: <FaHtml5 />, style: "text-red-400 text-2xl" },
        ],
    },
    {
        id: 3,
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, team workspaces, and progress tracking features.",
        image: "/logo.png",
        demoLink: "https://example.com/demo3",
        codeLink: "https://github.com/example/project3",
        technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind"],
        icons: [
            { icon: <FaReact />, style: "text-blue-400 text-2xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-2xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-2xl" },
            { icon: <FaHtml5 />, style: "text-red-400 text-2xl" },
        ],
    },
    {
        id: 4,
        title: "AI Content Generator",
        description: "Web application that uses AI to generate content for blogs, social media, and marketing materials with customizable templates.",
        image: "/logo.png",
        demoLink: "https://example.com/demo4",
        codeLink: "https://github.com/example/project4",
        technologies: ["Next.js", "OpenAI API", "Tailwind CSS", "MongoDB"],
        icons: [
            { icon: <FaHtml5 />, style: "text-red-400 text-2xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-2xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-2xl" },
            { icon: <FaReact />, style: "text-blue-400 text-2xl" },
        ],
    },
    {
        id: 5,
        title: "Real Estate Platform",
        description: "Property listing platform with advanced search filters, map integration, and virtual tour capabilities.",
        image: "/logo.png",
        demoLink: "https://example.com/demo5",
        codeLink: "https://github.com/example/project5",
        technologies: ["React", "Express", "MongoDB", "Leaflet", "Tailwind"],
        icons: [
            { icon: <FaReact />, style: "text-blue-400 text-2xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-2xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-2xl" },
            { icon: <FaHtml5 />, style: "text-red-400 text-2xl" },
        ],
    },
    {
        id: 6,
        title: "Social Media Analytics",
        description: "Dashboard for tracking social media metrics, engagement rates, and audience insights with data visualization.",
        image: "/logo.png",
        demoLink: "https://example.com/demo6",
        codeLink: "https://github.com/example/project6",
        technologies: ["Next.js", "Chart.js", "Node.js", "MongoDB"],
        icons: [
            { icon: <FaReact />, style: "text-blue-400 text-2xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-2xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-2xl" },
            { icon: <FaHtml5 />, style: "text-red-400 text-2xl" },
        ],
    },
];

// Category filter variants
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
        y: -10,
        scale: 1.02,
        transition: { duration: 0.3 }
    }
};

const Projects = () => {
    const [nav, setNav] = useState("home");

    const getFilteredCards = () => {
        if (nav === "home") return cards;
        if (nav === "about") return cards.filter(card => card.title.includes("Portfolio") || card.title.includes("Dashboard"));
        if (nav === "services") return cards.filter(card => card.title.includes("Landing") || card.title.includes("E-Commerce"));
        return cards;
    };

    const filteredCards = getFilteredCards();

    return (
        <div className="pb-20 bg-gray-900 text-center text-white border-b-2 border-green-500 overflow-hidden">
            {/* Section Header with Animation */}
            <motion.div
                className="bg-gray-900 p-3 pt-8 text-2xl md:text-4xl flex justify-center items-center gap-2"
                initial={{ y: -50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <motion.div
                    className="h-1 w-10 md:w-16 bg-green-400 rounded-xl"
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                />
                <motion.h1
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Projects
                </motion.h1>
                <motion.div
                    className="h-1 w-10 md:w-16 bg-green-400 rounded-xl"
                    initial={{ width: 0 }}
                    whileInView={{ width: "4rem" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                />
            </motion.div>

            {/* Filter Navigation with Animation */}
            <motion.nav
                className="bg-gray-900 h-[70px] flex justify-center items-center"
                variants={filterVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                <ul className="flex gap-4 flex-wrap justify-center px-4">
                    <motion.li
                        onClick={() => setNav("home")}
                        className={`lg:px-6 md:px-6 px-4 py-2 border rounded-md transition cursor-pointer ${nav === "home" ? "bg-green-400 text-black" : "border-green-400 hover:bg-green-400 hover:text-black"}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        All
                    </motion.li>
                    <motion.li
                        onClick={() => setNav("about")}
                        className={`lg:px-6 md:px-6 px-4 py-2 border rounded-md transition cursor-pointer ${nav === "about" ? "bg-green-400 text-black" : "border-green-400 hover:bg-green-400 hover:text-black"}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Web Apps
                    </motion.li>
                    <motion.li
                        onClick={() => setNav("services")}
                        className={`lg:px-6 md:px-6 px-4 py-2 border rounded-md transition cursor-pointer ${nav === "services" ? "bg-green-400 text-black" : "border-green-400 hover:bg-green-400 hover:text-black"}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        Full Stack
                    </motion.li>
                </ul>
            </motion.nav>

            {/* Projects Grid with AnimatePresence */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={nav}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-3 max-w-7xl mx-auto mt-9"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                >
                    {filteredCards.map((item, index) => (
                        <motion.div
                            key={item.id}
                            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-400/20 border border-gray-700 group"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative overflow-hidden h-60">
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-green-400/0 group-hover:bg-green-400/20 transition-all duration-300"
                                    whileHover={{ opacity: 1 }}
                                />

                                {/* Overlay buttons */}
                                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-black/50">
                                    <motion.a
                                        href={item.demoLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-green-400 text-black px-4 py-2 rounded-lg flex items-center gap-2 font-semibold"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaExternalLinkAlt /> Live Demo
                                    </motion.a>
                                    <motion.a
                                        href={item.codeLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-gray-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 font-semibold"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        <FaGithub /> Code
                                    </motion.a>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <motion.h1
                                    className="text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {item.title}
                                </motion.h1>

                                <motion.p
                                    className="text-gray-300 text-sm mt-2 leading-relaxed"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {item.description}
                                </motion.p>

                                {/* Technologies */}
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <p className="text-green-400 mt-4 text-sm font-semibold">Technologies Used:</p>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {item.technologies.map((tech, idx) => (
                                            <motion.span
                                                key={idx}
                                                className="bg-gray-800 px-3 py-1 rounded-full text-xs text-gray-300 border border-gray-600"
                                                whileHover={{ scale: 1.05, backgroundColor: "#22c55e", color: "black" }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                {tech}
                                            </motion.span>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Icons */}
                                <motion.div
                                    className="flex justify-center space-x-3 mt-4 text-2xl"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 }}
                                >
                                    {item.icons.map((iconObj, index) => (
                                        <motion.span
                                            key={index}
                                            className={iconObj.style}
                                            whileHover={{ scale: 1.2, rotate: 5 }}
                                            transition={{ duration: 0.2 }}
                                        >
                                            {iconObj.icon}
                                        </motion.span>
                                    ))}
                                </motion.div>

                                {/* Buttons */}
                                <motion.div
                                    className="mt-6 flex justify-center space-x-3"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                >
                                    <motion.button
                                        className="bg-green-500 text-white px-5 py-2 cursor-pointer rounded-lg hover:bg-green-600 transition font-semibold text-sm"
                                        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(34, 197, 94, 0.5)" }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => window.open(item.demoLink, '_blank')}
                                    >
                                        View Demo
                                    </motion.button>
                                    <motion.button
                                        className="border border-gray-500 px-5 py-2 cursor-pointer rounded-lg hover:bg-gray-700 transition font-semibold text-sm"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        onClick={() => window.open(item.codeLink, '_blank')}
                                    >
                                        Source Code
                                    </motion.button>
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