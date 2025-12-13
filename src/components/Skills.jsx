import React from "react";
import { SkillsInfo } from "../constants.js"; // path adjust korba jodi lagay

export const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold mb-10 text-center">
          My <span className="text-blue-500">Skills</span>
        </h2>

        <div className="space-y-12">
          {SkillsInfo.map((category) => (
            <div key={category.title}>
              <h3 className="text-2xl font-semibold mb-6">
                {category.title}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-zinc-900 rounded-xl p-5 flex flex-col items-center 
                    hover:scale-105 transition-transform duration-300 shadow-md hover:shadow-blue-500/20"
                  >
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="w-14 h-14 object-contain mb-3"
                    />
                    <p className="text-sm font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};


