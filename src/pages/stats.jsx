import React from "react";

const stats = [
  {
    number: "5+",
    title: "Projects Completed",
  },
  {
    number: "6+",
    title: "Certifications",
  },
  {
    number: "2026",
    title: "B.Tech Graduate",
  },
  {
    number: "Frontend",
    title: "React Developer",
  },
];

const Stats = () => {
  return (
    <section
      id="stats"
      className="bg-slate-950 text-white py-20 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <div className="grid md:grid-cols-4 gap-8">

          {stats.map((item, index) => (

            <div
              key={index}
              className="bg-slate-900 rounded-2xl border border-cyan-400 p-8 text-center hover:scale-105 duration-300"
            >

              <h2 className="text-5xl font-bold text-cyan-400">
                {item.number}
              </h2>

              <p className="mt-4 text-lg">
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Stats;