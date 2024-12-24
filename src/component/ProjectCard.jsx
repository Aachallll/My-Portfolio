
import React from "react";

const ProjectCard = ({ title, main, image, demoLink, sourceCode }) => {
  return (
    <div className="p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl">
      <img className="p-4" src={image} alt={`${title} screenshot`} />
      <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">{title}</h3>
      <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
      <div className="mt-2 p-2 flex gap-2">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-4 bg-blue-500 rounded-lg hover:bg-blue-700 transition duration-300">
            Demo
          </button>
        </a>
        <a href={sourceCode} target="_blank" rel="noopener noreferrer">
          <button className="text-white py-2 px-4 bg-green-500 rounded-lg hover:bg-green-700 transition duration-300">
            Source Code
          </button>
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
