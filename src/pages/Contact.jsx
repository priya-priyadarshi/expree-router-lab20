import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-slate-950 text-white py-20 px-8"
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-5xl font-bold text-center">
          Contact <span className="text-cyan-400">Me</span>
        </h2>

        <p className="text-center text-gray-400 mt-4">
          Feel free to connect with me for internships, jobs and collaborations.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Left */}

          <div className="space-y-8">

            <div className="flex items-center gap-5">
              <FaEnvelope className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-bold">Email</h3>
                <p>priyapriyadarshi193@gmail.com</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaPhone className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-bold">Phone</h3>
                <p>+91 8797266121</p>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <FaMapMarkerAlt className="text-cyan-400 text-2xl" />
              <div>
                <h3 className="font-bold">Location</h3>
                <p>Bhopal, India</p>
              </div>
            </div>

            <div className="flex gap-6 pt-4">

              <a
                href="https://github.com/priya-priyadarshi"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/priya-priyadarshi-095822249"
                target="_blank"
                rel="noreferrer"
                className="text-3xl hover:text-cyan-400"
              >
                <FaLinkedin />
              </a>

            </div>

          </div>

          {/* Right */}

          <form className="bg-slate-900 p-8 rounded-2xl">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-4 rounded-lg bg-slate-800 mb-5 outline-none"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-4 rounded-lg bg-slate-800 mb-5 outline-none"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-4 rounded-lg bg-slate-800 mb-5 outline-none"
            ></textarea>

            <button
              className="bg-cyan-400 text-black px-8 py-3 rounded-full font-semibold hover:bg-cyan-300"
            >
              Send Message
            </button>

          </form>

        </div>

      </div>
    </section>
  );
};

export default Contact;