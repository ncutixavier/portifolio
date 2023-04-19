import React from "react";
import { data } from "../services/data";

const Projects = () => {
  return (
    <div>
      <div className="text-gray-100 bg-gray-900 sm:px-10 xs:px-5 py-10 z-20">
        <div class="grid md:grid-cols-2 gap-10">
          <div class="gap-10 flex-col flex">
            {data.projects.map(
              (item, i) =>
                (i + 1) % 2 !== 0 && (
                  <a
                    href={item.link}
                    target="_blank"
                    class="h-auto hover:scale-105 scale-100 sc ease-in-out duration-500"
                    key={i}
                    rel="noreferrer"
                  >
                    {i === 0 && (
                      <>
                        <div class="uppercase font-semibold text-gray-400">
                          My projects
                        </div>
                        <div class="w-[80%] xs:w-full text-4xl xs:text-3xl font-semibold py-5 mb-5">
                          Work that I’ve done for the past{" "}
                          {new Date().getFullYear() - 2019} years.
                        </div>
                      </>
                    )}
                    <div class="w-[100%] h-[400px] bg-gray-950 p-8">
                      <img
                        src={item.image}
                        alt="project"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div class="bg-gray-950 px-8 py-10">
                      <div class="text-2xl hover:text-green-600">
                        {item.title}
                      </div>
                      <div class="text-gray-400 mt-3">{item.description}</div>
                      <div class="mt-4 text-gray-400">
                        Skills:{" "}
                        <span className="text-gray-100">{item.skills}</span>
                      </div>
                    </div>
                  </a>
                )
            )}
          </div>
          <div class="gap-10 flex-col flex">
            {data.projects.map(
              (item, i) =>
                (i + 1) % 2 === 0 && (
                  <a
                    target="_blank"
                    href={item.link}
                    class="h-auto bg-gray-950 hover:scale-105 scale-100 sc ease-in-out duration-500"
                    key={i} rel="noreferrer"
                  >
                    <div class="w-[100%] h-[400px p-8">
                      <img
                        src={item.image}
                        alt="project"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div class="px-8 py-10">
                      <div class="text-2xl hover:text-green-600">
                        {item.title}
                      </div>
                      <div class="text-gray-400 mt-3">{item.description}</div>
                      <div class="mt-4 text-gray-400">
                        Skills:{" "}
                        <span className="text-gray-100">{item.skills}</span>
                      </div>
                    </div>
                  </a>
                )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
