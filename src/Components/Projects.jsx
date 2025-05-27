import React, { useState } from 'react';
import { BsBootstrapFill } from 'react-icons/bs';
import { FaReact, FaJs, FaCss3Alt, FaHtml5 } from "react-icons/fa";
import { SiTailwindcss } from 'react-icons/si';

const cards = [
    {
        id: 1,
        title: "Onari B Website",
        description: "djsh bc cjlscvhdcb  hsalvc lsbc saclhsaihca cbsaiulc CILcu;BC Ailciuacbjh Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded expectations.",
        image: "/logo.png",
        btn1: "View Live Demo",
        btn2: " Visit Site",
        icons: [
            { icon: <FaHtml5 />, style: "text-red-400 text-3xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-3xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-3xl" },
            { icon: <FaReact />, style: "text-blue-400 text-3xl" },
        ],
    },
    {
        id: 2,
        title: "Onari B Website",
        description: "Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded expectations.",
        image: "/logo.png",
        btn1: "View Live Demo",
        btn2: " Visit Site",
        icons: [
            { icon: <FaReact />, style: "text-blue-400 text-3xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-3xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-3xl" },
            { icon: <FaHtml5 />, style: "text-red-400 text-3xl" },
        ],
    },
    {
        id: 3,
        title: "Onari B Website",
        description: "Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded expectations.",
        image: "/logo.png",
        btn1: "View Live Demo",
        btn2: " Visit Site",
        icons: [
            { icon: <FaReact />, style: "text-blue-400 text-3xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-3xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-3xl" },
            { icon: <FaHtml5 />, style: "text-red-400 text-3xl" },
        ],
    },
    {
        id: 4,
        title: "Onari B Website",
        description: "djsh bc cjlscvhdcb  hsalvc lsbc saclhsaihca cbsaiulc CILcu;BC Ailciuacbjh Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded expectations.",
        image: "/logo.png",
        btn1: "View Live Demo",
        btn2: " Visit Site",
        icons: [
            { icon: <FaHtml5 />, style: "text-red-400 text-3xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-3xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-3xl" },
            { icon: <FaReact />, style: "text-blue-400 text-3xl" },
        ],
    },
    {
        id: 5,
        title: "Onari B Website",
        description: "Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded expectations.",
        image: "/logo.png",
        btn1: "View Live Demo",
        btn2: " Visit Site",
        icons: [
            { icon: <FaReact />, style: "text-blue-400 text-3xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-3xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-3xl" },
            { icon: <FaHtml5 />, style: "text-red-400 text-3xl" },
        ],
    },
    {
        id: 6,
        title: "Onari B Website",
        description: "Working closely with the ONORI-B team, I collaborated to ensure that the website not only met but exceeded expectations.",
        image: "/logo.png",
        btn1: "View Live Demo",
        btn2: " Visit Site",
        icons: [
            { icon: <FaReact />, style: "text-blue-400 text-3xl" },
            { icon: <FaJs />, style: "text-yellow-400 text-3xl" },
            { icon: <FaCss3Alt />, style: "text-blue-500 text-3xl" },
            { icon: <FaHtml5 />, style: "text-red-400 text-3xl" },
        ],
    },

];

const Projects = () => {
    const [nav, setNav] = useState("home");

    return (
        <div className="mt-22 pb-20 bg-gray-900 text-center text-white border-b-2 border-green-500 ">
            <div className="bg-gray-900 p-3 pt-8 text-2xl md:text-4xl flex justify-center items-center gap-2 ">
                <div className="h-1 w-10 md:w-16 bg-green-400 rounded-xl"></div>
                <h1>Projects</h1>
                <div className="h-1 w-10 md:w-16 bg-green-400 rounded-xl"></div>
            </div>

            {/* Navigation Bar */}
            <nav className="bg-gray-900 h-[70px] flex justify-center items-center">
                <ul className="flex gap-4">
                    <li onClick={() => setNav("home")} className={`lg:px-6 md:px-6 px-4 py-2  border rounded-md transition cursor-pointer ${nav === "home" ? "bg-green-400 text-black" : "border-green-400 hover:bg-green-400 hover:text-black"}`}>All</li>
                    <li onClick={() => setNav("about")} className={`lg:px-6 md:px-6 px-4 py-2 border rounded-md transition cursor-pointer ${nav === "about" ? "bg-green-400 text-black" : "border-green-400 hover:bg-green-400 hover:text-black"}`}>Websites</li>
                    <li onClick={() => setNav("services")} className={`lg:px-6 md:px-6 px-4 py-2 border rounded-md transition cursor-pointer ${nav === "services" ? "bg-green-400 text-black" : "border-green-400 hover:bg-green-400 hover:text-black"}`}>Landing Pages</li>
                </ul>
            </nav>

            {nav === "home" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-3 max-w-7xl mx-auto mt-9">
                    {/* Project Card 1 */}
                    {cards.map((item) => (
                        <div key={item.id} className="bg-[#26313f] p-2 rounded-xl shadow-sm shadow-gray-600 text-center text-white transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-green-400 hover:shadow-lg">
                            <div className="bg-[#0d1117] rounded-t-xl h-60 flex items-center justify-center overflow-hidden ">
                                <img src={item.image} alt="Project Thumbnail" className="h-full w-full rounded-t-xl transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div className="p-3">
                                <h1 className="text-2xl font-bold">{item.title}</h1>
                                <h3 className="mt-4 text-lg">
                                    {item.description.substring(0, 120) + (item.description.length > 120 ? "..." : "")}
                                </h3>
                                <p className="text-green-400 mt-2 text-lg">Technologies Used:</p>
                                <div className="flex justify-center space-x-3 mt-2 text-2xl">
                                    {item.icons.map((iconObj, index) => (
                                        <span key={index} className={iconObj.style}>
                                            {iconObj.icon}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-center space-x-3">
                                    <button className="bg-green-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-green-600 transition">
                                        {item.btn1}
                                    </button>
                                    <button className="border border-gray-400 px-4 py-2 cursor-pointer rounded hover:bg-gray-700 transition">
                                        {item.btn2}
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>







            ) : nav === "about" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-3 max-w-7xl mx-auto mt-9">
                    {/* Project Card 1 */}
                    {cards.map((item) => (
                        <div key={item.id} className="bg-[#26313f] p-2 rounded-xl shadow-sm shadow-gray-600 text-center text-white transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-green-400 hover:shadow-lg">
                            <div className="bg-[#0d1117] rounded-t-xl h-60 flex items-center justify-center overflow-hidden ">
                                <img src={item.image} alt="Project Thumbnail" className="h-full w-full rounded-t-xl transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div className="p-3">
                                <h1 className="text-2xl font-bold">{item.title}</h1>
                                <h3 className="mt-4 text-lg">
                                    {item.description.substring(0, 120) + (item.description.length > 120 ? "..." : "")}
                                </h3>
                                <p className="text-green-400 mt-2 text-lg">Technologies Used:</p>
                                <div className="flex justify-center space-x-3 mt-2 text-2xl">
                                    {item.icons.map((iconObj, index) => (
                                        <span key={index} className={iconObj.style}>
                                            {iconObj.icon}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-center space-x-3">
                                    <button className="bg-green-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-green-600 transition">
                                        {item.btn1}
                                    </button>
                                    <button className="border border-gray-400 px-4 py-2 cursor-pointer rounded hover:bg-gray-700 transition">
                                        {item.btn2}
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-3 md:px-3 max-w-7xl mx-auto mt-9">
                    {/* Project Card 1 */}
                    {cards.map((item) => (
                        <div key={item.id} className="bg-[#26313f] p-2 rounded-xl shadow-sm shadow-gray-600 text-center text-white transform transition-transform duration-300 hover:-translate-y-3 hover:shadow-green-400 hover:shadow-lg">
                            <div className="bg-[#0d1117] rounded-t-xl h-60 flex items-center justify-center overflow-hidden ">
                                <img src={item.image} alt="Project Thumbnail" className="h-full w-full rounded-t-xl transition-transform duration-300 hover:scale-110" />
                            </div>
                            <div className="p-3">
                                <h1 className="text-2xl font-bold">{item.title}</h1>
                                <h3 className="mt-4 text-lg">
                                    {item.description.substring(0, 120) + (item.description.length > 120 ? "..." : "")}
                                </h3>
                                <p className="text-green-400 mt-2 text-lg">Technologies Used:</p>
                                <div className="flex justify-center space-x-3 mt-2 text-2xl">
                                    {item.icons.map((iconObj, index) => (
                                        <span key={index} className={iconObj.style}>
                                            {iconObj.icon}
                                        </span>
                                    ))}
                                </div>
                                <div className="mt-4 flex justify-center space-x-3">
                                    <button className="bg-green-500 text-white px-4 py-2 cursor-pointer rounded hover:bg-green-600 transition">
                                        {item.btn1}
                                    </button>
                                    <button className="border border-gray-400 px-4 py-2 cursor-pointer rounded hover:bg-gray-700 transition">
                                        {item.btn2}
                                    </button>
                                </div>
                            </div>
                        </div>

                    ))}
                </div>
            )}
        </div>
    );
};

export default Projects;
