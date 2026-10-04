import React from "react";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Experience from "./Experience";
import profile from "../assets/priya.jpg";
import Projects from "./Projects";
import Achievements from "./Achievements";
import Contact from "./Contact";
import Footer from "../components/footer.jsx";
import Skills from "./skills.jsx";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Services from "./services";
import Stats from "./stats";
const Home = () => {
  return (
    <>
      <Navbar />

      <section
        id="home"
        className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-8"
      >
        <p className="text-gray-400 mt-6 leading-8 max-w-xl">
Frontend Developer passionate about creating modern, responsive and user-friendly web applications using React JS, JavaScript and Tailwind CSS. Currently expanding my knowledge in Java, AWS Cloud, ServiceNow and Software Testing.
</p>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <div>

            <p className="text-cyan-400 text-xl">
              Hello, I'm
            </p>

            <h1 className="text-6xl font-extrabold mt-4">
              Priya <br />
              <span className="text-cyan-400">
                Priyadarshi
              </span>
            </h1>

            <TypeAnimation
  sequence={[
    "Frontend Developer",
    2000,
    "React JS Developer",
    2000,
    "Java Developer",
    2000,
    "ServiceNow Learner",
    2000,
  ]}
  wrapper="h2"
  speed={50}
  repeat={Infinity}
  className="text-3xl mt-6 font-semibold text-cyan-400"
/>

            <p className="text-gray-400 mt-6 leading-8 max-w-xl">
              Passionate B.Tech Computer Science student focused on
              Frontend Development using React JS, JavaScript,
              Tailwind CSS and Java. I love building modern,
              responsive and user-friendly web applications.
            </p>

            <div className="flex gap-4 mt-10">

              <a
  href="/resume.pdf"
  download
>
  <div className="flex flex-wrap gap-4 mt-10">
  <a href="/resume.pdf" download>
    <Button text="Download Resume" />
  </a>

  <a href="#contact">
    <Button text="Hire Me" />
  </a>
</div>
</a>
<div className="flex gap-6 mt-8 text-3xl">
  <a
    href="https://github.com/priya-priyadarshi"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/priya-priyadarshi-095822249"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:Priyapriyadarshi193@gmail.com"
    className="hover:text-cyan-400 duration-300"
  >
    <FaEnvelope />
  </a>
</div>

            </div>

          </div>

          {/* Right */}

          <div className="flex justify-center">

            <img
              src={profile}
              alt="Profile"
              className="w-80 h-80 rounded-full border-4 border-cyan-400 object-cover"
            />
            <a href="/resume.pdf" download>
  <Button text="Download Resume" />
</a>
      <div className="flex gap-6 mt-8 text-3xl">
  <a
    href="https://github.com/priya-priyadarshi"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 duration-300"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/priya-priyadarshi-095822249"
    target="_blank"
    rel="noreferrer"
    className="hover:text-cyan-400 duration-300"
  >
    <FaLinkedin />
  </a>

  <a
    href="mailto:priyapriyadarshi193@gmail.com"
    className="hover:text-cyan-400 duration-300"
  >
    <FaEnvelope />
  </a>
</div>
          </div>

        </div>
      </section>

     <About />
<Stats />
<Services />
<Experience />
<Projects />
<Skills />
<Achievements />
<Contact />
<Footer />



    
    </>
  );
};

export default Home;