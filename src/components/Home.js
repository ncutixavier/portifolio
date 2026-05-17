import React from "react";
import profile from "../assets/profile.png";

const Home = () => {
  const scroll = (id) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }
  };

  return (
    <div>
      <div id="home" className="h-[calc(100vh-64px)] bg-gray-90 flex xs:flex-col xs:h-auto">
        <div className="w-1/2 h-full xs:w-full bg-gray-800 hover:bg-gray-400">
          <img
            src={profile}
            alt="Xavier Ncuti - Full Stack Developer"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 xs:w-full flex-col flex justify-center xs:items-center xs:px-4 px-10 xs:pb-8">
          <div className="xs:mt-8 text-5xl font-chivo-mono xs:text-2xl text-gray-200 xs:text-center">
            Xavier Ncuti,
          </div>
          <div className="xs:mt-8 mt-6 xs:text-2xl text-4xl font-chivo-mono text-gray-400 xs:text-center">
            Full Stack Developer & Co-Founder at HOVA AI
          </div>
          <div className="xs:mt-8 mt-6 xs:text-[16px] text-xl text-gray-400 leading-9 xs:text-center">
            A passionate software developer crafting innovative solutions for users around the world. 🌍✨
          </div>
          <div className="xs:mt-6 mt-8 flex xs:justify-center gap-4">
            <button
              onClick={() => scroll("#about")}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 text-sm font-semibold transition-colors duration-200"
            >
              About Me
            </button>
            <button
              onClick={() => scroll("#work")}
              className="border border-gray-500 hover:border-green-600 hover:text-green-600 text-gray-300 px-6 py-3 text-sm font-semibold transition-colors duration-200"
            >
              View Work
            </button>
          </div>
          <div className="xs:mt-8 mt-10 flex xs:justify-center gap-4">
            <a
              href="https://www.linkedin.com/in/xavier-ncuti-979284197/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin-in text-xl"></i>
            </a>
            <a
              href="https://github.com/ncutixavier"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-gray-100 transition-colors duration-200"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a
              href="https://twitter.com/ncutixavier"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              aria-label="Twitter"
            >
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a
              href="https://www.instagram.com/ncutixavier/"
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-purple-400 transition-colors duration-200"
              aria-label="Instagram"
            >
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
