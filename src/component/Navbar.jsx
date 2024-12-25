import { RiCloseLine, RiMenu2Line,RiSunLine, RiMoonLine } from "@remixicon/react";
import React, { useState } from "react";

const Navbar = ({ theme, toggleTheme }) => {
  const [menu, setMenu] = useState(false);

  return (
    <nav
      className={`flex flex-wrap justify-between md:items-center px-10 pt-6 md:px-20 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-900 text-white"
      }`}
    >
      {/* Logo/Title */}
      <span className="text-lg font-bold">Portfolio</span>

      {/* Menu Items */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:max-0 md:flex gap-6 ${
          theme === "light" ? "bg-gray-100" : "bg-gray-800"
        }`}
      >
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#About">About</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Education">Educations</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Skills">Skills</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Projects">Projects</a>
        </li>
        <li className="text-md transition-all duration-300 p-1 md:p-0">
          <a href="#Footer">Contact</a>
        </li>
      </ul>

      {/* Theme Toggle Button */}
      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-full font-semibold flex items-center gap-2 hidden md:block"
      >
        {theme === "light" ? (
          <>
            <RiMoonLine size={20} />
            
          </>
        ) : (
          <>
            <RiSunLine size={20} />
            
          </>
        )}
      </button>

      {/* Menu Toggle Icons */}
      {menu ? (
        <RiCloseLine
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(false)}
        />
      ) : (
        <RiMenu2Line
          size={30}
          className="md:hidden absolute right-10 top-6 transition-all duration-300"
          onClick={() => setMenu(true)}
        />
      )}
    </nav>
  );
};

export default Navbar;
