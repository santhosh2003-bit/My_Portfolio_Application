"use client";
import React from "react";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 border-t border-[#2A0E61]/40 py-10 px-5 text-white z-[20] relative">
      <div className="max-w-[1200px] w-full flex flex-col items-center justify-center m-auto gap-8">
        <div className="w-full flex flex-row items-center justify-around flex-wrap gap-8 text-center md:text-left">
          
          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start justify-start gap-3">
            <div className="font-bold text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Professional Links
            </div>
            <a 
              href="https://github.com/santhosh2003-bit" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-row items-center gap-2 hover:text-[#b49bff] transition duration-200"
            >
              <RxGithubLogo className="w-5 h-5" />
              <span className="text-[15px]">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/santhoshchintu534/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-row items-center gap-2 hover:text-[#b49bff] transition duration-200"
            >
              <RxLinkedinLogo className="w-5 h-5" />
              <span className="text-[15px]">LinkedIn</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start justify-start gap-3">
            <div className="font-bold text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              Contact
            </div>
            <a 
              href="mailto:santhoshchintu534@gmail.com" 
              className="flex flex-row items-center gap-2 hover:text-[#b49bff] transition duration-200"
            >
              <HiOutlineMail className="w-5 h-5" />
              <span className="text-[15px]">santhoshchintu534@gmail.com</span>
            </a>
            <a 
              href="tel:+917036493674" 
              className="flex flex-row items-center gap-2 hover:text-[#b49bff] transition duration-200"
            >
              <HiOutlinePhone className="w-5 h-5" />
              <span className="text-[15px]">+91 7036493674</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center md:items-start justify-start gap-3">
            <div className="font-bold text-[18px] text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
              About
            </div>
            <p className="text-[15px] text-gray-400">
              B.Tech in Cyber Security
            </p>
            <p className="text-[15px] text-gray-400">
              Software Engineer
            </p>
            <p className="text-[15px] text-gray-400">
              Hyderabad, India
            </p>
          </div>

        </div>

        <div className="mt-8 text-[14px] text-gray-500 text-center border-t border-[#7042f83a] w-full pt-5">
          &copy; {new Date().getFullYear()} Boda Santhosh. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;

