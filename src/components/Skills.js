import React from "react";

const skills = [
  { category: "Frontend", items: ["React JS", "Vue JS", "Nuxt JS", "Tailwind CSS", "JavaScript", "HTML & CSS"] },
  { category: "Mobile", items: ["Flutter", "Dart"] },
  { category: "Backend", items: ["Node JS", "Express JS", "REST APIs", "SQLite", "PostgreSQL", "Firebase"] },
  { category: "Tools & Others", items: ["Git & GitHub", "Redux", "Vuex", "MUI", "Vuetify", "Agile / Scrum"] },
];

const Skills = () => {
  return (
    <div
      id="skills"
      className="text-gray-100 bg-gray-950 sm:px-10 xs:px-5 py-16"
    >
      <div className="uppercase font-semibold text-gray-400">Skills</div>
      <div className="w-[60%] xs:w-full text-4xl xs:text-3xl font-semibold py-5">
        Technologies I work with
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mt-4">
        {skills.map((group) => (
          <div key={group.category}>
            <div className="text-green-600 font-semibold font-chivo-mono mb-4 uppercase text-sm tracking-wider">
              {group.category}
            </div>
            <div className="flex flex-wrap gap-2">
              {group.items.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-800 text-gray-300 px-3 py-1 text-sm border border-gray-700 hover:border-green-600 hover:text-green-500 transition-colors duration-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
