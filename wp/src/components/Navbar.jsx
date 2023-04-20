import {  NavLink} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { IoMdArrowDropdown } from "react-icons/io";
import { useState,  useEffect } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import logo from "../assets/images/logo.png";
import { motion } from 'framer-motion'
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";

function Navbar() {
   const [show, setShow] = useState(false);
  const [ togglerNav, setTogglerNav ] = useState(false);
  const clickHandler = () => {
    
      setTogglerNav(!togglerNav);
    
  }
  function Mailto({ email, subject, body, ...props }) {
    return (
      <a href={`mailto:${email}?subject=${subject || ""}&body=${body || ""}`}>
        {props.children}
      </a>
    );
  }

    useEffect(() => {
      Aos.init({ duration: 3000 }, []);
    });

  return (
    <motion.nav className="h-auto md:my-auto fixed md:py-5 z-10 md:pr-40 md:px-20 shadow-lg p2 bg-white w-full mx-auto transition-all ease-in-out">
      <div
        className="flex justify-between md:items-center items-center px-6 md:px-0"
        data-aos="fade-in"
      >
        <Link to="/">
          <img className="w-32" src={logo} alt="logo-image" />
        </Link>
        <div className="hidden md:flex">
          <Link
            className="nav-link"
            to="home"
            smooth={true}
            duration={500}
            onClick={clickHandler}
          >
            Home
          </Link>
          <Link
            className="nav-link"
            to="about"
            smooth={true}
            duration={500}
            onClick={clickHandler}
          >
            Who are we?
          </Link>
          <Link
            className="nav-link"
            to="services"
            smooth={true}
            duration={500}
            onClick={clickHandler}
          >
            Services
          </Link>
          <Link
            className="nav-link"
            to="CONTACT"
            smooth={true}
            duration={500}
            onClick={clickHandler}
          >
            Contact
          </Link>
        </div>
        <div className="md:flex gap-4 hidden font-semibold">
          <div className="tooltip tooltip-bottom" data-tip="Put a call across">
            <button className="py-3 px-5 border hover:shadow-lg flex items-center justify-center gap-2 rounded-lg btn bg-blue-600 border-none text-lg text-white">
              <span className="w-4 h-4">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 3.75v4.5m0-4.5h-4.5m4.5 0l-6 6m3 12c-8.284 0-15-6.716-15-15V4.5A2.25 2.25 0 014.5 2.25h1.372c.516 0 .966.351 1.091.852l1.106 4.423c.11.44-.054.902-.417 1.173l-1.293.97a1.062 1.062 0 00-.38 1.21 12.035 12.035 0 007.143 7.143c.441.162.928-.004 1.21-.38l.97-1.293a1.125 1.125 0 011.173-.417l4.423 1.106c.5.125.852.575.852 1.091V19.5a2.25 2.25 0 01-2.25 2.25h-2.25z"
                  />
                </svg>
              </span>
              <span id="show"> (+234)-808-668-8557</span>
            </button>
          </div>

          <div className="tooltip tooltip-bottom" data-tip="Send us a mail">
            <Mailto email="info@luckylumac.com">
              <button className="py-3 px-5 btn bg-blue-600 rounded-lg border-none text-white hover:shadow-lg">
                {" "}
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </span>
              </button>
            </Mailto>
          </div>
        </div>

        <button
          className="flex items-center justify-center md:hidden btn bg-blue-600 border-none text-white hover:shadow-lg"
          onClick={clickHandler}
        >
          {togglerNav ? <AiOutlineClose /> : <FaBars />}
        </button>
      </div>
      <div
        className={
          togglerNav
            ? "flex flex-col absolute bg-white w-full z-50 gap-4 md:inline"
            : "hidden md:inline"
        }
        id="nav-dropdown"
      >
        <Link
          className="nav-link"
          to="home"
          smooth={true}
          duration={500}
          onClick={clickHandler}
        >
          Home
        </Link>
        <Link
          className="nav-link"
          to="about"
          smooth={true}
          duration={500}
          onClick={clickHandler}
        >
          Who are we?
        </Link>
        <Link
          className="nav-link"
          to="services"
          smooth={true}
          duration={500}
          onClick={clickHandler}
        >
          Services
        </Link>
        <Link
          className="nav-link"
          to="CONTACT"
          smooth={true}
          duration={500}
          onClick={clickHandler}
        >
          Contact
        </Link>
      </div>
    </motion.nav>
  );
}

export default Navbar