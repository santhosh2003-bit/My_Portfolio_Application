"use client";
import React from "react";
import { motion } from "framer-motion";
import { EducationData } from "@/constants";
import { AcademicCapIcon, TrophyIcon } from "@heroicons/react/24/outline";
import Card3DTilt from "../sub/Card3DTilt";

const Education = () => {
  return (
    <section
      id="education"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-20 max-w-[1200px] m-auto w-full z-[30] relative"
    >
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-16 text-center">
        Education & Achievements
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
        {/* Education Column */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card3DTilt intensity={7} rounded="rounded-2xl" className="h-full">
            <div className="h-full border border-[#7042f861] bg-[#030014]/50 backdrop-blur-md p-8 rounded-2xl flex flex-col gap-6 shadow-[0_0_15px_#7042f815]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#7042f822] rounded-xl border border-[#7042f855]">
                  <AcademicCapIcon className="w-8 h-8 text-[#b49bff]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>

              <div className="flex flex-col gap-4 border-t border-[#7042f833] pt-6">
                <div>
                  <span className="text-[#b49bff] text-[14px] font-semibold uppercase tracking-wider">
                    {EducationData.period}
                  </span>
                  <h4 className="text-xl font-bold text-white mt-1">
                    {EducationData.degree}
                  </h4>
                  <p className="text-gray-300 text-[16px] font-medium mt-1">
                    {EducationData.school}
                  </p>
                  <p className="text-gray-500 text-[14px] mt-0.5">
                    {EducationData.location}
                  </p>
                </div>

                <div className="mt-4 py-3 px-4 bg-[#7042f811] border border-[#7042f844] rounded-xl w-fit">
                  <span className="text-gray-300 font-medium">CGPA: </span>
                  <span className="text-[#b49bff] font-extrabold text-lg">{EducationData.cgpa}</span>
                  <span className="text-gray-500 text-sm"> / 10.0</span>
                </div>
              </div>
            </div>
          </Card3DTilt>
        </motion.div>

        {/* Achievements Column */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card3DTilt intensity={7} rounded="rounded-2xl" className="h-full">
            <div className="h-full border border-[#7042f861] bg-[#030014]/50 backdrop-blur-md p-8 rounded-2xl flex flex-col gap-6 shadow-[0_0_15px_#7042f815]">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#7042f822] rounded-xl border border-[#7042f855]">
                  <TrophyIcon className="w-8 h-8 text-[#b49bff]" />
                </div>
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>

              <div className="flex flex-col gap-4 border-t border-[#7042f833] pt-6 h-full justify-between">
                <ul className="flex flex-col gap-4">
                  {EducationData.achievements.map((ach, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-300 text-[15px] leading-relaxed">
                      <span className="text-[#b49bff] font-bold text-lg select-none">✦</span>
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 text-[14px] text-gray-500 italic">
                  Focused on performance, security, and continuous professional growth.
                </div>
              </div>
            </div>
          </Card3DTilt>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
