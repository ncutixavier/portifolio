import React from "react";
import profile from "../assets/profile.png";

const Home = () => {
  return (
    <div>
      <div className="h-[calc(100vh-64px)] bg-gray-90 flex xs:flex-col">
        <div className="w-1/2 h-full xs:w-full bg-gray-800 hover:bg-gray-400">
          <img
            src={profile}
            alt=""
            srcset=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-1/2 xs:w-full flex-col flex justify-center xs:px-5 px-10 text-white">
          <div className="xs:mt-3 text-5xl font-chivo-mono xs:text-2xl">
            I'm Xavier Ncuti.
          </div>
          <div className="xs:mt-3 mt-6 xs:text-2xl text-5xl font-chivo-mono">
            A software Developer
          </div>
          <div className="xs:mt-3 mt-6 text-5xl xs:text-2xl font-chivo-mono text-gray-500">
            Based in Rwanda.
          </div>
          <div className="xs:mt-8 mt-[60px] xs:text-[16px] text-xl text-gray-400 leading-9">
            I'm currently available for freelancer work. If you have a project
            that you want to get started, think you need my help with something
            or just fancy saying hey, then{" "}
            <a href="mailto:ncuti60@gmail.com" className="text-blue-600">
              get in touch
            </a>
            .
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
