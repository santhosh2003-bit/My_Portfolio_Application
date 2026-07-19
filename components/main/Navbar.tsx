"use client";
import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { motion, AnimatePresence } from "framer-motion";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import Image from "next/image";
import { Profile } from "@/constants";

const Navbar = () => {
  const [state, setState] = useState(false);

  return (
    <div className="w-full fixed top-5 left-0 right-0 z-50 px-4 md:px-10">
      <div className="max-w-[1200px] h-[60px] m-auto flex flex-row items-center justify-between px-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-300">
        
        {/* Brand & Availability Status */}
        <a href="#about-me" className="flex flex-row items-center gap-3 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-[#7042f8]/50 group-hover:border-[#7042f8] transition-colors duration-200">
              <Image
                src={Profile.photo}
                alt={Profile.name}
                width={36}
                height={36}
                className="object-cover object-top w-full h-full"
              />
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-emerald-500 border-2 border-[#0a0a1f]"></span>
          </div>
          <span className="font-bold text-gray-200 group-hover:text-white transition duration-200">
            Boda Santhosh
          </span>
          <span className="hidden sm:inline-block text-[11px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full font-medium">
            Available for Hire
          </span>
        </a>

        {/* Center Nav Links */}
        <div className="hidden md:flex items-center gap-7 text-[14px] font-medium text-gray-300">
          <a href="#about" className="hover:text-white transition-colors duration-200">About</a>
          <a href="#services" className="hover:text-white transition-colors duration-200">Services</a>
          <a href="#skills" className="hover:text-white transition-colors duration-200">Skills</a>
          <a href="#experience" className="hover:text-white transition-colors duration-200">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors duration-200">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>

        {/* Right Side Socials & Contact Button */}
        <div className="hidden md:flex flex-row gap-4 items-center">
          <a 
            href="https://github.com/santhosh2003-bit" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            <RxGithubLogo className="w-5 h-5" />
          </a>
          <a 
            href="https://www.linkedin.com/in/santhoshchintu534/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition duration-200"
          >
            <RxLinkedinLogo className="w-5 h-5" />
          </a>
          <a 
            href="mailto:santhoshchintu534@gmail.com" 
            className="bg-white text-black hover:bg-white/90 text-[13px] px-4 py-1.5 rounded-xl font-bold transition duration-200 shadow-[0_0_15px_rgba(255,255,255,0.15)]"
          >
            Get In Touch
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="md:hidden flex items-center">
          {state ? (
            <XMarkIcon
              className="h-6 w-6 text-gray-300 cursor-pointer hover:text-white"
              onClick={() => setState(false)}
            />
          ) : (
            <Bars3Icon
              className="h-6 w-6 text-gray-300 cursor-pointer hover:text-white"
              onClick={() => setState(true)}
            />
          )}
        </div>
      </div>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {state && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="absolute top-[80px] left-4 right-4 bg-black/85 backdrop-blur-2xl border border-white/10 p-5 rounded-2xl flex flex-col gap-4 z-40 md:hidden shadow-[0_20px_40px_rgba(0,0,0,0.8)]"
          >
            <a
              href="#about"
              className="text-gray-300 hover:text-white text-lg py-2 border-b border-white/5"
              onClick={() => setState(false)}
            >
              About
            </a>
            <a
              href="#services"
              className="text-gray-300 hover:text-white text-lg py-2 border-b border-white/5"
              onClick={() => setState(false)}
            >
              Services
            </a>
            <a
              href="#skills"
              className="text-gray-300 hover:text-white text-lg py-2 border-b border-white/5"
              onClick={() => setState(false)}
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-300 hover:text-white text-lg py-2 border-b border-white/5"
              onClick={() => setState(false)}
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-300 hover:text-white text-lg py-2 border-b border-white/5"
              onClick={() => setState(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-gray-300 hover:text-white text-lg py-2 border-b border-white/5"
              onClick={() => setState(false)}
            >
              Contact
            </a>
            
            <div className="flex flex-row items-center justify-between pt-3 border-t border-white/5">
              <div className="flex gap-4">
                <a 
                  href="https://github.com/santhosh2003-bit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <RxGithubLogo className="w-6 h-6" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/santhoshchintu534/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <RxLinkedinLogo className="w-6 h-6" />
                </a>
              </div>
              <a 
                href="mailto:santhoshchintu534@gmail.com" 
                className="bg-white text-black hover:bg-white/90 text-sm px-4 py-2 rounded-xl font-bold transition duration-200"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;


