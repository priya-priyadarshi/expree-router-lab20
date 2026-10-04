import React from "react";
import Footer from "../components/footer.jsx";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-gray-400 py-6 border-t border-cyan-400">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-2xl font-bold text-cyan-400">
          Priya Portfolio
        </h2>

        <p className="mt-3">
          Built with ❤️ using React JS & Tailwind CSS
        </p>

        <p className="mt-2 text-sm">
          © 2026 Priya Priyadarshi. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
};

export default Footer;