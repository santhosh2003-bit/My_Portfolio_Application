"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Frontend_skill, Backend_skill, Full_stack, Other_skill } from "@/constants";
import Image from "next/image";
import Card3DTilt from "../sub/Card3DTilt";

type TabType = "frontend" | "backend" | "databases" | "tools";

const Skills = () => {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend & Languages" },
    { id: "databases", label: "Databases & DevOps" },
    { id: "tools", label: "Developer Tools" },
  ];

  const getSkillsData = () => {
    switch (activeTab) {
      case "frontend":
        return Frontend_skill;
      case "backend":
        return Backend_skill;
      case "databases":
        return Full_stack;
      case "tools":
        return Other_skill;
      default:
        return [];
    }
  };

  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-20 max-w-[1200px] m-auto w-full z-[30] relative"
    >
      {/* Decorative background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center flex flex-col items-center gap-4 mb-16">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Skills & Technologies
        </h2>
        <p className="text-gray-400 text-[16px] max-w-[500px]">
          Inspect my technical stack by category. These are tools and technologies I use to build robust production systems.
        </p>
      </div>

      {/* Tabs Menu */}
      <div className="flex flex-wrap justify-center gap-2 p-1.5 bg-black/40 border border-white/10 rounded-2xl mb-12 backdrop-blur-md">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as TabType)}
            className={`relative px-5 py-2.5 rounded-xl text-[14px] font-semibold transition-all duration-300 ${
              activeTab === tab.id
                ? "text-white shadow-md shadow-purple-500/15"
                : "text-gray-400 hover:text-white"
            }`}
          >
            {activeTab === tab.id && (
              <motion.div
                layoutId="active-skill-tab"
                className="absolute inset-0 bg-[#7042f8]/80 rounded-xl -z-10 border border-[#7042f8]"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            {tab.label}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <div className="w-full min-h-[300px]">
        <motion.div
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {getSkillsData().map((skill, index) => (
              <motion.div
                key={skill.skill_name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Card3DTilt intensity={14} rounded="rounded-2xl" className="h-full">
                  <div className="h-full border border-white/5 bg-black/30 hover:bg-black/50 backdrop-blur-sm p-6 rounded-2xl flex flex-col items-center justify-center gap-4 text-center group hover:border-[#7042f8]/40 hover:shadow-[0_0_15px_rgba(112,66,248,0.15)] transition-colors duration-300">
                    <div className="relative w-16 h-16 flex items-center justify-center bg-white/5 border border-white/10 rounded-2xl p-3 group-hover:scale-110 group-hover:border-[#7042f8]/30 transition duration-300">
                      <Image
                        src={skill.Image}
                        alt={skill.skill_name}
                        width={skill.width}
                        height={skill.height}
                        className="object-contain max-h-full max-w-full"
                      />
                    </div>
                    <span className="text-gray-300 font-medium text-[15px] group-hover:text-white transition duration-200">
                      {skill.skill_name}
                    </span>
                  </div>
                </Card3DTilt>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
