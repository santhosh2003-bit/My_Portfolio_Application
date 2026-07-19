"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";
import { ShieldCheckIcon, KeyIcon, LockClosedIcon, CommandLineIcon } from "@heroicons/react/24/outline";

const SecurityPrinciple = ({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) => {
  return (
    <div className="border border-white/5 bg-black/40 backdrop-blur-md p-6 rounded-2xl flex flex-col gap-3 hover:border-cyan-500/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.1)] transition duration-300">
      <div className="flex items-center gap-3">
        <div className="p-2 bg-cyan-950/50 border border-cyan-500/20 text-cyan-400 rounded-xl">
          {icon}
        </div>
        <h4 className="text-white font-bold text-[16px]">{title}</h4>
      </div>
      <p className="text-gray-400 text-[13px] leading-relaxed">{desc}</p>
    </div>
  );
};

const Encryption = () => {
  return (
    <div className="flex flex-col relative items-center justify-center w-full max-w-[1200px] m-auto py-20 px-6 z-[30]">
      
      {/* Title block */}
      <div className="text-center flex flex-col items-center gap-4 mb-16">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Security & Secure Coding
        </motion.div>
        <p className="text-gray-400 text-[16px] max-w-[500px]">
          Combining full-stack software development with a strong academic foundation in Cyber Security to build resilient, hardened applications.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center w-full">
        
        {/* Left: Security Cards */}
        <div className="flex flex-col gap-6">
          <SecurityPrinciple
            icon={<KeyIcon className="w-5 h-5" />}
            title="Cryptography & Hashing"
            desc="Implementation of industry-standard encryption algorithms (AES-256) and secure password hashing (bcrypt, Argon2) for data-at-rest and transport."
          />
          <SecurityPrinciple
            icon={<ShieldCheckIcon className="w-5 h-5" />}
            title="OWASP Mitigations"
            desc="Active defense design against common vulnerabilities: XSS prevention, CSRF protection, rate limiting, and secure header configuration."
          />
        </div>

        {/* Center: Interactive Locking visual */}
        <div className="flex flex-col items-center justify-center z-[20]">
          <div className="flex flex-col items-center group cursor-pointer relative">
            <Image
              src="/LockTop.png"
              alt="Lock top"
              width={50}
              height={50}
              className="translate-y-5 transition-all duration-300 group-hover:translate-y-9"
            />
            <Image
              src="/LockMain.png"
              alt="Lock Main"
              width={70}
              height={70}
              className="z-10"
            />
          </div>
          <div className="bg-cyan-950/20 border border-cyan-500/20 rounded-full px-5 py-1.5 mt-6 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.15)]">
            <span className="text-[12px] text-cyan-300 font-mono tracking-wider font-semibold uppercase">Secure Architecture</span>
          </div>
        </div>

        {/* Right: Security Cards */}
        <div className="flex flex-col gap-6">
          <SecurityPrinciple
            icon={<LockClosedIcon className="w-5 h-5" />}
            title="RBAC & Secure Auth"
            desc="Designing secure token-based authentication workflows (JWT, OAuth2) with role-based access control to enforce strict authorization."
          />
          <SecurityPrinciple
            icon={<CommandLineIcon className="w-5 h-5" />}
            title="SQL Injection Defense"
            desc="Always using ORMs (Prisma, Hibernate) or parameterized queries to prevent SQL Injection and secure SQL Server/PostgreSQL communications."
          />
        </div>

      </div>

      {/* Decorative ambient background video */}
      <div className="w-full h-full flex items-start justify-center absolute z-[-10] pointer-events-none opacity-20">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-[600px] object-cover absolute"
          src="/encryption.webm"
        ></video>
      </div>

    </div>
  );
};

export default Encryption;
