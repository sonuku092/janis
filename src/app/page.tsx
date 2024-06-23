"use client";
import Navbar from "@/components/Navbar";
import { SparklesPreview } from "@/components/SparklesPreview";
import { Suspense } from "react";
import VideoComponent from "@/components/ui/VideoComponent";
import Image from "next/image";
import { CanvasRevealEffectDemo } from "@/components/Products";
import { motion } from "framer-motion";
import { styleText } from "util";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = `COVID-19 changed the world. It caught frontline workers, healthcare officials, and even the common man off-guard. The world wasn’t prepared for this severe a pandemic that has shaken the core of every human being. It has taken away many lives and has left the world numb.
Every country took its precautionary methods and tried to fight the pandemic, and we are left to deal with the ‘new normal.`;

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className=" flex relative">
        <div className="absolute inset-0 z-0">
          <video
            width="100%"
            height=""
            preload="none"
            loop
            autoPlay
            muted
            className="relative opacity-50 overflow-hidden z-0 w-full h-full object-cover"
          >
            <source src="/videos/janis-care.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="absolute inset-0 bg-blue-400 bg-opacity-50 z-1" />
        <SparklesPreview />
      </div>

      <motion.div
        className="box relative -mt-[150px] flex h-[370px] z-40 bg-slate-50 rounded-tl-full rounded-tr-full justify-center space-x-4"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <motion.div
          className="box relative -mt-16 h-[330px] w-[300px] shadow-lg bg-white rounded-lg cursor-pointerl p-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className=" bg-white">
            <img
              src="/images/JanisCare-N95-Earloop-01.jpg"
              alt="hero"
              className="object-cover h-[120%] overflow-hidden w-[120%] rounded-lg"
            />
          </div>
          <h2 className=" text-blue-500 font-bold text-center">N95 Earloop</h2>
        </motion.div>
        <motion.div
          className="box relative -mt-16 h-[330px] w-[300px] shadow-lg bg-white  rounded-lg cursor-pointerl p-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className=" bg-white">
            <img
              src="/images/JanisCare-N95-Earloop-01.jpg"
              alt="hero"
              className="object-cover h-[120%] overflow-hidden w-[120%] rounded-lg"
            />
          </div>
          <h2 className=" text-blue-500 font-bold text-center">N95 Headloop</h2>
        </motion.div>
        <motion.div
          className="box relative -mt-16 h-[330px] w-[300px] shadow-lg bg-white rounded-lg cursor-pointerl p-2"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div className=" bg-white">
            <img
              src="/images/JanisCare-Surgical-Mask-01.jpg"
              alt="hero"
              className="object-cover h-[120%] overflow-hidden w-[120%] rounded-lg"
            />
          </div>
          <h2 className=" text-blue-500 font-bold text-center">
            Surgical Mask
          </h2>
        </motion.div>
      </motion.div>

      <motion.div
        className="box flex  bg-blue-600 z-50 relative px-16 my-20"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className="flex items-center justify-center bg-blue-600  w-[60%]">
          <TextGenerateEffect words={words} />
        </div>
        <div className="flex items-center justify-center w-[40%]">
          <motion.div
            className="box relative  h-[400px] w-[400px] shadow-lg bg-slate-500 rounded-lg justify-center -m-10"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.07 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <img
              src="/images/Write_Up_Image-1536x1536.jpg"
              alt="hero"
              className="object-cover h-[100%] overflow-hidden w-[100%] rounded-lg"
            />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="box flex  relative px-16 my-20 space-x-8"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <div className=" h-[500px] w-[600px] rounded-2xl justify-center content-center ">
          <p className=" h-max align-middle ">
            The ‘new normal’ entails a lot of focus on hygiene, precautions, and
            healthy habits to ensure a stronger immunity and a safer tomorrow.
            We trust that as responsible citizens, you all will take all the
            precautions at your end. And we’re here to take care of your
            precautions with our masks.
          </p>
        </div>
        <motion.div
          className="box relative  h-[500px] w-[400px] shadow-lg bg-white rounded-lg justify-center p-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div>
          <img
            src="/images/JanisCare-N95-Earloop-01.jpg"
            alt="hero"
            className="object-cover h-[100%] overflow-hidden w-[100%] rounded-lg"
          />
          </div>
          
          <h1 className=" text-blue-700 font-extrabold text-[25px]">N95 Mask</h1>
          <p className=" text-[12px]">The N95 respirator is a mask for personal protection that keeps the wearer safe from liquid particles contaminating the face.</p>
          <button className=" bg-blue-600 rounded-lg min-w-full p-2 text-white">Read More</button>
        </motion.div>
        <motion.div
          className="box relative  h-[500px] w-[400px] shadow-lg bg-white rounded-lg justify-center p-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.07 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <div>
          <img
            src="/images/JanisCare-Surgical-Mask-01.jpg"
            alt="hero"
            className="object-cover h-[100%] overflow-hidden w-[100%] rounded-lg"
          />
          </div>
          
          <h1 className=" text-blue-700 font-extrabold text-[25px]">Surgical Mask</h1>
          <p className=" text-[12px]">The N95 respirator is a mask for personal protection that keeps the wearer safe from liquid particles contaminating the face.</p>
          <button className=" bg-blue-600 rounded-lg min-w-full p-2 text-white">Read More</button>
        </motion.div>
      </motion.div>
    </main>
  );
}
