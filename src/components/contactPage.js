import React from "react";

export default function Contact() {
  return (
    <div className="bg-black py-10 px-4 h-lvh">
      <h2 className="text-3xl font-semibold text-center text-white mb-8">Contact Me</h2>

      <div className=" flex items-center justify-center ">
        
        

        
        <div className="bg-white shadow-lg border-l-4 border-pink-500 rounded-lg p-6 w-full max-w-md transition-transform duration-300 transform hover:scale-105">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Send a Message</h3>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border rounded bg-gray-100 focus:bg-white outline-none transition-colors duration-200"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border rounded bg-gray-100 focus:bg-white outline-none transition-colors duration-200"
              required
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="p-3 border rounded bg-gray-100 focus:bg-white outline-none transition-colors duration-200"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition-colors duration-200"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
