"use client";
import React from "react";
import { motion } from "framer-motion";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const ContactUs = () => {
  const words = [
    {
      text: "Contact",
    },
    {
      text: "Us.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <div className="flex flex-col items-center p-4">
      <motion.div
        className="w-full h-[50vh] bg-cover bg-center relative mb-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <img
          src="/images/4.jpg"
          alt="hero"
          className="object-cover h-full w-full absolute inset-0 z-0"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 z-1" />
        <TypewriterEffectSmooth
          className="z-50 my-[150px] text-white"
          words={words}
        />
      </motion.div>

      <div className="w-full mb-8">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3765.942825389813!2d73.08405557441504!3d20.909722828214013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd7e66bc5f7f27f%3A0xbad4b1f0a1b50d30!2sPurimo%20Foods%20India%20Ltd.!5e0!3m2!1sen!2sin!4v1625127348345!5m2!1sen!2sin"
          width="600"
          height="450"
          allowFullScreen
          loading="lazy"
          title="Google Map"
          className="w-full h-64 md:h-96"
        ></iframe>
      </div>

      <div className="flex flex-col md:flex-row justify-around w-full mb-8">
        <div className="flex flex-col items-center text-center mb-4 md:mb-0">
          <img src="/location-icon.png" alt="Address" className="w-8 h-8 mb-2" />
          <p>65/2 Siyada Road, Khudwel, Kaliyari, Chikhli, Gujarat 396540</p>
        </div>
        <div className="flex flex-col items-center text-center mb-4 md:mb-0">
          <img src="/phone-icon.png" alt="Phone" className="w-8 h-8 mb-2" />
          <p>
            +91 93139 24093
            <br />
            +91 98202 22213
            <br />
            +91 98251 27622
          </p>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src="/email-icon.png" alt="Email" className="w-8 h-8 mb-2" />
          <p>
            info@janiscare.com
            <br />
            pavitra@janiscare.com
            <br />
            narendra@janiscare.com
          </p>
        </div>
      </div>

      <form className="w-full max-w-md flex flex-col items-center">
        <h2 className="text-center mb-4">Start the journey from care to cure with Janis Care.</h2>
        <p className="text-center mb-6">To make our high-quality products yours, get in touch with us.</p>
        <input
          type="text"
          name="name"
          placeholder="Name"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          name="message"
          placeholder="Message"
          required
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
