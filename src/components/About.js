import React from "react";
import profile from "../assets/profile.png";

const CAREER_START_YEAR = 2019;

const About = () => {
  return (
    <div
      id="about"
      className="text-gray-100 bg-gray-900 sm:px-10 xs:px-5 py-16"
    >
      <div className="uppercase font-semibold text-gray-400">About Me</div>
      <div className="grid md:grid-cols-2 gap-12 mt-8">
        <div>
          <div className="text-4xl xs:text-3xl font-semibold mb-6">
            Get to know me
          </div>
          <p className="text-gray-400 leading-8 mb-4">
            Hi! I'm <span className="text-gray-100 font-semibold">Xavier Ncuti</span>, a passionate
            full-stack software developer based in{" "}
            <span className="text-green-600">Kigali, Rwanda</span>. I'm the
            Co-Founder and Software Developer at{" "}
            <a
              href="http://hova.ai"
              target="_blank"
              rel="noreferrer"
              className="text-green-600 hover:underline"
            >
              HOVA AI
            </a>
            , where I work on cutting-edge products that help businesses grow.
          </p>
          <p className="text-gray-400 leading-8 mb-4">
            With over {new Date().getFullYear() - CAREER_START_YEAR} years of experience in
            software development, I specialize in building scalable web and
            mobile applications using modern technologies like React, Vue JS,
            Flutter, and Node JS.
          </p>
          <p className="text-gray-400 leading-8 mb-6">
            I enjoy collaborating with teams to solve complex problems and
            deliver high-quality products that make a difference. I'm currently
            open to freelance opportunities — let's build something great
            together!
          </p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-gray-500">Name: </span>
              <span className="text-gray-200">Xavier Ncuti</span>
            </div>
            <div>
              <span className="text-gray-500">Location: </span>
              <span className="text-gray-200">Kigali, Rwanda</span>
            </div>
            <div>
              <span className="text-gray-500">Email: </span>
              <a
                href="mailto:ncuti60@gmail.com"
                className="text-green-600 hover:underline"
              >
                ncuti60@gmail.com
              </a>
            </div>
            <div>
              <span className="text-gray-500">Availability: </span>
              <span className="text-green-600">Open to freelance</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-0 bg-green-600 opacity-10 rounded-sm transform translate-x-4 translate-y-4"></div>
            <img
              src={profile}
              alt="Xavier Ncuti"
              className="relative w-full object-cover rounded-sm shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
