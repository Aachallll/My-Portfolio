import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import React, { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="flex flex-wrap justify-between md:items-center text-white px-10 pt-6 md:px-20">
      <span>Portfolio</span>

      {/* Menu Items */}
      <ul
        className={`${
          menu ? "block" : "hidden"
        } mx-24 py-2 mt-4 font-semibold bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:max-0 md:flex gap-6`}
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
