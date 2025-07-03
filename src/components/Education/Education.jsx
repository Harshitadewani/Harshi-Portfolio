import React from "react";
import { education } from "../../constants";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[7vw] lg:px-[15vw] font-sans relative bg-gradient-to-br from-[#fdfbff] via-[#e7e7fa] to-[#f9f9ff] dark:from-[#0f0f0f] dark:via-[#181818] dark:to-[#111111]"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-[#111827] dark:text-white tracking-wider">
          EDUCATION
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-[#6b7280] dark:text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A timeline of my academic journey and learning experiences.
        </p>
      </div>

      {/* Timeline Line */}
      <div className="relative">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#d1d5db] dark:bg-gray-600 z-0 rounded"></div>

        {education.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className={`relative z-10 mb-16 flex flex-col sm:flex-row items-center ${
              index % 2 === 0 ? "sm:justify-start" : "sm:justify-end"
            }`}
          >
            {/* Circle with Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2 bg-white dark:bg-[#0f0f0f] border-[4px] border-[#8245ec] w-16 h-16 rounded-full flex items-center justify-center shadow-lg z-20">
              <img
                src={edu.img}
                alt={edu.school}
                className="w-10 h-10 object-contain rounded-full"
              />
            </div>

            {/* Education Card */}
            <div
              className={`relative z-10 mt-16 sm:mt-0 w-full sm:max-w-[520px] px-6 py-6 sm:p-8 rounded-2xl border shadow-xl transition-all duration-300 backdrop-blur-md ${
                index % 2 === 0 ? "sm:ml-16" : "sm:mr-16"
              } bg-white/60 dark:bg-[#1c1c1c]/70 border-gray-300 dark:border-gray-700 hover:scale-[1.02] hover:shadow-[0_0_20px_#8245ec66]`}
            >
              <h3 className="text-xl font-semibold text-[#111827] dark:text-white">
                {edu.degree}
              </h3>
              <h4 className="text-md text-[#4b5563] dark:text-gray-300">
                {edu.school}
              </h4>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                {edu.date}
              </p>
              <p className="mt-4 text-sm text-[#374151] dark:text-gray-300">
                <strong>Grade:</strong> {edu.grade}
              </p>
              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {edu.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
