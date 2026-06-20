// Skills.jsx
import React, { useContext } from "react";
import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaJs,
    FaReact,
    FaNodeJs,
    FaGitAlt,
} from "react-icons/fa";
import {
    SiNextdotjs,
    SiTailwindcss,
    SiBootstrap,
    SiExpress,
    SiMongodb,
    SiGithub,
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { ThemeContext } from "../Context/Theme.Context";

const skillsData = {
    Frontend: [
        { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
        { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
        { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
        { name: "React.js", icon: FaReact, color: "text-cyan-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
        { name: "Bootstrap", icon: SiBootstrap, color: "text-purple-500" },
    ],
    Backend: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
    ],
    Database: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-600", },
    ],
    Tools: [
        { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
        { name: "GitHub", icon: SiGithub, color: "" },
        { name: "VS Code", icon: VscCode, color: "text-blue-500" },
    ],
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
        },
    },
};

const categoryVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.9 },
    visible: {
        y: 0,
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
            staggerChildren: 0.08,
        },
    },
};

const skillVariants = {
    hidden: { scale: 0, opacity: 0, rotateY: 90 },
    visible: {
        scale: 1,
        opacity: 1,
        rotateY: 0,
        transition: {
            type: "spring",
            stiffness: 200,
            damping: 15,
        },
    },
};

// Floating particles background
const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 4 + Math.random() * 6,
    delay: Math.random() * 3,
    size: 2 + Math.random() * 4
}));


const Skills = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    
    return (
        <section id="skills" className={`${theme === "dark"
            ? 'bg-gray-900 text-white'
            : 'bg-gray-50 text-gray-900'
            } py-20 px-4 relative overflow-hidden`}>
            {/* Animated background particles - adapts to theme */}
            {particles.map((particle) => (
                <motion.div
                    key={particle.id}
                    className={`absolute rounded-full ${theme === "dark" ? 'bg-green-400/20' : 'bg-green-600/10'}`}
                    style={{
                        left: `${particle.x}%`,
                        top: `${particle.y}%`,
                        width: `${particle.size}px`,
                        height: `${particle.size}px`,
                    }}
                    animate={{
                        y: [0, -50, 0],
                        x: [0, 30, 0],
                        opacity: [0, 0.5, 0],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                />
            ))}

            <div className="container mx-auto relative z-10">
                {/* Section Header with Enhanced Animation */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.h2
                        className={`text-4xl md:text-5xl font-bold mb-4 ${theme === "dark" ? 'text-white' : 'text-gray-900'}`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, type: "spring" }}
                    >
                        Skills
                        <span className={theme === "dark" ? 'text-green-400' : 'text-green-600'}> &</span>
                    </motion.h2>
                    <motion.p
                        className={`text-xl ${theme === "dark" ? 'text-gray-300' : 'text-gray-600'}`}
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        My <span className={`${theme === "dark" ? 'text-green-400' : 'text-green-600'} font-semibold`}>Technical Expertise</span>
                    </motion.p>
                    <motion.div
                        className={`w-24 h-1 mx-auto mt-4 rounded-full ${theme === "dark" ? 'bg-green-400' : 'bg-green-600'}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: 96 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                {/* Skills Categories */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                >
                    {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
                        <motion.div
                            key={category}
                            className={`backdrop-blur-lg rounded-2xl p-6 border transition-all duration-500 shadow-xl hover:shadow-2xl group
                        ${theme === "dark"
                                    ? 'bg-gray-800/50 border-gray-700 hover:border-green-400/50 hover:shadow-green-400/20'
                                    : 'bg-white/80 border-gray-200 hover:border-green-600/40 hover:shadow-green-600/10'
                                }
                    `}
                            variants={categoryVariants}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Category header with animated underline */}
                            <div className="mb-6">
                                <motion.h3
                                    className={`text-2xl font-bold inline-block relative ${theme === "dark" ? 'text-green-400' : 'text-green-600'}`}
                                    whileHover={{ x: 5 }}
                                >
                                    {category}
                                    <motion.div
                                        className={`absolute bottom-0 left-0 h-0.5 ${theme === "dark" ? 'bg-green-400' : 'bg-green-600'}`}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "100%" }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: 0.2 + categoryIndex * 0.1 }}
                                    />
                                </motion.h3>
                            </div>

                            <div className="flex flex-wrap gap-3 gap-x-6">
                                {skills.map((skill, skillIndex) => (
                                    <motion.div
                                        key={skill.name}
                                        className="group relative"
                                        variants={skillVariants}
                                        whileHover={{
                                            scale: 1.15,
                                            rotateZ: [0, -3, 3, 0],
                                            transition: { duration: 0.2 }
                                        }}
                                        whileTap={{ scale: 0.95 }}
                                        custom={skillIndex}
                                    >
                                        <motion.div
                                            className={`flex items-center gap-2 backdrop-blur-sm px-4 py-2 rounded-xl border transition-all duration-300 cursor-pointer shadow-lg relative overflow-hidden
                                        ${theme === "dark"
                                                    ? 'bg-gray-900/80 border-gray-600 hover:border-green-400 hover:shadow-green-400/30'
                                                    : 'bg-gray-200/80 border-gray-300 hover:border-green-600 hover:shadow-green-600/20'
                                                }
                                    `}
                                            whileHover={{
                                                boxShadow: theme === "dark"
                                                    ? "0 0 20px rgba(74, 222, 128, 0.3)"
                                                    : "0 0 20px rgba(5, 150, 105, 0.15)",
                                            }}
                                        >
                                            {/* Shine effect on hover */}
                                            <motion.div
                                                className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"
                                            />

                                            <skill.icon className={`${skill.color} text-xl transition-transform duration-300 group-hover:scale-110`} />
                                            <motion.span
                                                className={`font-medium text-sm ${theme === "dark" ? 'text-gray-200' : 'text-gray-700'}`}
                                                whileHover={{ color: theme === "dark" ? "#4ade80" : "#059669" }}
                                            >
                                                {skill.name}
                                            </motion.span>
                                        </motion.div>

                                        {/* Glow effect on hover */}
                                        <div className={`absolute inset-0 rounded-xl transition-all duration-300 pointer-events-none blur-sm 
                                    ${theme === "dark"
                                                ? 'bg-green-400/0 group-hover:bg-green-400/10'
                                                : 'bg-green-600/0 group-hover:bg-green-600/5'
                                            }
                                `} />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Animated decorative element */}
                <motion.div
                    className="mt-16 flex justify-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                >
                    <motion.div
                        className={`h-1 w-32 bg-gradient-to-r from-transparent ${theme === "dark" ? 'via-green-400' : 'via-green-600'} to-transparent rounded-full`}
                        animate={{
                            scaleX: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;