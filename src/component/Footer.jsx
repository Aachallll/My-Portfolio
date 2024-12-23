// import React from 'react'
// import {MdOutlineEmail} from 'react-icons/md'
// import {CiLinkedin} from 'react-icons/ci'
// import { FaGithub } from 'react-icons/fa'

// const Footer = () => {
//   return (
//     <div
//     id='Footer'
//     className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'
//     >
//       <div>
//         <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
//         <h3 className='text-sm md:text-2xl font-normal'>Feel Free to reach out</h3>
//       </div>
//       <ul className='text-sm md:text-xl'>
//         <li>
//         <MdOutlineEmail size={30}/>
//         kumariaachal002@gmail.com
//         </li>
//         <li>
//            <CiLinkedin/>
//            https://www.linkedin.com/in/aanchal-161b26270/
//         </li>
//         <li>
//             <FaGithub/>
//             https://github.com/Aachallll
//         </li>
//       </ul>
//     </div>
//   )
// }

// export default Footer
import React from "react";
import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <div
      id="Footer"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      {/* Contact Information */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal">
          Feel Free to reach out
        </h3>
      </div>

      {/* Contact Links */}
      <ul className="space-y-4 md:space-y-6 text-sm md:text-xl">
        <li className="flex items-center gap-2">
          <MdOutlineEmail size={30} />
          <a
            href="mailto:kumariaachal002@gmail.com"
            className="hover:underline"
          >
            kumariaachal002@gmail.com
          </a>
        </li>
        <li className="flex items-center gap-2">
          <CiLinkedin size={30} />
          <a
            href="https://www.linkedin.com/in/aanchal-161b26270/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </li>
        <li className="flex items-center gap-2">
          <FaGithub size={30} />
          <a
            href="https://github.com/Aachallll"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            GitHub
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
