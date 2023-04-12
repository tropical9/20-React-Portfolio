

import React from "react";

function Navigation(props) {
  const { currentPage, setCurrentPage } = props;

  return (
    <nav className="bg-gray-800">
      <div className="container mx-auto">
        <ul className="flex items-center justify-between px-4 py-3">
          <li>
            <span className="text-gray-300">Sharmaine</span>
          </li>
          <li className="hidden md:block">
            <ul className="flex items-center">
              <li className={currentPage === "aboutme" ? "mx-2 navActive" : "mx-2"}>
                <span onClick={() => setCurrentPage("aboutme")} className="text-gray-300 hover:text-white cursor-pointer">
                  About Me
                </span>
              </li>
              <li className={currentPage === "portfolio" ? "mx-2 navActive" : "mx-2"}>
                <span onClick={() => setCurrentPage("portfolio")} className="text-gray-300 hover:text-white cursor-pointer">
                  Portfolio
                </span>
              </li>
              <li className={currentPage === "contact" ? "mx-2 navActive" : "mx-2"}>
                <span onClick={() => setCurrentPage("contact")} className="text-gray-300 hover:text-white cursor-pointer">
                  Contact
                </span>
              </li>
              <li className={currentPage === "resume" ? "mx-2 navActive" : "mx-2"}>
                <span onClick={() => setCurrentPage("resume")} className="text-gray-300 hover:text-white cursor-pointer">
                  Resume
                </span>
              </li>
            </ul>
          </li>
        </ul>
        <div className="md:hidden">
          <button type="button" className="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path
                className="heroicon-ui"
                d="M4 6h16M4 12h16M4 18h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
