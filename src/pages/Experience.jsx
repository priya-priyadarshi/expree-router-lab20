import React from "react";
import ExpCard from "../components/ExpCard";

const experienceData = [
  {
    startYear: "2023",
    endYear: "2024",
    title: "Frontend Developer",
    description:
      "Built responsive websites using HTML, CSS, JavaScript and Tailwind CSS.",
  },
  {
    startYear: "2025",
    endYear: "",
    title: "React JS Developer",
    description:
      "Developing modern web applications using React JS and reusable components.",
  },
  {
    startYear: "2026",
    endYear: "",
    title: "Java Developer",
    description:
      "Solved Java programming problems using OOP, Collections and JDBC.",
  },
  {
    startYear: "2026",
    endYear: "",
    title: "ServiceNow Trainee",
    description:
      "Currently learning ServiceNow with practical assignments and projects.",
  },
  {
    startYear: "2026",
    endYear: "",
    title: "AWS Cloud & Machine Learning",
    description:
      "Completed AWS Cloud certification with Machine Learning and Cloud Computing.",
  },
  {
    startYear: "2026",
    endYear: "",
    title: "Software Testing",
    description:
      "Completed NPTEL Software Testing certification and learned SDLC, STLC and Testing.",
  },
  {
    startYear: "2026",
    endYear: "",
    title: "Cisco Certification",
    description:
      "Completed Cisco certification and learned Networking fundamentals.",
  },
];

const Experience = () => {
  return (
    <section className="bg-slate-950 text-white py-20 px-8">
      <h2 className="text-5xl font-bold text-center">
        My <span className="text-cyan-400">Experience</span>
      </h2>

      <p className="text-center text-gray-400 mt-3">
        My Learning Journey & Technical Experience
      </p>

      <div className="grid md:grid-cols-2 gap-8 mt-12 max-w-6xl mx-auto">
        {experienceData.map((item, index) => (
          <ExpCard key={index} data={item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
