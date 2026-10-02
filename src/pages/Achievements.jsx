import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20 px-8"
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-5xl font-bold">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-gray-400 mt-4">
          Feel free to connect with me.
        </p>

        <div className="mt-12 space-y-6 text-lg">

          <p className="flex justify-center items-center gap-3">
            <FaEnvelope className="text-cyan-400" />
            priyapriyadarshi193@gmail.com
          </p>

          <p className="flex justify-center items-center gap-3">
            <FaPhone className="text-cyan-400" />
            +91 8797266121
          </p>

          <p className="flex justify-center items-center gap-3">
            <FaLinkedin className="text-cyan-400" />
            linkedin.com/in/priya-priyadarshi-095822249
          </p>

          <p className="flex justify-center items-center gap-3">
            <FaGithub className="text-cyan-400" />
            github.com/priya-priyadarshi
          </p>

        </div>

      </div>
    </section>
  );
};

export default Contact;