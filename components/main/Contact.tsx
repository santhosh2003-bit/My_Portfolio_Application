"use client";
import React from "react";
import { motion } from "framer-motion";
import { Profile } from "@/constants";
import Card3DTilt from "../sub/Card3DTilt";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-20 max-w-[1200px] m-auto w-full z-[30] relative"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="w-full"
      >
        <Card3DTilt intensity={5} rounded="rounded-[32px]" glare={false}>
          <div className="relative overflow-hidden border border-white/10 bg-gradient-to-br from-[#0d0826]/80 to-[#030014]/80 backdrop-blur-md rounded-[32px] p-10 md:p-16 flex flex-col items-center text-center gap-8 shadow-[0_0_40px_rgba(112,66,248,0.15)]">
            {/* ambient grid glow */}
            <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative flex flex-col items-center gap-4">
              <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full border border-[#7042f88b] bg-[#7042f815] text-purple-200 text-[13px] font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                {Profile.status}
              </span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white max-w-[700px] leading-tight">
                Let&apos;s build something{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  great together
                </span>
              </h2>
              <p className="text-gray-400 text-[16px] max-w-[560px]">
                Have a role, a project, or an idea in mind? I&apos;m always open to
                discussing new opportunities and collaborations.
              </p>
            </div>

            <div className="relative flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${Profile.email}`}
                className="py-3.5 px-8 button-primary text-center text-white cursor-pointer rounded-xl font-semibold transition-transform duration-200 hover:scale-105 flex items-center gap-2"
              >
                <HiOutlineMail className="w-5 h-5" />
                Email Me
              </a>
              <a
                href={Profile.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-8 border border-[#7042f88b] text-center text-gray-200 hover:text-white cursor-pointer rounded-xl font-semibold transition-all duration-200 hover:bg-[#7042f815]"
              >
                Download Resume
              </a>
            </div>

            {/* Contact detail chips */}
            <div className="relative flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-gray-400 text-[14px] pt-6 border-t border-white/5 w-full max-w-[640px]">
              <a
                href={`mailto:${Profile.email}`}
                className="flex items-center gap-2 hover:text-[#b49bff] transition"
              >
                <HiOutlineMail className="w-4 h-4" /> {Profile.email}
              </a>
              <a
                href={`tel:${Profile.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-[#b49bff] transition"
              >
                <HiOutlinePhone className="w-4 h-4" /> {Profile.phone}
              </a>
              <span className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4" /> {Profile.location}
              </span>
            </div>

            {/* Social icons */}
            <div className="relative flex items-center gap-4">
              <a
                href="https://github.com/santhosh2003-bit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-[#7042f8]/50 hover:bg-[#7042f815] transition duration-200"
              >
                <RxGithubLogo className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/santhoshchintu534/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 rounded-full border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:border-[#7042f8]/50 hover:bg-[#7042f815] transition duration-200"
              >
                <RxLinkedinLogo className="w-6 h-6" />
              </a>
            </div>
          </div>
        </Card3DTilt>
      </motion.div>
    </section>
  );
};

export default Contact;
