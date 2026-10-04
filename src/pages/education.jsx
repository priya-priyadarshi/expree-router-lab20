import React from "react";
import Education from "./pages/Education";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-950 text-white py-24 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          My <span className="text-cyan-400">Education</span>
        </h2>

        <div className="mt-16 bg-slate-900 rounded-2xl p-8 border border-cyan-400 shadow-lg">

          <h3 className="text-3xl font-bold">
            B.Tech Computer Science Engineering
          </h3>

          <p className="text-cyan-400 mt-2">
            Prestige Institute of Management and Research, Bhopal
          </p>

          <p className="text-gray-400 mt-3">
            2023 - Present
          </p>

          <p className="mt-6 leading-8 text-gray-300">
            Currently pursuing Bachelor of Technology in Computer Science Engineering.
            Focused on Frontend Development, React JS, Java, SQL,
            Software Engineering and Problem Solving.
          </p>

        </div>

      </div>
    </section>
  );
};

export default Education;