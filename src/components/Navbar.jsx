import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-900 text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
        <h1 className="text-2xl font-bold text-cyan-400">
          Priya Portfolio_2
        </h1>

        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <a href="#home" className="hover:text-cyan-400">
              Home
            </a>
          </li>

          <li>
            <a href="#experience" className="hover:text-cyan-400">
              Experience
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-cyan-400">
              Projects
            </a>
          </li>

          <li>
            <a href="#achievements" className="hover:text-cyan-400">
              Achievements
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-cyan-400">
              Contact
            </a>
          </li>
        </ul>
        <li>
  <a href="#about" className="hover:text-cyan-400">
    About
  </a>
</li>

<li>
  <a href="#skills" className="hover:text-cyan-400">
    Skills
  </a>
</li>
 <li>
  <a href="#services" className="hover:text-cyan-400">
    Services
  </a>
</li>
      </div>
    </nav>
  );
};

export default Navbar;