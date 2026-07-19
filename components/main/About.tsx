"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Profile } from "@/constants";
import Card3DTilt from "../sub/Card3DTilt";
import { CheckBadgeIcon, MapPinIcon } from "@heroicons/react/24/solid";

const About = () => {
  return (
    <section
      id="about"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-20 max-w-[1200px] m-auto w-full z-[30] relative"
    >
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center flex flex-col items-center gap-4 mb-16">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          About Me
        </h2>
        <p className="text-gray-400 text-[16px] max-w-[520px]">
          The engineer behind the code — my background, focus, and what drives my
          work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-14 w-full items-center">
        {/* Photo with 3D tilt frame */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-2 flex justify-center"
        >
          <Card3DTilt intensity={8} rounded="rounded-[28px]" className="w-full max-w-[340px]">
            <div className="relative rounded-[28px] p-[1.5px] bg-gradient-to-br from-purple-500/60 via-transparent to-cyan-500/60 shadow-[0_20px_60px_rgba(112,66,248,0.25)]">
              <div className="relative overflow-hidden rounded-[26px] bg-[#0a0a1f] aspect-[3/4]">
                <Image
                  src={Profile.photo}
                  alt={Profile.name}
                  fill
                  className="object-cover object-top"
                  sizes="340px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent" />
                {/* Floating status pill */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center gap-2 bg-black/60 backdrop-blur-md border border-white/10 rounded-2xl px-4 py-2.5">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                  </span>
                  <span className="text-[12px] text-gray-200 font-medium">
                    {Profile.status}
                  </span>
                </div>
              </div>
            </div>
          </Card3DTilt>
        </motion.div>

        {/* Bio + highlights */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="md:col-span-3 flex flex-col gap-6"
        >
          <div>
            <h3 className="text-white text-3xl font-extrabold">
              {Profile.name}
            </h3>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-purple-300">
              <span className="font-semibold text-lg">{Profile.role}</span>
              <span className="flex items-center gap-1 text-gray-400 text-sm">
                <MapPinIcon className="w-4 h-4" /> {Profile.location}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {Profile.bio.map((para, idx) => (
              <p key={idx} className="text-gray-400 text-[15.5px] leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
            {Profile.highlights.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-gray-300 text-[14px] bg-white/[0.03] border border-white/10 rounded-xl px-4 py-3"
              >
                <CheckBadgeIcon className="w-5 h-5 text-cyan-400 shrink-0" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 mt-3">
            <a
              href={Profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-medium transition-transform duration-200 hover:scale-105"
            >
              View Resume
            </a>
            <a
              href="#contact"
              className="py-3 px-6 border border-[#7042f88b] text-center text-gray-300 hover:text-white cursor-pointer rounded-lg font-medium transition-all duration-200 hover:bg-[#7042f815]"
            >
              Get In Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
