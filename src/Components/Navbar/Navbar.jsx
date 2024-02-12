import React from "react";
import './Navbar.css'
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
          {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Contact Us
          </button> */}

          <button class="relative border hover:border-sky-600 duration-500 group cursor-pointer text-sky-50  overflow-hidden h-14 w-56 rounded-md bg-sky-800 p-2 flex justify-center items-center font-extrabold">
            <div class="absolute z-10 w-48 h-48 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-900 delay-150 group-hover:delay-75"></div>
            <div class="absolute z-10 w-40 h-40 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-800 delay-150 group-hover:delay-100"></div>
            <div class="absolute z-10 w-32 h-32 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-700 delay-150 group-hover:delay-150"></div>
            <div class="absolute z-10 w-24 h-24 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-600 delay-150 group-hover:delay-200"></div>
            <div class="absolute z-10 w-16 h-16 rounded-full group-hover:scale-150 transition-all  duration-500 ease-in-out bg-sky-500 delay-150 group-hover:delay-300"></div>
            <p class="z-10">Contact Us</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
