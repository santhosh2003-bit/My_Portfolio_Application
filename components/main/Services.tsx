"use client";
import React from "react";
import { motion } from "framer-motion";
import { Services as ServicesData } from "@/constants";
import Card3DTilt from "../sub/Card3DTilt";
import {
  CodeBracketIcon,
  ShieldCheckIcon,
  SparklesIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const iconMap: Record<string, React.ElementType> = {
  code: CodeBracketIcon,
  shield: ShieldCheckIcon,
  sparkles: SparklesIcon,
  bolt: BoltIcon,
};

const Services = () => {
  return (
    <section
      id="services"
      className="flex flex-col items-center justify-center py-20 px-6 md:px-20 max-w-[1200px] m-auto w-full z-[30] relative"
    >
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="text-center flex flex-col items-center gap-4 mb-16">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          What I Do
        </h2>
        <p className="text-gray-400 text-[16px] max-w-[520px]">
          The core areas where I deliver value — from full-stack builds to secure,
          performant systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {ServicesData.map((service, index) => {
          const Icon = iconMap[service.icon] ?? CodeBracketIcon;
          return (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card3DTilt intensity={8} className="h-full">
                <div className="group h-full border border-white/10 bg-black/40 backdrop-blur-md rounded-3xl p-8 flex flex-col gap-4 hover:border-[#7042f8]/40 hover:shadow-[0_0_25px_rgba(112,66,248,0.15)] transition-colors duration-300 shadow-lg">
                  <div className="w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-[#7042f8]/25 to-cyan-500/15 border border-white/10 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#b49bff]" />
                  </div>
                  <h3 className="text-white text-xl font-bold">{service.title}</h3>
                  <p className="text-gray-400 text-[14.5px] leading-relaxed flex-grow">
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[11px] text-[#b49bff] bg-[#7042f815] border border-[#7042f83a] px-2.5 py-1 rounded-lg font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Card3DTilt>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Services;
