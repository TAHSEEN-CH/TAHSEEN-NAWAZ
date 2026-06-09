import React from 'react'
import { Link as ScrollLink } from 'react-scroll'
import { motion } from 'framer-motion'

const Home = () => {
    return (
        <div>
            {/* Hero Section */}
            <section className="bg-gray-900 text-white lg:py-30 py-6 px-6 md:px-20 border-b-2 border-green-500 lg:mt-10 mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 py-6 gap-10 items-center lg:px-2 md:py-30 lg:py-14"
                >
                    {/* Left Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="lg:ps-8"
                    >
                        <h3 className="text-sm text-gray-400">TAHSEEN NAWAZ</h3>
                        <h1 className="text-4xl lg:text-5xl md:text-2xl font-bold text-green-400 mt-2">
                            Frontend Developer.
                        </h1>
                        <p className="text-gray-300 mt-4 leading-relaxed lg:text-2xl md:text-md">
                            I specialize in crafting immersive user experiences using the latest frontend technologies and frameworks to bring your vision to life. Additionally, my expertise extends to geoinformatics, where I excel in harnessing the power of spatial data to uncover actionable insights.
                        </p>

                        {/* Buttons */}
                        <div className="flex items-start sm:items-center gap-4 mt-6">
                            <ScrollLink to="contact" smooth={true} duration={500} offset={-70} className="bg-green-400 cursor-pointer text-black px-6 py-3 md:px-5 md:py-3 rounded-lg font-semibold hover:bg-green-500 transition">
                                Get in Touch
                            </ScrollLink>
                            <div className="flex items-center text-gray-400">
                                <span className="h-3 w-3 bg-green-400 rounded-full mr-2"></span>
                                Available now
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Section - Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        viewport={{ once: true }}
                        className="flex justify-center"
                    >
                        <div
                            className="relative bg-green-400 rounded-4xl w-64 sm:w-80 md:w-96 overflow-hidden"
                            style={{ clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)" }}
                        >
                            <img
                                src="/th.png"
                                alt="Profile"
                                className="w-full h-auto transition-transform duration-500 hover:scale-110"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </section>
        </div>
    )
}

export default Home