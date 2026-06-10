// Home.jsx
import React, { useEffect, useState } from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'

const Home = () => {
    const titles = [
        "Frontend Developer",
        "React.js Developer",
        "Next.js Developer",
        "MERN Stack Developer"
    ];

    const [currentTitle, setCurrentTitle] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTitle((prev) => (prev + 1) % titles.length);
        }, 2500);

        return () => clearInterval(interval);
    }, []);

    // Floating animation variants for image
    const floatingAnimation = {
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
        transition: {
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
        }
    };

    // Particle animation for background effect
    const particles = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        duration: 3 + Math.random() * 4,
        delay: Math.random() * 2
    }));

    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gray-900 text-white lg:py-30 py-6 px-6 md:px-20 border-b-2 border-green-500 lg:mt-10 md:mt-10 mt-18 relative overflow-hidden">
                {/* Animated background particles */}
                {particles.map((particle) => (
                    <motion.div
                        key={particle.id}
                        className="absolute w-1 h-1 bg-green-400/30 rounded-full"
                        style={{
                            left: `${particle.x}%`,
                            top: `${particle.y}%`,
                        }}
                        animate={{
                            y: [0, -100, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: particle.duration,
                            delay: particle.delay,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                    />
                ))}

                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 py-15 gap-10 gap-y-18 md:gap-y-20 items-center lg:px-2 md:py-30 lg:py-14 max-w-7xl mx-auto"
                >
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8, type: "spring", stiffness: 100 }}
                        viewport={{ once: true }}
                        className="lg:ps-8"
                    >
                        <motion.h3
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.3 }}
                            className="text-sm md:text-xl lg:text-sm text-green-400 tracking-[3px]"
                        >
                            TAHSEEN NAWAZ
                        </motion.h3>

                        <motion.h1
                            key={titles[currentTitle]}
                            initial={{ opacity: 0, y: 30, scale: 0.9 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                type: "spring",
                                stiffness: 200
                            }}
                            className="text-3xl lg:text-5xl md:text-5xl font-bold text-green-400 mt-2 min-h-[60px]"
                        >
                            {titles[currentTitle]}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="text-gray-300 mt-4 leading-relaxed lg:text-xl md:text-xl"
                        >
                            I'm Tahseen Nawaz, a passionate Frontend and MERN Stack Developer with experience building responsive, modern, and user-friendly web applications using React.js, Next.js, JavaScript, Tailwind CSS, Bootstrap, Node.js, Express.js, and MongoDB. I enjoy transforming ideas into high-performance digital solutions while focusing on clean code, exceptional user experiences, and scalable application architecture.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-5 mt-6"
                        >
                            <motion.div
                                whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(74, 222, 128, 0.5)" }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={500}
                                    offset={-70}
                                    className="bg-green-400 cursor-pointer text-black px-6 py-3 md:px-5 md:py-3 rounded-lg font-semibold hover:bg-green-500 transition-all duration-300 block"
                                >
                                    Get in Touch
                                </ScrollLink>
                            </motion.div>

                            <div className="flex items-center text-gray-400">
                                <motion.span
                                    animate={{
                                        scale: [1, 1.5, 1],
                                        opacity: [1, 0.5, 1]
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        ease: "easeInOut"
                                    }}
                                    className="h-3 w-3 bg-green-400 rounded-full mr-2"
                                />
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                >
                                    Available now
                                </motion.span>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Right Section - Image with Enhanced Floating Animation */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.7, rotate: -10 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{
                            delay: 0.3,
                            duration: 1,
                            type: "spring",
                            stiffness: 120,
                            damping: 15
                        }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <motion.div
                            animate={floatingAnimation}
                            whileHover={{
                                scale: 1.08,
                                transition: { duration: 0.3 }
                            }}
                            className="relative"
                        >
                            {/* Glow effect behind image */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    opacity: [0.3, 0.6, 0.3]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 bg-green-400/20 rounded-full blur-3xl"
                            />

                            <div
                                className="relative bg-gradient-to-br from-green-400 to-green-600 rounded-4xl overflow-hidden shadow-2xl"
                                style={{
                                    clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)"
                                }}
                            >
                                <motion.img
                                    src="/image.jpeg"
                                    alt="Tahseen Nawaz"
                                    className="w-64 sm:w-80 md:w-100 h-auto transition-transform duration-500"
                                    whileHover={{ scale: 1.1 }}
                                    initial={{ scale: 1 }}
                                />
                            </div>
                            {/* Decorative rotating ring */}
                            <motion.div
                                className="absolute -z-10 w-full h-full rounded-full border-2 border-green-400/30"
                                style={{ top: "-10%", left: "-10%", width: "120%", height: "120%" }}
                                animate={{
                                    rotate: 360,
                                    scale: [1, 1.1, 1],
                                }}
                                transition={{
                                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                                }}
                            />

                            {/* Decorative floating elements */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 10, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -top-5 -right-5 w-12 h-12 bg-green-400/20 rounded-full blur-md"
                            />
                            <motion.div
                                animate={{
                                    y: [0, 15, 0],
                                    rotate: [0, -15, 0]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className="absolute -bottom-5 -left-5 w-16 h-16 bg-green-400/20 rounded-full blur-md"
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}

export default Home