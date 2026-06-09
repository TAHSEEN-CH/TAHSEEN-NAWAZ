import React from "react";
import { BsBootstrapFill } from "react-icons/bs";
import { FaCss3Alt, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { SiGithub, SiTailwindcss } from "react-icons/si";




const About = () => {
  return (
    <section id="about" className="bg-gray-900 text-white py-20 lg:pb-18  p-8  md:pb-6 border-b-2 border-green-500 ">
      <div className="container mx-auto flex flex-col-reverse md:grid md:grid-cols-2 md:gap-4 items-center md:py-8 ">

        {/* Image Section */}
        <div className=" flex justify-center ">
          {/* <div className=" bg-green-400 absolute z-10 p-2 w-[30%]"></div> */}
          <div className=" relative z-20 ">

            <div className="overflow-hidden z-20 relative">
              <img
                src="/tah4.jpg"
                alt="Profile"
                className=" w-72 md:w-96 transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className=" bg-green-400 absolute z-10 p-2 w-[70%] h-[80%] left-[-12px] top-[-10px]"></div>
          </div>
        </div>

        {/* Text Section */}
        <div className="lg:pe-3 py-10 md:py-5 ">
          <h2 className="text-4xl font-bold mb-2 ">About Me</h2>
          <p className="text-md text-green-400 mb-4 ms-20">- Who am I? -</p>
          <p className="lg:text-2xl md:text-md md:px-0 md:leading-tight leading-relaxed text-gray-300">
            I am currently a master's student in Applied Geoinformatics at the University of Salzburg, Austria.
            I have a keen interest in front-end and GIS development. My goal is to use my expertise in building
            exciting and functional user interfaces. Additionally, I employ my geospatial analysis, modeling, and
            process automation skills to engineer innovative, customizable, and sustainable software solutions.
            The following are tech stacks that I use regularly.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2 cursor-pointer bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-400">
              <FaHtml5 className="text-orange-500 text-2xl md:text-md " /> HTML5
            </div>
            <div className="flex items-center gap-2 cursor-pointer bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-400">
              <FaCss3Alt className="text-blue-500 text-2xl" /> CSS3
            </div>
            <div className="flex items-center gap-2 cursor-pointer bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-400">
              <BsBootstrapFill className="text-purple-500 text-2xl" /> Bootstrap 5
            </div>
            <div className="flex items-center gap-2 cursor-pointer bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-400">
              <FaJs className="text-yellow-500 text-2xl" /> JavaScript
            </div>
            <div className="flex items-center gap-2 cursor-pointer bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-400">
              <FaReact className="text-blue-400 text-2xl" /> React
            </div>
            <div className="flex items-center gap-2 cursor-pointer bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-400">
              <SiTailwindcss className="text-blue-500 text-2xl" /> Tailwind CSS
            </div>
            <div className="flex items-center gap-2 cursor-pointer bg-gray-800 p-2 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-green-400">
              <SiGithub className="text-blue-500 text-2xl" /> GitHub
            </div>
            <a href="/Tahseen_Nawaz_Resume.pdf">
              <button className="bg-green-400 cursor-pointer text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-500 transition">
                Download Resume
              </button>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default About;

