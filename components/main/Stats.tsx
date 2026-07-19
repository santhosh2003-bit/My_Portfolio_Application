"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Stats as StatsData } from "@/constants";
import Card3DTilt from "../sub/Card3DTilt";

const CountUp = ({
  target,
  suffix = "",
  decimals = 0,
  start,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  start: boolean;
}) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef<number>();

  useEffect(() => {
    if (!start) return;
    const duration = 1400;
    let startTime: number | null = null;

    const tick = (now: number) => {
      if (startTime === null) startTime = now;
      const progress = Math.min((now - startTime) / duration, 1);
      // easeOutExpo for a punchy finish
      const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
      setValue(target * eased);
      if (progress < 1) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [start, target]);

  return (
    <span>
      {value.toFixed(decimals)}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="w-full max-w-[1200px] m-auto px-6 z-[30] relative" ref={ref}>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {StatsData.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card3DTilt intensity={12} className="h-full">
              <div className="h-full border border-white/10 bg-black/40 backdrop-blur-md rounded-3xl p-6 md:p-8 flex flex-col items-center text-center gap-2 hover:border-[#7042f8]/40 transition-colors duration-300 shadow-lg">
                <div className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                  <CountUp
                    target={stat.value}
                    suffix={stat.suffix}
                    decimals={(stat as { decimals?: number }).decimals ?? 0}
                    start={inView}
                  />
                </div>
                <div className="text-gray-400 text-[13px] md:text-[14px] font-medium uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            </Card3DTilt>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
