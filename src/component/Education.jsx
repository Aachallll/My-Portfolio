import React from "react";

const Education = () => {
  return (
    <div id="Education" className="p-10 md:p-24 text-white">
      <h1 className="text-2xl md:text-4xl text-white font-bold">Education</h1>
      <div className="mt-8">
        {/* University Section */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold">University</h2>
          <p className="mt-2 text-sm md:text-lg">
            <strong>University Name:</strong> Siliguri Institute of Technology
          </p>
          <p className="text-sm md:text-lg">
            <strong>Degree:</strong> Bachelor of Technology in Computer Science
          </p>
          <p className="text-sm md:text-lg">
            <strong>Year:</strong> 2021- 2025
          </p>
          <p className="text-sm md:text-lg">
            <strong>CGPA:</strong> 8.3
          </p>
        </div>

        

        {/* 12th Grade Section */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold">12th Grade</h2>
          <p className="mt-2 text-sm md:text-lg">
            <strong>School Name:</strong> Kendriya Vidyalaya Sevoke Road
          </p>
          <p className="text-sm md:text-lg">
            <strong>Stream:</strong> Science (PCM)
          </p>
          <p className="text-sm md:text-lg">
            <strong>Year:</strong> 2020 - 2021
          </p>
          <p className="text-sm md:text-lg">
            <strong>Percentage:</strong> 80%
          </p>
        </div>

		{/* 10th Grade Section */}
        <div className="mb-8">
          <h2 className="text-xl md:text-2xl font-bold">10th Grade</h2>
          <p className="mt-2 text-sm md:text-lg">
            <strong>School Name:</strong> Kendriya Vidyalaya Sevoke Road
          </p>
          <p className="text-sm md:text-lg">
            <strong>Year:</strong> 2018 - 2019
          </p>
          <p className="text-sm md:text-lg">
            <strong>Percentage:</strong> 78%
          </p>
        </div>
      </div>
    </div>
  );
};

export default Education;
