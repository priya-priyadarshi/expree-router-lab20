import React from "react";

const ExpCard = ({ data }) => {
  const { startYear, endYear, title, description } = data;

  return (
    <div className="bg-slate-900 border border-cyan-400 rounded-2xl p-6 hover:scale-105 duration-300">
      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
        {startYear} {endYear ? `- ${endYear}` : "- Present"}
      </span>

      <h3 className="text-2xl font-bold mt-5">{title}</h3>

      <p className="text-gray-300 mt-4 leading-7">
        {description}
      </p>
    </div>
  );
};

export default ExpCard;