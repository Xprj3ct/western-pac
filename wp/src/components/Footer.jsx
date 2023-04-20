import React from 'react'
import logo from "../assets/images/logo.png";

function Footer() {
  return (
    <footer className="footer p-10 md:p-28 md:text-lg bg-base-200 text-base-content font-semibold font-monserrat text-sm">
      <div className="flex flex-col -mt-10">
        <img className="w-32 m-0 p-0" src={logo} alt="logo-image" />
        <p className="md:w-[560px]">
          WESTERN PACIFIC SOLUTIONS
          <br />
          Western Pacific Solutions have a team of cleaners who understands the
          global tank cleaning practice. We have in time past helped our clients
          improve safety, reduce the risk of contamination and minimize
          downtime..
          <br />
          <a href="/Contact" className="link text-blue-600 font-semibold">
            info@westernpacificsolutionsltd.com
          </a>
        </p>
      </div>
      <div className="uppercase">
        <span className="footer-title">Explore</span>
        <a href="/About" className="link link-hover">
          Who we are
        </a>
        <a href="/Services" className="link link-hover">
          Services
        </a>
        <a className="link link-hover">
          Project<span className="lowercase">s</span>
        </a>
      </div>
      {/* <div className="uppercase">
        <span className="footer-title">Company</span>
        <a href="/Projects" className="link link-hover">
          Projects
        </a>
        <a href="/Contact" className="link link-hover">
          Contact
        </a>
        <a className="link link-hover">Customer support</a>
      </div> */}
      <div className=" font-md">
        <span className="footer-title uppercase">reach out</span>
        <a className="link link-hover">
          Port Harcourt Office 14, Orogbum Crescent Old GRA, Port Harcourt <br/>
          Lagos Office 13, Alolade Kazeem Gemade Estate, Idimu, Lagos.
        </a>
        <a className="link link-hover">
          PH: +234-815 236 3717, +234-808 668 8557{" "}
        </a>
        <a className="lowercase link link-hover">
          info@westernpacificsolutionsltd.com <br />
          westernpacificsolutionslimited@gmail.com
        </a>
      </div>
    </footer>
  );
}

export default Footer