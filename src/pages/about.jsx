import React from "react";
import About from "./about";

const About = () => {
  return (
    <section
      id="about"
      className="bg-slate-900 text-white py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          About <span className="text-cyan-400">Me</span>
        </h2>

        <p className="mt-10 text-lg text-gray-300 leading-9 text-center max-w-4xl mx-auto">
          I'm <span className="text-cyan-400 font-semibold">Priya Priyadarshi</span>,
          a passionate B.Tech Computer Science student with a strong interest in
          Frontend Development, React JS, Java and modern web technologies.

          I enjoy building responsive, user-friendly web applications and continuously
          improving my technical skills through real-world projects, certifications,
          and hands-on learning.
        </p>

      </div>
    </section>
  );
};

export default About;