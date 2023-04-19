import React from "react";
import { data } from "../services/data";

const Experience = () => {
  return (
    <div className="text-gray-100 bg-gray-950 sm:px-10 xs:px-5 pt-10">
      <div class="uppercase font-semibold text-gray-400">Work Experience</div>
      <div class="w-[40%] xs:w-full text-4xl xs:text-3xl font-semibold py-5">
        Companies I have worked for in the past.
      </div>
      <div class="py-10">
        <div class="xs:w-full grid sm:grid-cols-2 md:grid-cols-3 gap-6">
          {data.experience.map((item, i) => (
            <div class="xs:w-full mb-5" key={i}>
              <div class="text-6xl text-gray-300">
                {i + 1 < 9 ? `0${i + 1}` : `${i + 1}`}
              </div>
              <div class="mt-4">
                <a
                  href={item.web}
                  target="_blank"
                  className="text-green-600 font-chivo-mono"
                  rel="noreferrer"
                >
                  {item.company}
                </a>
                , {item.title}
              </div>
              <div class="mt-4 text-gray-400">{item.description}</div>
              <div class="mt-4 text-gray-400">
                Skills: <span className="text-gray-100">{item.skills}</span>
              </div>
            </div>
          ))}
        </div>
        <div class="w-1/2 xs:w-full"></div>
      </div>
    </div>
  );
};

export default Experience;
