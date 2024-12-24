
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
        <p className="text-sm md:text-2xl tracking-tight mt-4">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis
          numquam distinctio sequi
        </p>
        <button className="mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
          Contact Me
        </button>
        <button
          className="mt-4 md:mt-6 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]"
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
