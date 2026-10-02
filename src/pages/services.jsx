import React from "react";

const services = [
  {
    title: "Frontend Development",
    desc: "Building responsive and modern websites using React JS, HTML, CSS and Tailwind CSS.",
    icon: "💻",
  },
  {
    title: "UI Development",
    desc: "Creating attractive and user-friendly interfaces with clean layouts and responsive design.",
    icon: "🎨",
  },
  {
    title: "Java Development",
    desc: "Developing Java applications using Object-Oriented Programming concepts.",
    icon: "☕",
  },
  {
    title: "Software Testing",
    desc: "Knowledge of SDLC, STLC, Manual Testing and Software Quality Assurance.",
    icon: "🧪",
  },
  {
    title: "AWS Cloud",
    desc: "Basic cloud computing concepts and AWS services with Machine Learning fundamentals.",
    icon: "☁️",
  },
  {
    title: "ServiceNow",
    desc: "Learning ServiceNow platform, workflows and enterprise solutions.",
    icon: "⚙️",
  },
];

const Services = () => {
  return (
    <section id="services" className="bg-slate-900 text-white py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold text-center">
          My <span className="text-cyan-400">Services</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {services.map((item, index) => (
            <div
              key={index}
              className="bg-slate-800 p-8 rounded-2xl border border-cyan-400 hover:-translate-y-2 transition duration-300"
            >
              <div className="text-5xl">{item.icon}</div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-4 leading-7">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;