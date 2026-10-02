import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-slate-900 border border-cyan-400 rounded-2xl overflow-hidden hover:scale-105 duration-300">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="text-cyan-400 mt-2">
          {project.tech}
        </p>

        <p className="text-gray-300 mt-4 leading-7">
          {project.desc}
        </p>

        <div className="flex gap-4 mt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="bg-cyan-400 text-black px-5 py-2 rounded-full font-semibold hover:bg-cyan-300"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-full hover:bg-cyan-400 hover:text-black"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;