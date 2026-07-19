"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ExperienceData, EducationData } from "@/constants";
import { AcademicCapIcon, CodeBracketIcon, SparklesIcon } from "@heroicons/react/24/outline";
import Card3DTilt from "../sub/Card3DTilt";

const BentoHeader = () => {
  return (
    <div className="w-full max-w-[1200px] m-auto px-6 mt-16 z-[30] relative">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-min">

        {/* Card 1: Professional Summary (2x1 span on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="md:col-span-2"
        >
          <Card3DTilt intensity={6} className="h-full">
            <div className="h-full border border-white/10 bg-black/40 backdrop-blur-md p-8 rounded-3xl shadow-lg flex flex-col justify-between gap-6 hover:border-[#7042f8]/40 transition-colors duration-300 group">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold uppercase tracking-wider">
                  <SparklesIcon className="w-5 h-5" />
                  <span>Professional Summary</span>
                </div>
                <h3 className="text-white text-3xl font-extrabold leading-tight">
                  Building Scalable, Secure, and High-Performance Web Systems
                </h3>
                <p className="text-gray-400 text-base leading-relaxed mt-2">
                  Software Engineer with 2+ years of experience designing and developing enterprise web applications. Highly proficient in Java, TypeScript, Next.js, and SQL, with a deep understanding of core computer science topics including Data Structures, Algorithms, OOP, and secure software development lifecycles.
                </p>
              </div>
              <div className="flex gap-3 text-xs text-gray-500 font-mono mt-2">
                <span>#SoftwareEngineer</span>
                <span>#FullStack</span>
                <span>#SecureCoding</span>
              </div>
            </div>
          </Card3DTilt>
        </motion.div>

        {/* Card 2: Cyber Security Highlight (1x2 tall span on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:row-span-2"
        >
          <Card3DTilt intensity={6} className="h-full">
            <div className="h-full border border-white/10 bg-black/40 backdrop-blur-md p-6 rounded-3xl shadow-lg flex flex-col justify-between overflow-hidden hover:border-cyan-500/40 transition-colors duration-300 relative group min-h-[350px]">
              <div className="absolute inset-0 z-0 opacity-25 group-hover:scale-105 transition-transform duration-500">
                <Image
                  src="/cyber_security_branding.png"
                  alt="Cyber Security Branding"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                  <AcademicCapIcon className="w-5 h-5" />
                  <span>Cyber Security</span>
                </div>
                <h3 className="text-white text-2xl font-bold mt-2">
                  B.Tech in Cyber Security
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Earned at Narasimha Reddy Engineering College. Specializing in security audits, cryptographic algorithms, secure authorization protocols, and secure backend code design.
                </p>
              </div>

              <div className="relative z-10 bg-cyan-950/40 border border-cyan-500/30 backdrop-blur-md rounded-2xl p-4 mt-6">
                <div className="text-[13px] text-cyan-300 font-semibold uppercase tracking-wider">Academic Grade</div>
                <div className="text-3xl font-extrabold text-white mt-1">
                  {EducationData.cgpa} <span className="text-gray-500 text-base font-normal">/ 10.0 CGPA</span>
                </div>
              </div>
            </div>
          </Card3DTilt>
        </motion.div>

        {/* Card 3: Experience Snapshot (1x2 tall span on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:row-span-2"
        >
          <Card3DTilt intensity={6} className="h-full">
            <div className="h-full border border-white/10 bg-black/40 backdrop-blur-md p-6 rounded-3xl shadow-lg flex flex-col justify-between hover:border-purple-500/40 transition-colors duration-300 group min-h-[350px]">
              <div className="flex flex-col gap-4">
                <div className="text-purple-400 text-sm font-semibold uppercase tracking-wider">
                  Experience Snapshot
                </div>
                <h3 className="text-white text-2xl font-bold">
                  2+ Years in Industry
                </h3>
                <div className="flex flex-col gap-5 mt-4">
                  {ExperienceData.map((exp) => (
                    <div key={exp.company} className="border-l border-white/10 pl-4">
                      <div className="text-xs text-gray-500 font-mono">{exp.period}</div>
                      <div className="text-white font-bold text-sm mt-0.5">{exp.role}</div>
                      <div className="text-gray-400 text-xs mt-0.5">{exp.company}</div>
                    </div>
                  ))}
                </div>
              </div>
              <a
                href="#experience"
                className="text-purple-300 text-[13px] font-semibold flex items-center gap-1 mt-6 group-hover:text-purple-200"
              >
                Explore Full Timeline &rarr;
              </a>
            </div>
          </Card3DTilt>
        </motion.div>

        {/* Card 4: DSA Achievements (1x1 span on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card3DTilt intensity={9} className="h-full">
            <div className="h-full border border-white/10 bg-black/40 backdrop-blur-md p-6 rounded-3xl shadow-lg flex flex-col justify-between hover:border-[#7042f8]/40 transition-colors duration-300 group">
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2 text-purple-400 text-sm font-semibold uppercase tracking-wider">
                  <CodeBracketIcon className="w-5 h-5" />
                  <span>DSA & Logic</span>
                </div>
                <h3 className="text-white text-3xl font-extrabold mt-2">
                  300+ Solved
                </h3>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Solved algorithm & data structures problems on platforms (LeetCode, Hackerrank) focusing on Trees, Graphs, Dynamic Programming, and Search optimizations.
                </p>
              </div>
              <div className="text-purple-300 text-xs font-semibold mt-4">
                Strong foundation in algorithms
              </div>
            </div>
          </Card3DTilt>
        </motion.div>

        {/* Card 5: Core Stack Highlights (1x1 span on desktop) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Card3DTilt intensity={9} className="h-full">
            <div className="h-full border border-white/10 bg-black/40 backdrop-blur-md p-6 rounded-3xl shadow-lg flex flex-col justify-between hover:border-cyan-500/40 transition-colors duration-300 group">
              <div className="flex flex-col gap-3">
                <div className="text-cyan-400 text-sm font-semibold uppercase tracking-wider">
                  Core Tech Stack
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {["Next.js", "Java", "TypeScript", "Node.js", "PostgreSQL", "Docker", "SQL Server"].map((stack) => (
                    <span
                      key={stack}
                      className="text-xs text-gray-300 bg-white/5 border border-white/10 px-2.5 py-1 rounded-xl font-medium"
                    >
                      {stack}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href="#skills"
                className="text-cyan-300 text-[13px] font-semibold mt-6 flex items-center gap-1 group-hover:text-cyan-200"
              >
                Detailed Skill Board &rarr;
              </a>
            </div>
          </Card3DTilt>
        </motion.div>

      </div>
    </div>
  );
};

export default BentoHeader;
