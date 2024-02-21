import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/logo/WHITE 1S.png";

const Navbar = () => {
  return (
    <nav className="p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="text-white font-bold text-lg">
            <img src={Logo} alt="" className="h-16 w-auto" />
          </div>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="text-white">
                About
              </a>
            </li>
            <li>
              <a href="#work" className="text-white">
                Work
              </a>
            </li>
            <li>
              <a href="#clients" className="text-white">
                Clients
              </a>
            </li>
          </ul>
          <button
            className="contact cursor-pointer inline-flex items-center rounded-full px-9 py-3 text-xl font-mono font-semibold text-white-600 
            hover:text-white border-2 border-white-600
            hover:bg-green-600 transition ease-in-out delay-150  hover:bg-green-600 duration-300  focus:bg-transparent"
          >
            Contact Us
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
