import React from "react";
import { FaCss3, FaHtml5, FaJs, FaReact, FaFigma } from "react-icons/fa";
import { SiMongodb, SiMysql,SiCplusplus } from "react-icons/si";

const Skills = () => {
  return (
    <div id="Skills" className="p-10 md:p-24">
      <h1 className="text-2xl md:text-4xl text-white font-bold mb-8">Skills</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center justify-center">
        {/* Skill Icons */}
        {[
          { Icon: FaHtml5, color: "#E34F26", label: "HTML5" },
          { Icon: FaCss3, color: "#1572B6", label: "CSS3" },
          { Icon: FaJs, color: "#F7DF1E", label: "JavaScript" },
          { Icon: FaReact, color: "#61DAFB", label: "React.js" },
          { Icon: SiMongodb, color: "#47A248", label: "MongoDB" },
          { Icon: SiMysql, color: "#4479A1", label: "MySQL" },
          { Icon: SiCplusplus, color: "#00599C", label: "C++" },
        ].map(({ Icon, color, label }, index) => (
          <span
            key={index}
            className="p-3 bg-zinc-950 flex items-center justify-center rounded-2xl shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-xl"
          >
            <Icon size={50} color={color} aria-label={label} />
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
