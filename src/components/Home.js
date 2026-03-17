import React from "react";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <div>
      <div id="home" className="h-[calc(100vh-64px)] bg-gray-90 flex xs:flex-col xs:h-auto">
        <div className="w-1/2 h-full xs:w-full bg-gray-800 hover:bg-gray-400">
          <img
            src={profile}
            alt="Xavier Ncuti - Full Stack Developer"
            className="w-full h-full object-cover animate-float"
          />
        </div>
        <div className="w-1/2 xs:w-full flex-col flex justify-center xs:items-center xs:px-4 px-10 xs:pb-8 animate-fade-up">
          <div className="xs:mt-8 text-5xl font-chivo-mono xs:text-2xl text-gray-200 xs:text-center">
            Xavier Ncuti,
          </div>
          <div className="xs:mt-8 mt-6 xs:text-2xl text-4xl font-chivo-mono text-gray-400 xs:text-center">
            A passionate software developer crafting innovative solutions for users around the world. 🌍✨.
          </div>
          <div className="xs:mt-8 mt-[60px] xs:text-[16px] text-xl text-gray-400 leading-9 xs:text-center">
            I'm currently open to freelance work! Whether you have a project you’d like to kick off, need my expertise on something, or just want to say hello, {" "}
            <a href="https://calendar.app.google/yzi33BthDGyyPPbr8" target="_blank" rel="noreferrer" className="text-blue-600">
              feel free to reach out. 🚀
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
