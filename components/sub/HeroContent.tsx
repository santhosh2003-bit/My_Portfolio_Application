"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-10 md:flex-row items-center justify-center px-10 md:px-20 mt-32 md:mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[12px] border border-[#7042f88b] opacity-[0.9] bg-[#030014]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="md:bg-transparent text-purple-200 text-[13px] font-semibold">
            Software Engineer
          </h1>
        </motion.div>
        
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-3xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span className="leading-tight">
            I&apos;m
            <span className="text-transparent bg-clip-text bg-gradient-to-r font-extrabold from-purple-500 to-cyan-500">
              {" "}Boda Santhosh{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px] leading-relaxed"
        >
          I am a Software Engineer with 2+ years of experience designing and developing scalable web applications. Specializing in Java, TypeScript, Next.js, and Node.js, and backed by a Bachelor of Technology in Cyber Security. I build secure, high-performance, and elegant applications.
        </motion.p>
        
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4"
        >
          <a
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-medium transition-transform duration-200 hover:scale-105"
            href="/Boda-Santhosh-Job-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </a>
          <a
            className="py-3 px-6 border border-[#7042f88b] text-center text-gray-300 hover:text-white cursor-pointer rounded-lg font-medium transition-all duration-200 hover:bg-[#7042f815]"
            href="#projects"
          >
            My Projects
          </a>
        </motion.div>
      </div>
      
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/hero_illustration.png"
          alt="work icon"
          height={650}
          width={650}
          className="object-contain rounded-3xl border border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;


