import React from "react";
import logo from "../assets/logo-no-background.png";

const Header = ({ scrolling }) => {
  return (
    <header
      className={`${
        scrolling ? "border-b border-gray-900" : ""
      }  fixed left-0 right-0 top-0 z-20`}
      id="home"
    >
      <div className="container m-auto px-4 py-6 max-w-5xl bg-[#0a052e]">
        <div className="flex flex-col gap-4 sm:flex-row justify-between items-center">
          <div>
            <img className="w-48" src={logo} alt="" />
          </div>
          <div>
            <ul className="flex gap-12">
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  Technologies
                </a>
              </li>
              <li>
                <a
                  href="#aboutme"
                  className="text-gray-400 hover:text-white cursor-pointer"
                >
                  About me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
