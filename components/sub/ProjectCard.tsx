import Image from "next/image";
import React from "react";
import { RxGithubLogo } from "react-icons/rx";
import Card3DTilt from "./Card3DTilt";

interface Props {
  src: string;
  title: string;
  description: string;
  technologies: string[];
  github: string;
}

const ProjectCard = ({ src, title, description, technologies, github }: Props) => {
  return (
    <Card3DTilt intensity={7} rounded="rounded-2xl" className="h-full">
    <div className="group relative overflow-hidden rounded-2xl shadow-lg border border-[#2A0E61] bg-[#030014]/40 backdrop-blur-sm transition-colors duration-300 hover:shadow-[0_0_20px_#7042f844] hover:border-[#7042f888] flex flex-col h-full">
      <div className="relative overflow-hidden aspect-video w-full bg-[#1c1836]/20">
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-[#030014]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-[#030014]/80 border border-[#7042f88b] rounded-full text-white hover:bg-[#7042f8] transition duration-200"
          >
            <RxGithubLogo className="w-8 h-8" />
          </a>
        </div>
      </div>

      <div className="relative p-6 flex flex-col justify-between flex-grow gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-bold text-white group-hover:text-[#b49bff] transition duration-200">
            {title}
          </h3>
          <p className="text-gray-400 text-[14px] leading-relaxed line-clamp-4">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-2 border-t border-[#7042f81d]">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-[11px] text-[#b49bff] bg-[#7042f815] border border-[#7042f83a] px-2 py-0.5 rounded-md font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
    </Card3DTilt>
  );
};

export default ProjectCard;

