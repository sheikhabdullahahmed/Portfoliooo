import React from "react";
// import { navdata } from "../Data/utilies";

const NavLinks = ({ scrollToSection }) => {

     const navdata = [
    { id: 1, text: "Home", section: "home" },
    { id: 2, text: "About", section: "about" },
    { id: 3, text: "Projects", section: "projects" },
    { id: 4, text: "Contact", section: "contact" },
    { id: 5, text: "Skills", section: "skills" },
  ];


  return (
    <>
     <ul className="flex flex-col cursor-pointer md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-black dark:text-white">
      {navdata.map((link, index) => (
        <li key={index} className="list-none">
           <button
            className="hover:text-indigo-500 transition-colors"
            onClick={() => scrollToSection(link.section)}
          >
            {link.text}
          </button>
        </li>
      ))}
    </ul>
    </>
  );
};

export default NavLinks;
