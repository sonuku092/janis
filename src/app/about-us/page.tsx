"use client";
import Navbar from "@/components/Navbar";
import React from "react";
import { motion } from "framer-motion";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

const AboutUs: React.FC = () => {
  const word2 = [
    {
      text: "About",
    },
    {
      text: "Janis",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Care",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  const words = [
    {
      text: "About",
    },

    {
      text: "Us.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];

  return (
    <section>
      <motion.div
        className="box min-h-[50vh] bg-cover bg-center"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className=" flex relative justify-center">
          <div className="absolute inset-0 z-0 ">
            <img
              src="/images/4.jpg"
              alt="hero"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="absolute inset-0 bg-black bg-opacity-50 z-1 " />
          <TypewriterEffectSmooth
            className=" z-10   my-[150px]"
            words={words}
          />
        </div>
      </motion.div>

      <motion.div
        className="box flex z-50 relative px-16 my-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex items-center justify-center w-[40%]">
          <motion.div
            className="box relative  h-[400px] w-[400px] shadow-lg bg-slate-500 rounded-lg justify-center -m-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="/images/2-1.jpg"
              alt="hero"
              className="object-cover h-[100%] overflow-hidden w-[100%] rounded-lg"
            />
          </motion.div>
        </div>
        <div className=" items-center justify-center w-[60%]">
          <div>
            <TypewriterEffectSmooth className=" z-10 " words={word2} />
          </div>
          <div>
            <p className=" text-lg mt-4">
              Janis Care, incepted in 2020, is our initiative to take the battle
              against COVID-19 into our hands. The pandemic rocked the world,
              took many lives, and changed several other lives forever. People
              lost loved ones, jobs, and in the end, hope. The frontliners were
              doing their best but watching them suffer without proper, good
              quality, protective gear was heart-wrenching. We wanted to make a
              difference for society by helping it be protected and secure. We
              wanted to secure the frontliners so they could do their best to
              protect the infected. Thus, Janis Care was established.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutUs;
