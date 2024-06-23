"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion"; // Import the Image component from the correct package

const Navbar: React.FC = () => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      <nav className=" bg-white h-14 flex items-center justify-between px-16">
        <div className="flex items-center justify-stretch gap-4 text-gray-700">
          <div>
            <Image
              src="/images/janiscare-logo.svg"
              alt="logo"
              width={170}
              height={100}
            />
          </div>
        </div>
        <div className=" flex items-center justify-stretch gap-4">
          <div>
            <ul className="flex gap-8 font-semibold">
              <li className=" hover:text-blue-600">
                <Link href="/">Home</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link href="/about-us">About Us</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link href="/products">Products</Link>
              </li>
              <li className=" hover:text-blue-600">
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </div>
          <button className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-4 py-2 rounded-full">
            <span>Explore</span>
            <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent  h-px" />
          </button>
        </div>
      </nav>
    </motion.div>
  );
};

export default Navbar;
