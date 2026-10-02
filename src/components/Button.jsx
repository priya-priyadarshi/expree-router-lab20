import React from "react";

const Button = ({ text, onClick, className = "" }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-cyan-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-cyan-300 duration-300 ${className}`}
    >
      {text}
    </button>
  );
};

export default Button;