import React from "react";
import Tilt from "react-parallax-tilt";
import { SkillsInfo } from "../../constants"; // ✅ Imported the correct constant

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[7vw] lg:px-[15vw] font-sans bg-[#f9fafb] dark:bg-[#0f0f0f]"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#111827] dark:text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2 rounded-full"></div>
      <p className="text-[#6b7280] dark:text-gray-400 mt-4 text-lg font-medium">
        Tools and technologies I use to build full-stack applications.
      </p>
    </div>

    {/* Skills Cards */}
    <div className="flex flex-wrap gap-8 justify-between">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          scale={1.02}
          transitionSpeed={1000}
          gyroscope={true}
          className="w-full sm:w-[48%] bg-[#f3f4f6] dark:bg-[#181818] p-6 rounded-2xl border border-gray-300 dark:border-gray-700 shadow-md hover:shadow-xl transition duration-300"
        >
          <h3 className="text-2xl font-semibold text-[#111827] dark:text-white mb-4 text-center uppercase tracking-wide">
            {category.title}
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {category.skills.map((skill) => (
              <div
                key={skill.name}
                className="flex items-center justify-center space-x-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#0e0e0e] rounded-xl px-3 py-2 hover:scale-105 hover:border-[#8245ec] transition duration-200"
              >
                <img
                  src={skill.logo}
                  alt={`${skill.name} logo`}
                  className="w-6 h-6 sm:w-7 sm:h-7"
                />
                <span className="text-sm text-[#1f2937] dark:text-gray-100 font-medium">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
