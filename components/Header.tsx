"use client";
import Image from "next/image";
import React from "react";
import logo from "@/public/logo.svg";
import Link from "next/link";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function Header() {
  return (
    <div className="bg-transparent backdrop-blur-xl drop-shadow-md ">
      <div className="flex justify-center items-center p-16 ">
        <h1 className=" relative z-0 text-2xl md:text-6xl font-bold tracking-wider uppercase text-[#1b1c1e]">
          farid rahimli
          <motion.button
            initial={{
              y: 0,
              scale: 1,
            }}
            whileTap={{
              y: 60,
              scale: 1.5,
            }}
            className="cursor-crosshair text-red-700"
          >
            .
          </motion.button>
        </h1>

        <motion.div
          initial={{
            rotate: 0,
            opacity: 0,
          }}
          animate={{
            opacity: 100,
          }}
          whileHover={{
            rotate: 180,
          }}
          transition={{
            duration: 2,
          }}
          className="w-1 md:w-2 h-20 mx-1 md:mx-5 bg-red-700"
        ></motion.div>
        <h2 className="text-md md:text-2xl tracking-wider uppercase text-[#1b1c1e]">
          project portfolio
          <motion.button
            initial={{
              scale: 1,
            }}
            whileTap={{
              y: -100,
              scale: 10,
            }}
            className="cursor-crosshair text-red-700"
          >
            .
          </motion.button>
        </h2>
      </div>
      <div className="uppercase tracking-widest text-red-700 font-light text-center py-2">
        <Typewriter
          words={[
            "<welcome/>",
            "{touch the red elements}",
            "feelFreeToExplore.tsx",
          ]}
          cursor={true}
          loop={true}
        ></Typewriter>
      </div>
      <div className="flex justify-center items-center space-x-4 text-sm">
        <SocialIcon
          className="opacity-100 hover:opacity-25"
          url="instagram.com"
          fgColor="#1b1c1e"
          bgColor="none"
        ></SocialIcon>
        <SocialIcon
          className="hover:opacity-50 hover:pr-20 transition-all duration-2000"
          url="youtube.com"
          fgColor="#1b1c1e"
          bgColor="none"
        ></SocialIcon>
        <SocialIcon
          className="hover:opacity-50 hover:pr-20 transition-all duration-2000"
          url="behance.com"
          fgColor="#1b1c1e"
          bgColor="none"
        ></SocialIcon>
        <SocialIcon
          className="hover:opacity-50 hover:pr-20 transition-all duration-2000"
          url="linkedin.com"
          fgColor="#1b1c1e"
          bgColor="none"
        ></SocialIcon>
        <SocialIcon
          className="hover:opacity-50"
          url="github.com"
          fgColor="#1b1c1e"
          bgColor="none"
        ></SocialIcon>
      </div>
      <motion.div
        initial={{
          rotate: 0,
          x: -500,
          opacity: 0,
        }}
        animate={{
          x: 0,
          opacity: 100,
        }}
        whileHover={{
          rotate: 50,
        }}
        className=" cursor-default bg-red-700 w-32 h-1 mx-auto my-3"
      ></motion.div>
    </div>
  );
}

export default Header;
