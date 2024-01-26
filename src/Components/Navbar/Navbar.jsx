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

          <button className="border hover:scale-95 duration-300 relative group cursor-pointer text-sky-50  overflow-hidden h-12 w-60 rounded-md bg-sky-200 p-2 flex justify-center items-center font-extrabold">
            <div className="absolute right-32 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-40 h-40 rounded-full group-hover:scale-150 duration-500 bg-sky-900"></div>
            <div className="absolute right-2 -top-4  group-hover:top-1 group-hover:right-2 z-10 w-32 h-32 rounded-full group-hover:scale-150  duration-500 bg-sky-800"></div>
            <div className="absolute -right-12 top-4 group-hover:top-1 group-hover:right-2 z-10 w-24 h-24 rounded-full group-hover:scale-150  duration-500 bg-sky-700"></div>
            <div className="absolute right-20 -top-4 group-hover:top-1 group-hover:right-2 z-10 w-16 h-16 rounded-full group-hover:scale-150  duration-500 bg-sky-600"></div>
            <p className="z-10">CONTACT US</p>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
