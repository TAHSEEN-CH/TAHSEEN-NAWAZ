import { useRef } from "react";
import emailJS from "@emailjs/browser";


const Contact = () => {

  const observer = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form submitted successfully!");

    emailJS.sendForm("service_mv5k7xs", "template_tkn87qg", observer.current, "qzUjeVCIOscx-HBGv")
      .then(() => {
        alert("Email Sent Successfully!");

        if (observer.current) {
          observer.current.reset();
        }
      })
      .catch((err) => console.log(err));
  };





  return (
    <div className="text-white  flex flex-col items-center  bg-[#111827] py-20 px-5 border-b-2 border-green-500">
      <div className="p-3 lg:text-4xl md:text-4xl text-2xl mt-10 text-center w-full mb-7 flex items-center justify-center gap-2">
        <div className="h-1 w-10 md:w-16 lg:w-16 rounded-xl bg-green-400"></div>
        <h1>Get in Touch</h1>
        <div className="h-1 w-10 md:w-16 lg:w-16 rounded-xl bg-green-400"></div>
      </div>

      <div className="flex flex-col lg:flex-row lg:h-[70vh] items- justify-center gap-  w-full">
        {/* Image Section */}
        <div className="relative w-full lg:w-3/7">
          <img src="./img.png" alt="" className=" w-full md:h-[50vh] lg:h-full sm:h-[10vh] object-cover  md:rounded-t-xl lg:rounded-l-xl max-md:rounded-t-xl shadow-md" />

          <div className="absolute inset-0 bg-black opacity-30 lg:rounded-l-xl md:rounded-t-xl max-md:rounded-t-xl"></div>

          <div className="absolute inset-0 flex items-center justify-center p-5 ">
            <h1 className="text-white text-4xl md:text-6xl lg:text-6xl font-semibold text-start ">
              Let's discuss <br /> something <span className="text-green-400">cool</span> <br /> together
            </h1>
          </div>
        </div>

        {/* Form Section */}
        <div className="w-full lg:w-3/6 p-6 lg:h-[70vh] lg:ms-[-8px] z-10 rounded-b-md lg:rounded-br-xl bg-white lg:rounded-r-xl lg:rounded-b-none md:rounded-b-2xl sm:rounded-b-xl  shadow-xl">
          {/* Interest Selection */}
          <h3 className="text-gray-700 mb-4 mt-[-2px] text-2xl font-semibold">I'm interested in...</h3>
          {/* <div className="flex flex-wrap gap-3 mb-6">
        <button className="px-5 py-2 border rounded-md bg-green-400 text-black font-medium hover:bg-green-500 transition">
          Frontend
        </button>
        <button className="px-5 py-2 border rounded-md border-gray-300 text-gray-600 hover:bg-gray-200 transition">
          GIS
        </button>
        <button className="px-5 py-2 border rounded-md border-gray-300 text-gray-600 hover:bg-gray-200 transition">
          Other
        </button>
      </div> */}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-1 " ref={observer} >
            <div>
              <label className="block text-purple-700 font-semibold text-lg">Your Name :-</label>
              <input
                type="text"
                name="name"
                placeholder="Your Name..."
                className="w-full p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
              />
            </div>
            <div>
              <label className="block text-purple-700 font-semibold text-lg">Phone Number :-</label>
              <input
                type="tel"
                name="phone"
                placeholder="+1 234 567 890"
                className="w-full p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
              />
            </div>
            <div>
              <label className="block text-purple-700 font-semibold text-lg">Your Email :-</label>
              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                className="w-full p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
              />
            </div>
            <div>
              <label className="block text-purple-700 font-semibold text-lg">Your Message :-</label>
              <textarea
                name="message"
                placeholder="Write your message here..."
                className="w-full overflow-y-auto  p-3 border-b-2 border-gray-500 outline-none text-gray-900 bg-transparent focus:border-black transition"
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-[70%] mx-auto cursor-pointer bg-gradient-to-r from-green-400 to-green-500 text-black py-4 rounded-lg font-medium flex items-center justify-center gap-2 shadow-md hover:scale-103 transition"
            >
              <span>💌</span> Send Message
            </button>
          </form>
        </div>
      </div>
    </div>



  );
}

export default Contact