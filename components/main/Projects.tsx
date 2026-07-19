import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { ProjectsData } from "@/constants";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20 px-4 md:px-10 max-w-[1200px] m-auto w-full z-[30] relative"
      id="projects"
    >
      <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-16 text-center">
        Key Projects
      </h2>
      <div className="h-full w-full grid grid-cols-1 md:grid-cols-3 gap-8 px-2 md:px-6">
        {ProjectsData.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
          />
        ))}
      </div>
      <div className="text-white text-center w-full mt-16">
        <a
          href="https://github.com/santhosh2003-bit"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block border border-white hover:bg-white hover:text-black hover:border-black px-6 py-3 rounded-lg font-medium transition duration-300"
        >
          Explore More on GitHub
        </a>
      </div>
    </div>
  );
};

export default Projects;

