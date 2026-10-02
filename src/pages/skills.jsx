import React from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React JS",
  "Tailwind CSS",
  "Java",
  "Python",
  "C",
  "SQL",
  "Git & GitHub",
  "AWS Cloud",
  "Machine Learning",
  "Software Testing",
  "ServiceNow",
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-slate-900 text-white py-20 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Technical <span className="text-cyan-400">Skills</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Technologies and tools I work with.
        </p>

        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mt-14">

          {skills.map((skill, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-xl p-6 border border-cyan-400 text-center hover:scale-105 duration-300"
            >

              <h3 className="text-xl font-semibold">
                {skill}
              </h3>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;