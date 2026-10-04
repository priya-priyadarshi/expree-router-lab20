import React from "react";

import portfolio from "../assets/projects/portfolio.png";
import eduplay from "../assets/projects/eduplay.png";
import diabetes from "../assets/projects/diabetes.png";
import resumebuilder from "../assets/projects/resumebuilder.png";
import hospital from "../assets/projects/hospital.png";
className="bg-slate-900 rounded-2xl overflow-hidden border border-cyan-400 hover:-translate-y-3 hover:shadow-[0_0_25px_#22d3ee] transition-all duration-500"
className="hover:text-cyan-400 hover:underline underline-offset-8 transition-all duration-300"

const projectData = [
  {
    title: "Portfolio Website",
    image: portfolio,
    tech: "React JS • Tailwind CSS • JavaScript",
    desc: "Designed and developed a responsive personal portfolio website.",
    github: "https://github.com/priya-priyadarshi",
    live: "#",
  },
  {
    title: "EduPlay",
    image: eduplay,
    tech: "React JS • HTML • CSS • JavaScript",
    desc: "Gamified learning platform for higher education.",
    github: "https://github.com/priya-priyadarshi",
    live: "#",
  },
  {
    title: "Diabetes Prediction",
    image: diabetes,
    tech: "Python • Machine Learning",
    desc: "Machine learning model for diabetes prediction.",
    github: "https://github.com/priya-priyadarshi",
    live: "#",
  },
  {
    title: "Resume Builder",
    image: resumebuilder,
    tech: "HTML • CSS • JavaScript",
    desc: "Professional resume builder web application.",
    github: "https://github.com/priya-priyadarshi",
    live: "#",
  },
  {
    title: "Hospital Complaint System",
    image: hospital,
    tech: "HTML • CSS • JavaScript",
    desc: "Complaint management system for hospitals.",
    github: "https://github.com/priya-priyadarshi",
    live: "#",
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
    className="w-80 h-80 rounded-full object-cover border-4 border-cyan-400 shadow-[0_0_35px_#22d3ee] hover:scale-105 duration-500"
    >
      <h2 className="text-5xl font-bold text-center">
        My <span className="text-cyan-400">Projects</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
        {projectData.map((project, index) => (
          <div
            key={index}
            className="bg-slate-900 rounded-2xl overflow-hidden border border-cyan-400 hover:scale-105 duration-300"
          >
            <img
  src="https://picsum.photos/400/250"
  alt="Test"
  className="w-full h-60 object-cover"
/>

            <div className="p-6">
              <h3 className="text-2xl font-bold">{project.title}</h3>

              <p className="text-cyan-400 mt-2">{project.tech}</p>

              <p className="text-gray-300 mt-4">
                {project.desc}
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-cyan-400 text-black px-5 py-2 rounded-full"
                >
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="border border-cyan-400 px-5 py-2 rounded-full"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;