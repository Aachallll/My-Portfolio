
import React from "react";
import avatarImg from "../assets/avatar.png";
import TextChange from "../../TextChange";
import resumeFile from "../resume/Resume.pdf"

const Home = () => {
  // Function to handle resume download
  const handleResumeDownload = () => {
   
    const link = document.createElement("a");
    link.href = resumeFile;
    link.download = "Resume.pdf"; 
    link.click();
  };

  return (
    <div className="text-white flex w-full justify-between items-start p-10 md:p-20">
      <div className="md:w-2/4 md:pt-10">
        <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
          <TextChange />
        </h1>
        <p className="text-xs md:text-sm tracking-tight mt-6">
        Welcome to my portfolio! I am a Computer Science undergraduate with a strong focus on web development and a passion for building modern, scalable web applications. My expertise lies in MERN stack (MongoDB, Express, React, Node.js) development
        <br /> 
        <br />
        I thrive on solving complex problems and delivering user-centric solutions. I take pride in creating clean, efficient code and continuously improving my skills to stay ahead in the evolving tech landscape.
        </p>
        <button className="mt-10 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#ed50b3]">
          Contact Me
        </button>
        <button
          className="mt-5 md:mt-6 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-6
          ml-6 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#ed50b3]"
          onClick={handleResumeDownload}
        >
          Download Resume
        </button>
      </div>
      <div>
        <img className="" src={avatarImg} alt="Avatar" />
      </div>
    </div>
  );
};

export default Home;
