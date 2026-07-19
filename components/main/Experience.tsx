"use client";
import React from "react";
import { motion } from "framer-motion";
import { ExperienceData } from "@/constants";
import { BriefcaseIcon, MapPinIcon, CalendarIcon } from "@heroicons/react/24/outline";

const ExperienceCard = ({ exp, index }: { exp: typeof ExperienceData[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="flex flex-col md:flex-row gap-6 md:gap-12 relative border-l-2 border-dashed border-[#7042f861] pl-8 md:pl-12 ml-4 md:ml-8 pb-16 last:pb-0"
    >
      {/* Timeline Bullet Node with Glow */}
      <div className="absolute -left-[11px] top-2.5 w-5 h-5 rounded-full bg-black border-[3px] border-[#7042f8] flex items-center justify-center shadow-[0_0_15px_#7042f8]" />
      
      {/* Date / Period Column */}
      <div className="flex-1 md:max-w-[220px]">
        <div className="flex items-center gap-2 text-cyan-400 font-mono text-[13px] font-semibold uppercase tracking-wider bg-cyan-950/40 border border-cyan-500/20 px-3.5 py-1.5 rounded-full w-fit">
          <CalendarIcon className="w-4 h-4" />
          <span>{exp.period}</span>
        </div>
      </div>
      
      {/* Content Block */}
      <div className="flex-[3] border border-white/5 bg-black/40 hover:bg-black/60 backdrop-blur-md p-8 rounded-3xl shadow-lg hover:border-[#7042f8]/40 hover:shadow-[0_0_20px_rgba(112,66,248,0.15)] transition duration-300">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 pb-4 border-b border-white/5 mb-6">
          <div>
            <h3 className="text-white text-2xl font-bold flex items-center gap-2">
              <BriefcaseIcon className="w-6 h-6 text-purple-400 inline" />
              {exp.role}
            </h3>
            <div className="text-purple-300 font-semibold text-lg mt-1">
              {exp.company}
            </div>
          </div>
          <div className="flex items-center gap-1.5 text-gray-500 text-sm bg-white/5 px-3 py-1 rounded-xl w-fit">
            <MapPinIcon className="w-4 h-4 text-gray-400" />
            <span>{exp.location}</span>
          </div>
        </div>

        <ul className="list-none text-gray-300 text-[15px] space-y-3.5">
          {exp.points.map((point, idx) => (
            <li key={idx} className="flex gap-3 leading-relaxed">
              <span className="text-purple-500 font-bold select-none mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-20 max-w-[1200px] m-auto w-full z-[30] relative"
    >
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="text-center flex flex-col items-center gap-4 mb-20">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Work History
        </h2>
        <p className="text-gray-400 text-[16px] max-w-[500px]">
          A timeline of my software engineering roles, professional developments, and enterprise implementations.
        </p>
      </div>
      
      <div className="w-full flex flex-col justify-start relative">
        {ExperienceData.map((exp, index) => (
          <ExperienceCard key={exp.company} exp={exp} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
