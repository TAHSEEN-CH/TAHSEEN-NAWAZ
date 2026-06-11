// Projects.jsx
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaJs, FaCss3Alt, FaHtml5, FaGithub, FaExternalLinkAlt, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiMongodb, SiExpress, SiChartdotjs, SiSocketdotio, SiOpenai } from "react-icons/si";

const cards = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with cart functionality, user authentication, and payment integration. Built with MERN stack and Redux for state management.",
        image: "/logo.png",
        demoLink: "https://example.com/demo1",
        codeLink: "https://github.com/example/project1",
        technologies: [
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
            { name: "Express", icon: SiExpress, color: "text-gray-400" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
        ],
    },
    {
        id: 2,
        title: "Portfolio Dashboard",
        description: "Interactive dashboard for creative professionals with dynamic content management, project showcase, and contact form integration.",
        image: "/logo.png",
        demoLink: "https://example.com/demo2",
        codeLink: "https://github.com/example/project2",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
            { name: "Framer", icon: FaReact, color: "text-cyan-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        ],
    },
    {
        id: 3,
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates, team workspaces, and progress tracking features.",
        image: "/logo.png",
        demoLink: "https://example.com/demo3",
        codeLink: "https://github.com/example/project3",
        technologies: [
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
            { name: "Socket.io", icon: SiSocketdotio, color: "text-gray-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
        ],
    },
    {
        id: 4,
        title: "AI Content Generator",
        description: "Web application that uses AI to generate content for blogs, social media, and marketing materials with customizable templates.",
        image: "/logo.png",
        demoLink: "https://example.com/demo4",
        codeLink: "https://github.com/example/project4",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
            { name: "OpenAI", icon: SiOpenai, color: "text-green-500" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
        ],
    },
    {
        id: 5,
        title: "Real Estate Platform",
        description: "Property listing platform with advanced search filters, map integration, and virtual tour capabilities.",
        image: "/logo.png",
        demoLink: "https://example.com/demo5",
        codeLink: "https://github.com/example/project5",
        technologies: [
            { name: "React", icon: FaReact, color: "text-cyan-400" },
            { name: "Express", icon: SiExpress, color: "text-gray-400" },
            { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
            { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-500" },
        ],
    },
    {
        id: 6,
        title: "Social Media Analytics",
        description: "Dashboard for tracking social media metrics, engagement rates, and audience insights with data visualization.",
        image: "/logo.png",
        demoLink: "https://example.com/demo6",
        codeLink: "https://github.com/example/project6",
        technologies: [
            { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
            { name: "Chart.js", icon: SiChartdotjs, color: "text-yellow-500" },
            { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
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
    const [nav, setNav] = useState("home");

    const getFilteredCards = () => {
        if (nav === "home") return cards;
        if (nav === "about") return cards.filter(card => card.title.includes("Portfolio") || card.title.includes("Dashboard"));
        if (nav === "services") return cards.filter(card => card.title.includes("Real Estate") || card.title.includes("E-Commerce"));
        return cards;
    };

    const filteredCards = getFilteredCards();

    return (
        <div className="pb-20 bg-gray-900 text-center text-white border-b-2 border-green-500 overflow-hidden">
            {/* Section Header */}
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

            {/* Filter Navigation */}
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

            {/* Projects Grid - 2 cards on lg and md, 1 on small, reduced card height */}
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
                            className="bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-green-400/20 border border-gray-700 group flex flex-col h-auto"
                            variants={cardVariants}
                            initial="hidden"
                            whileInView="visible"
                            whileHover="hover"
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            {/* Image Container - Max height increased */}
                            <div className="relative overflow-hidden h-64 md:h-72 lg:h-80 flex-shrink-0">
                                <motion.img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                />
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"
                                />
                            </div>

                            {/* Content - Optimized height */}
                            <div className="p-5 flex flex-col flex-grow">
                                {/* Title - Left aligned */}
                                <motion.h1
                                    className="text-xl md:text-2xl font-bold mb-2 group-hover:text-green-400 transition-colors duration-300 text-left"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.1 }}
                                >
                                    {item.title}
                                </motion.h1>

                                {/* Description - 3 lines max */}
                                <motion.p
                                    className="text-gray-300 text-sm leading-relaxed text-left line-clamp-3 min-h-[60px]"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2 }}
                                >
                                    {item.description}
                                </motion.p>

                                {/* Technologies with Icons - One line flex wrap */}
                                <motion.div
                                    className="mt-3"
                                    initial={{ y: 20, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 }}
                                >
                                    <p className="text-green-400 text-xs font-semibold mb-1.5 text-left">Tech Stack</p>
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
                                                <div className="flex items-center gap-1.5 bg-gray-800/80 backdrop-blur-sm px-2.5 py-1 rounded-md border border-gray-600 hover:border-green-400 transition-all duration-300 cursor-pointer shadow-md">
                                                    <tech.icon className={`${tech.color} text-xs`} />
                                                    <span className="text-gray-200 font-medium text-[11px]">
                                                        {tech.name}
                                                    </span>
                                                </div>
                                                <div className="absolute inset-0 rounded-md bg-green-400/0 group-hover:bg-green-400/5 transition-all duration-300 pointer-events-none" />
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>

                                {/* Buttons - Min height fixed */}
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
                                        className="border border-gray-500 px-4 md:px-8 py-1.5 rounded-lg flex items-center gap-1.5 font-semibold text-xs hover:bg-gray-700 transition"
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