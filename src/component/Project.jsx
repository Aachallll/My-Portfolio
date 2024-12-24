
import React from "react";
import ProjectCard from "./ProjectCard";

const Project = () => {
  
  const projects = [
    {
      title: "Blogging Wrap",
      main: "A blogging platform with rich text editing and category tagging.",
      image: "/assets/project1.jpeg",
      demoLink: "https://bloggingwrap.demo",
      sourceCode: "https://github.com/username/bloggingwrap",
    },
    {
      title: "YouTube Clone",
      main: "A video streaming platform with search and video recommendations.",
      image: "/assets/project2.jpeg",
      demoLink: "https://youtubeclone.demo",
      sourceCode: "https://github.com/username/youtubeclone",
    },
    {
      title: "Netflix Clone",
      main: "A streaming app with user authentication and a library of content.",
      image: "/assets/project3.jpeg",
      demoLink: "https://netflixclone.demo",
      sourceCode: "https://github.com/username/netflixclone",
    },
    {
      title: "Portfolio Website",
      main: "A personal portfolio showcasing projects and skills.",
      image: "/assets/project4.jpeg",
      demoLink: "https://portfolio.demo",
      sourceCode: "https://github.com/username/portfolio",
    },
    {
      title: "E-commerce App",
      main: "An online shopping platform with cart and payment gateway integration.",
      image: "/assets/project5.jpeg",
      demoLink: "https://ecommerceapp.demo",
      sourceCode: "https://github.com/username/ecommerceapp",
    },
  ];

  return (
    <div id="Projects" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Projects</h1>
      <div className="py-12 px-8 flex flex-wrap gap-5">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            main={project.main}
            image={project.image}
            demoLink={project.demoLink}
            sourceCode={project.sourceCode}
          />
        ))}
      </div>
    </div>
  );
};

export default Project;
