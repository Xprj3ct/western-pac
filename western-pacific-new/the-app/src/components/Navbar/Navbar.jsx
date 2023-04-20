import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import Button from "../Button";
import NavLinks from "./NavLinks";
import "./Navbar.css"
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white max-w-[1800px] mx-auto w-full md:px-0 px-4">
      <div className="flex items-center font-medium justify-around">
        <div
          className="z-50 py-5 md:w-auto w-full flex justify-between items-center"
          id="forward"
        >
          <img src={Logo} alt="logo" className="cursor-pointer h-12" />
          <div
            className="text-3xl md:hidden items-center cursor-pointer "
            onClick={() => setOpen(!open)}
          >
            <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
          </div>
        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li>
            <Link
              to="/"
              className="py-7 px-3 hover:border-b-4 hover:border-b-blue-600 transition-all ease-in-out n hover:text-blue-600 inline-block"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="py-7 px-3 hover:border-b-4 hover:border-b-blue-600 transition-all ease-in-out n hover:text-blue-600 inline-block"
            >
              Who are we?
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link
              to="/"
              className="py-7 px-3 hover:border-b-4 hover:border-b-blue-600 transition-all ease-in-out n hover:text-blue-600 inline-block"
            >
              PARTNERS
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="py-7 px-3 hover:border-b-4 hover:border-b-blue-600 transition-all ease-in-out n hover:text-blue-600 inline-block"
            >
              Contact us
            </Link>
          </li>
        </ul>
        <div className="md:block hidden">
          <Button />
        </div>
        {/* Mobile nav */}
        <ul
          id="mobile-nav"
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
          <li>
            <Link
              to="/"
              className="py-7 hover:text-blue-600 px-3 inline-block "
            >
              Home
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 hover:text-blue-600 px-3 inline-block">
              Who are we?
            </Link>
          </li>
          <NavLinks />
          <li>
            <Link to="/" className="py-7 px-3 hover:text-blue-600 inline-block">
              Partners
            </Link>
          </li>
          <li>
            <Link to="/" className="py-7 hover:text-blue-600 px-3 inline-block">
              Contact us
            </Link>
          </li>
          <div className="py-5">
            <Button />
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
