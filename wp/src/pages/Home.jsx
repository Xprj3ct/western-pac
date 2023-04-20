import React, { useEffect } from 'react'
import pipe from "../assets/images/waste-pipe.jpg";
import construction2 from "../assets/images/construction-image3.jpg";
import construction3 from "../assets/images/construction-image5.jpg";
import seaship from "../assets/images/sea-ship.jpg";
import female from "../assets/images/female-engineer.jpg";
import engineer from "../assets/images/second-engineer.jpg";
import re from "../assets/images/Rectangle-4.png";
import TypeWriterEffect from 'react-typewriter-effect';
import {  NavLink} from 'react-router-dom'
import { motion } from 'framer-motion'
import badge from "../assets/images/pass.png";
import shake from "../assets/images/handshake.png";
import pin from "../assets/images/pin.png";
import tie from "../assets/images/tie.png";
import Aos from 'aos'
import 'aos/dist/aos.css'
import { Link } from "react-scroll";

function Home() {
  useEffect (() => {
    Aos.init({ duration: 2000}, []);
  })
  return (
    <div id="home" className="font-monserrat overflow-x-hidden">
      <div className="absolute bottom-0 right-0 md:block hidden">
        <div class="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <section
        className="h-[80vh] w-[90%] mb-10 drop-shadow-1"
        id="image-set-landing"
        data-aos="slide-right"
      >
        <div className="flex flex-col h-full md:w-[60vw] mx-auto items-center justify-center text-center px-5">
          <h1
            className="text-white text-center font-bold md:text-6xl text-3xl py-4"
            data-aos="slide-right"
          >
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Montserrat, sans-serif",
                color: "#ffff",
                textAlign: "center",
                fontWeight: 700,
                display: "block",
              }}
              startDelay={3000}
              cursorColor="#ffff"
              multiText={["We are a Global Maritime and Oil & Gas Sectors"]}
              multiTextDelay={2000}
              typeSpeed={60}
            />
          </h1>
          <h2
            className="text-white text-center font-semibold md:text-4xl text-xl"
            data-aos="zoom-in"
          >
            Fastest-Growing company dealing majorly with Marine Support
            Services, Waste Management Services and Engineering Designs.
          </h2>

          <Link
            to="about"
            smooth={true}
            duration={500}
            className="btn hover:shadow-lg hover:bg-warning hover:text-white lg:btn-lg btn-warning flex flex-row justify-center items-center gap-3 my-4 text-black"
          >
            Learn more
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
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </span>
          </Link>
        </div>
      </section>
      <section>
        <div className="grid lg:grid-cols-12 md:mb-0 mb-12">
          <div className="col-span-12 lg:col-span-6" data-aos="flip-up">
            <div
              className="w-full lg:h-[700px] h-[200px]"
              id="image-div clip-path-bottom-right"
            >
              <img
                src={seaship}
                alt="sea-image"
                className="h-full w-full object-cover"
                id="clip-path-bottom-right"
              />
            </div>
          </div>
          <div
            className="col-span-12 lg:col-span-6 flex items-center pl-10 relative -mt-20 pt-16 lg:mt-0 md:pt-0"
            data-aos="flip-down"
          >
            <div className="lg:pb-10 pr-4 lg:pr-0">
              <h1 className="text-jet text-[2rem] py-5 lg:text-[3rem] lg:text-5xl font-extrabold tracking-wider uppercase lg:pt-0 ">
                <span className="text-blue-600">OUR COMPANY PROFILE</span>
              </h1>
              <p className="text-black lg:pr-20 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl lg:first-line lg:font-medium font-light">
                Established in 2018 with a burning desire to meet the growing
                demand for quality service delivery in the maritime and Oil &
                Gas sectors, Western Pacific Solutions Limited has grown to be a
                major marine support service companyin Nigeria and other West
                African countries.
              </p>
              <Link to="mini" smooth={true} duration={500}>
                <button className="btn hover:shadow-lg hover:bg-warning hover:text-white lg:btn-lg btn-warning flex flex-row justify-center items-center gap-3 my-4 text-black">
                  Learn more
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
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                      />
                    </svg>
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12  flex flex-col-reverse">
          <div
            className="lg:col-span-6 col-span-12 blue-bg flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full h-full bg-white"
            data-aos="fade-left"
          >
            {/* <motion.h1
              initial={{ x: -250 }}
              animate={{ x: 0, y: -10 }}
              className="text-gray-500 uppercase text-[2.3rem] md:text-[2.5rem] text-muted py-1 md:mr-0 mr-2"
            >
              <span className="text-warning font-bold uppercase">
                Empowering progress
              </span>{" "}
              with modern power and construction solutions.
            </motion.h1> */}
            <div className="flex md:flex-row flex-col gap-6">
              {" "}
              <motion.p
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold"
              >
                Within its few years of existence, Western Pacific has proven to
                be the leading and fastest-growing company dealing majorly with
                Marine Support Services, Waste Management Services and
                Engineering Designs. Our time and cost-effective approach to
                demands has earned us commendations and recommendations from our
                clients who are satisfied with our services, at all times and in
                all places.
              </motion.p>
              <motion.p
                initial={{ x: "-100vw" }}
                animate={{ x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold"
              >
                We provide safe, efficient, reliable and timely services to suit
                the need and requirements of our clients. Established and
                managed by men with a wealth of experience in our chosen areas
                of service delivery, we are confident that our expertise is
                adequate to satisfy safe, efficient and cost-effective services
                when required.
              </motion.p>
            </div>
          </div>
          <div
            className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
            data-aos="fade-up"
            id="clip-path-top-left"
          >
            <img
              src={construction2}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-12">
          <div
            className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
            id="escape"
          >
            <img
              src={construction3}
              alt="construction-image"
              className="w-full h-full object-cover"
            />
          </div>
          <div
            className="lg:col-span-6 col-span-12 flex flex-col md:flex-row items-left pl-9 pr-16 py-14 justify-center w-full text-muted h-full"
            data-aos="fade-up"
          >
            <div id="about">
              {" "}
              <h1 className="text-blue-600 uppercase text-[2.5rem] py-1">
                <TypeWriterEffect
                  textStyle={{
                    fontFamily: "Montserrat, sans-serif",
                    color: "rgb(34, 34, 233)",
                    display: "block",
                  }}
                  startDelay={2000}
                  cursorColor="#FE8E06"
                  multiText={["our vision"]}
                  multiTextDelay={2000}
                  typeSpeed={60}
                />
              </h1>
              <p className="text-black w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl text-muted lg:pb-0 md:pb-32">
                To be the leading marine and oil and gas support services
                provider in Africa, by becoming a strategic partner with our
                clients in the execution of their businesses.
              </p>
            </div>
            <div>
              {" "}
              <h1 className="text-blue-600 uppercase text-[2.5rem] py-1">
                <span className="text-muted font-bold">
                  <TypeWriterEffect
                    textStyle={{
                      fontFamily: "Montserrat, sans-serif",
                      color: "rgb(34, 34, 233)",
                      fontWeight: 700,
                      display: "block",
                    }}
                    startDelay={3000}
                    cursorColor="#FE8E06"
                    multiText={["our mission"]}
                    multiTextDelay={2000}
                    typeSpeed={60}
                  />
                </span>
              </h1>
              <p className="text-black w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl text-muted lg:pb-0 md:pb-32">
                To provide unparalleled timely and quality support services and
                product delivery of all sorts to our numerous clients
              </p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="grid md:grid-cols-12 bg-gray-50 overflow-x-hidden overflow-y-hidden">
          <div className="col-span-12 md:col-span-6 flex flex-col gap-5 md:p-32 p-10">
            <h1
              className="uppercase md:text-5xl text-2xl text-center md:text-left tracking-wider text-blue-600 font-bold"
              data-aos="flip-left"
            >
              OUR CORE <span className="font-normal text-warning">VALUES</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-5">
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 gap-2 shadow-md"
                data-aos="fade-left"
              >
                <img src={badge} alt="" className=" w-20" />
                <ul>
                  <li
                    className="uppercase list-disc font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                    data-aos="flip-left"
                  >
                    Responsibility
                  </li>
                  <li
                    className="uppercase list-disc font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                    data-aos="flip-left"
                  >
                    Result Oriented
                  </li>
                  <li
                    className="uppercase list-disc font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                    data-aos="flip-left"
                  >
                    Safety
                  </li>
                  <li
                    className="uppercase list-disc font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                    data-aos="flip-left"
                  >
                    Excellence
                  </li>
                  <li
                    className="uppercase list-disc font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                    data-aos="flip-left"
                  >
                    Integrity
                  </li>
                </ul>
              </div>
              {/* <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md gap-2"
                data-aos="fade-right"
              >
                <img src={shake} alt="" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500  md:text-left text-center text-xl tracking-wider"
                  data-aos="flip-left"
                >
                  customer satisfaction
                </h1>
                <p className="md:text-left text-center">
                  We strive to provide exceptional service and value to all of
                  our clients. Our team is dedicated to underst....
                </p>
              </div>
            </div>
            <div className="flex flex-col  md:flex-row gap-2 ">
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md"
                data-aos="fade-left"
              >
                <img src={pin} alt="pin" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                  data-aos="flip-left"
                >
                  quick delivery
                </h1>
                <p className="md:text-left text-center">
                  A top priority at LuckyLumac, where we understand the
                  importance of timely delivery in meeting our clients needs....
                </p>
              </div>
              <div
                className="flex flex-col items-center justify-center md:items-start md:justify-start  bg-white p-10 shadow-md"
                data-aos="fade-right"
              >
                <img src={tie} alt="" className="w-20" />
                <h1
                  className="uppercase font-bold text-gray-500 text-xl md:text-left text-center tracking-wider"
                  data-aos="flip-left"
                >
                  time management
                </h1>
                <p className="md:text-left text-center">
                  A key aspect of LuckyLumac's approach to providing exceptional
                  service to our clients. We recognize that effect....
                </p>
              </div> */}
            </div>
          </div>
          <div className="col-span-12 md:col-span-6 bg-white h-full ">
            <div className="flex flex-col h-full ">
              <h1 className="uppercase md:text-5xl text-xl tracking-wider text-gray-600 font-bold"></h1>

              <div className="w-full h-full">
                <div
                  className="flex gap-4 flex-col items-center justify-center w-full h-full "
                  data-aos="flip-left"
                >
                  <h1
                    className="uppercase md:text-5xl text-xl text-center md:text-left tracking-wider text-blue-600 font-bold"
                    data-aos="flip-left"
                  >
                    OUR SERVICES
                  </h1>
                  <div>
                    <ul className="text-lg md:text-xl">
                      <li className="border-b py-2" data-aos="flip-left">
                        {" "}
                        Waste Management Services
                      </li>
                      <li className="border-b py-2" data-aos="flip-left">
                        Engineering Design Services
                      </li>
                      <li className="border-b py-2" data-aos="flip-left">
                        {" "}
                        Marine Support Services
                      </li>
                      <li className="border-b py-2" data-aos="flip-left">
                        Rig and vessel maintenance
                      </li>
                      <li className="border-b py-2">Dredging Services</li>
                      <li className="border-b py-2" data-aos="flip-left">
                        Marine advisory services
                      </li>
                      <li className="border-b py-2" data-aos="flip-left">
                        Diving services
                      </li>
                    </ul>
                  </div>
                  <div
                    className="md:text-6xl md:my-20  text-gray-600"
                    data-aos="fade-down"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-7 h-7"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services">
        <div className="overflow-x-hidden">
          <div className="grid w-full grid-cols-12 h-full mb-10 overflow-x-hidden ">
            <div className="col-span-12 w-full h-96 " id="image-set">
              <motion.h1
                className="flex text-white font-monserrat md:text-5xl text-2xl uppercase font-semibold md:items-center items-center justify-center md:justify-center md:mt-0 h-full w-full text-center flex-col"
                data-aos="slide-in"
              >
                <span className="md:text-4xl">Our Activities{""}</span>
              </motion.h1>
              <div></div>
            </div>
            <div className="col-span-12 md:-mt-[7%] -mt-[30%] md:w-[80%] mx-auto bg-white shadow-xl">
              <div className="grid grid-cols-12 font-monserrat items-center  w-full">
                <div className="md:col-span-6 col-span-12 md:p-20 p-6">
                  <h1 className="md:text-4xl text-xl py-5 font-bold uppercase text-blue-600">
                    <TypeWriterEffect
                      textStyle={{
                        fontFamily: "Montserrat, sans-serif",
                        color: "rgb(34, 34, 233)",
                        fontWeight: 700,
                        display: "block",
                      }}
                      startDelay={2000}
                      cursorColor="rgb(34, 34, 233)"
                      multiText={["Waste Management Services"]}
                      multiTextDelay={2000}
                      typeSpeed={60}
                    />
                  </h1>
                  <div className="md:flex flex-col gap-4">
                    <p className="text-lg" data-aos="fade-in">
                      Removal of hydrocarbon residue and other toxic waste for
                      the purpose of achieving clean ballast or a gas-free tank
                      for inspection or repair works; Western Pacific Solutions
                      have a team of cleaners who understands the global tank
                      cleaning practice. We have in time past helped our clients
                      improve safety, reduce the risk of contamination and
                      minimize downtime.
                    </p>
                    <p>
                      <ul className="text-lg md:text-xl">
                        <li className="border-b py-2" data-aos="flip-left">
                          {" "}
                          Storage Tanks and Vessel cleaning
                        </li>
                        <li className="border-b py-2" data-aos="flip-left">
                          Waste Management services of all sorts with a specific
                          interest in Marine Wastes
                        </li>
                        <li className="border-b py-2" data-aos="flip-left">
                          {" "}
                          Waste Management (Hazardous and Non Hazardous)
                        </li>
                        <li className="border-b py-2" data-aos="flip-left">
                          Oil spill Response and Remedation
                        </li>
                        <li className="border-b py-2">
                          Pollution Control/Sewage Management
                        </li>
                        <li className="border-b py-2" data-aos="flip-left">
                          Advisory services on Waste Management
                        </li>
                      </ul>
                    </p>
                  </div>
                </div>
                <div
                  className="md:col-span-6 col-span-12 p-6"
                  data-aos="slide-left"
                >
                  <img src={pipe} alt="construction image" />
                </div>
              </div>
              <div
                id="mini"
                className="grid grid-cols-12 font-monserrat items-center  w-full overflow-x-hidden"
              >
                <div className="md:col-span-3 col-span-12 p-6 md:w-[50px] md:h-80"></div>
                <div className="md:col-span-9 bg-gray-800 col-span-12 md:p-20 p-6">
                  <h1
                    className="text-6xl py-5 font-bold uppercase text-blue-600"
                    data-aos="zoom-in"
                  >
                    <span className="font-light text-warning">
                      Marine Support{" "}
                    </span>
                    Services
                  </h1>
                  <div className="flex md:flex-row flex-col md:gap-4 text-white overflow-x-hidden">
                    <div className="md:w-2/4 overflow-hidden">
                      With the growing need for certified personnel with the
                      required experience to carry out various marine
                      activities, Western Pacific Solutions provides labour
                      supply from its pool of well trained and motivated labour
                      force. Also, with our dedicated procurement officers who
                      understand the requirements of clients in relation to
                      time, cost and quality service delivery, we are well
                      equipped with logistics to provide door to door and
                      offshore delivery of equipment, materials and consumables
                      for repairs and maintenance of your vessels and rigs. Our
                      marine support services include:
                    </div>
                    <div className="md:w-2/4 overflow-hidden">
                      <ul>
                        <li className="border-b py-2" data-aos="flip-left">
                          {" "}
                          Supply of certified labor (Welders, Blasters,
                          Painters, Scaffolders, Marine Engineers/Mechanics).
                        </li>
                        <li className="border-b py-2" data-aos="flip-left">
                          Supply of spares for marine vessels (Zinc Anodes,
                          Cutlass Bearings, Anchor Chains, Fenders, Shackles,
                          Safety gadgets).
                        </li>
                        <li className="border-b py-2" data-aos="flip-left">
                          {" "}
                          Supply of AGO.
                        </li>
                        <li className="border-b py-2" data-aos="flip-left">
                          Sourcing for Tug Boats, Vessels and Rigs for agents
                          and end Users
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full px-6 my-5 overflow-x-hidden">
                <h1 className="md:text-5xl py-3 font-bold">
                  Engineering Design{" "}
                  <span className="text-blue-700">Services</span>
                </h1>
                <p>
                  <ul className="text-lg md:text-xl overflow-hidden">
                    <li className="border-b py-2" data-aos="flip-left">
                      {" "}
                      Engineering Drawings for various structures - pressure
                      vessels, oil platforms, Barges, Vessels, Slipways
                    </li>
                    <li className="border-b py-2" data-aos="flip-left">
                      Building Design and Construction Services
                    </li>
                    <li className="border-b py-2" data-aos="flip-left">
                      {" "}
                      3D Designs and Modelling of Structures Engineering
                      Consultancy Services
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <section className="flex px-6">
          <div className="flex flex-col md:justify-center md:items-center w-full my-8">
            <span className="w-16 h-4 bg-warning relative rounded-full"></span>
            <div>
              <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div
                  className="md:w-[50%] md:mb-0 mb-16"
                  data-aos="slide-right"
                >
                  <h1 className="md:text-6xl text-3xl py-2 font-bold">
                    Rig and Vessel Maintenance
                  </h1>
                  <p className="md:text-xl">
                    Having a pool of dedicated men with years of experience in
                    Marine industry, we are capable of rendering the best of
                    afloat maintenance works Our afloat works includes:
                  </p>
                  <div className="flex flex-col w-full">
                    <div>
                      <ul className="list-disc font-bold py-3">
                        <li>UT measurement of hull, deck and tanks.</li>
                        <li>Transportation infrastructure</li>
                        <li>
                          {" "}
                          Fabrication, installation and reinforcement of
                          handrail, staircase, monkey island etc.
                        </li>
                        <li> Cropping and plating of worn out plates.</li>
                        <li>
                          {" "}
                          Blasting and painting of above water, deck and
                          superstructure.
                        </li>
                        <li>
                          {" "}
                          Overhaul and servicing of engines and generator.
                        </li>
                        <li> Servicing and calibration of anchor chain.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="md:h-auto md:w-auto h-[40vh] w-full"
                >
                  <img
                    src={female}
                    alt=""
                    className="md:h-[50%] h-[100%] object-cover
                 w-full md:w-auto"
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row gap-1 justify-center items-center md:mb-0 mb-16">
                <div
                  data-aos="slide-right"
                  className="md:h-auto md:w-auto h-[40vh] w-full"
                >
                  <img
                    src={engineer}
                    alt=""
                    className="md:h-[50%] h-[100%] w-full md:w-auto object-cover"
                  />
                </div>
                <div className="md:w-[50%] pl-4" data-aos="slide-left">
                  <h1 className="md:text-6xl text-3xl py-2 font-bold ">
                    Marine Support Services
                  </h1>
                  <p className="md:text-xl">
                    With the growing need for certified personnel with the
                    required experience to carry out various marine activities,
                    Western Pacific Solutions provides labour supply from its
                    pool of well trained and motivated labour force. Also, with
                    our dedicated procurement officers who understand the
                    requirements of clients in relation to time, cost and
                    quality service delivery, we are well equipped with
                    logistics to provide door to door and offshore delivery of
                    equipment, materials and consumables for repairs and
                    maintenance of your vessels and rigs. Our marine support
                    services include:
                  </p>
                  <div className="flex flex-col w-full">
                    <div>
                      <ul className="list-disc font-bold py-3">
                        <li>
                          Supply of certified labor (Welders, Blasters,
                          Painters, Scaffolders, Marine Engineers/Mechanics).
                        </li>
                        <li>
                          {" "}
                          Supply of spares for marine vessels (Zinc Anodes,
                          Cutlass Bearings, Anchor Chains, Fenders, Shackles,
                          Safety gadgets).
                        </li>
                        <li>Supply of AGO.</li>
                        <li>
                          {" "}
                          Sourcing for Tug Boats, Vessels and Rigs for agents
                          and end user.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col-reverse md:flex-row justify-center items-center">
                <div
                  className="md:w-[50%] md:mb-0 mb-16"
                  data-aos="slide-right"
                >
                  <h1 className="md:text-6xl text-3xl py-2 font-bold">
                    Marine Advisory Services
                  </h1>
                  <p className="md:text-xl">
                    With years of experience in ensuring safe, timely and cost
                    effective services for all marine and offshore operations,
                    Western Pacific Solutions is well equipped to advise and
                    handle the following:
                  </p>
                  <div className="flex flex-col w-full">
                    <div>
                      <ul className="list-disc font-bold py-3">
                        <li>Rig move.</li>
                        <li>General Marine Consultancy.</li>
                        <li>Vessel Assurance and Marine Surveys.</li>
                        <li>
                          Audits and Inspection for Vessels, Rigs and Barges.{" "}
                        </li>
                        <li>Fleets Management.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="slide-left"
                  className="md:h-auto md:w-auto h-[40vh] w-full"
                >
                  <img
                    src={re}
                    alt=""
                    className="md:h-[50%] h-[100%] object-cover
                 w-full md:w-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <section>
        <div>
          <div className="flex flex-col-reverse md:flex-row justify-center items-center">
            <div
              className="md:w-[50%] md:mb-0 mb-16 text-center"
              data-aos="slide-right"
            >
              <h1 className="md:text-6xl text-3xl py-2 font-bold text-[#FE8E06]">
                Dredging Services
              </h1>
              <p className="md:text-xl">
                Western Pacific Solutions has a highly equipped dredging
                subsidiary department which provides dredging services,
                canalization, flood and erosion control, land reclamation and
                land refill. Staffed with motivated individuals who are
                certified internationally in the field of marine and offshore
                dredging, our expertise and strict adherence to global practice
                have distinguished us among contemporaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex md:flex-row flex-col px-6 w-full">
        <div className="md:mt-36 mt-10 w-full">
          <div className="md:mt-11 w-full">
            <div className="flex mx-auto flex-col  items-center w-full justify-center -mt-20 md:-mt-40 bg-white text-xl p-6 md:p-20 mb-10">
              <div className="collapse">
                <input type="checkbox" />
                <div
                  className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-col justify-between items-start py-10"
                  data-aos="flip-left"
                >
                  <span>Some of</span>
                  <span className="font-bold md:text-5xl text-xl text-warning">
                    our clients
                  </span>
                  <span className="w-11 h-3 ml-10 bg-blue-700"></span>
                </div>

                <div className="flex">
                  <div className="flex items-center justify-center">
                    <ul className="steps steps-vertical text-white">
                      <li data-content="" className="step step-gray"></li>
                      <li data-content="" className="step step-gray"></li>
                      <li data-content="" className="step step-warning"></li>
                      <li data-content="" className="step step-warning"></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-lg md:text-xl">
                      <li className="border-b py-2" data-aos="fade-in">
                        {" "}
                        DeltaTek Offshore Limited
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        Harps Marine and Logistics Services Limited
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        {" "}
                        Foltoks Energy Resources Limited
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        Pearl HPW Limited
                      </li>
                      <li className="border-b py-2">
                        Homeland Integrated Offshore Services Limited
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        Ejovi Dredging and Marine Services Limited
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        AB Offshore Marine Services Limited
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        Aquawave Oil & Marine Services Limited
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:mt-36 mt-10 w-full">
          <div className="md:mt-11 w-full">
            <div className="flex mx-auto flex-col items-center w-full justify-center -mt-20 md:-mt-40 bg-white text-xl p-6 md:p-20 mb-10 ">
              <div className="collapse">
                <input type="checkbox" />
                <div
                  className="collapse-title text-2xl md:gap-0 gap-5 md:text-4xl font-semibold uppercase flex flex-col justify-between items-start py-10"
                  data-aos="flip-left"
                >
                  <span>Our</span>
                  <span className="font-bold md:text-5xl text-xl text-warning">
                    Technical Partners
                  </span>
                  <span className="w-11 h-3 ml-10 bg-blue-700"></span>
                </div>

                <div className="flex">
                  <div className="flex items-center justify-center">
                    <ul className="steps steps-vertical text-white">
                      <li data-content="" className="step step-warning"></li>
                      <li data-content="" className="step step-warning"></li>
                    </ul>
                  </div>
                  <div>
                    <ul className="text-lg md:text-xl">
                      <li className="border-b py-2" data-aos="fade-in">
                        {" "}
                        African Circle Pollution Management Limited — Marine
                        Offshore Waste Management Partner
                      </li>
                      <li className="border-b py-2" data-aos="fade-in">
                        Newbirth Environmental Project Limited — Oil Spill
                        Response Remediation
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="flex flex-col justify-center items-center w-full my-5">
          <h1 className="text-[2.5rem] flex flex-col md:flex-row font-bold text-green-600 uppercase">
            <span>Testimonials</span>
          </h1>
          <span className="w-16 h-4 bg-green-600 relative rounded-full"></span>
        </div> */}
      </section>

      <section id="CONTACT" className="bg-gray-100">
        <div className="flex flex-col items-center justify-center w-full md:w-[60%] md:mx-auto  md:py-16 md:px-10 py-20 px-10">
          <h1 className="text-4xl   text-center uppercase font-bold flex flex-col md:flex-row gap-2">
            <span className="text-blue-600" data-aos="slide-in">
              so what are you
            </span>{" "}
            <span className="text-black" data-aos="slide-in">
              {" "}
              waiting for?
            </span>
          </h1>
          <div>
            <div className="flex flex-col items-left justify-center  ">
              <h1
                className="py-6 px-11 md:px-0 text-xl md:text-3xl font-semibold text-center"
                data-aos="fade-up"
              >
                ENTER YOUR INFORMATION IN THE FORM BELOW AND SOMEONE FROM
                WESTERN PACIFIC SOLUTIONS WILL CONTACT YOU.
              </h1>

              <form>
                <div>
                  <div className="card-body md:px-0 px-10 py-2">
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Fullname</span>
                      </label>
                      <input
                        required
                        name="name"
                        type="text"
                        placeholder="full name"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Email</span>
                      </label>
                      <input
                        required
                        type="text"
                        placeholder="email"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Phone number</span>
                      </label>
                      <input
                        required
                        name="phone"
                        type="tel"
                        placeholder="phone number"
                        className="input input-bordered"
                      />
                    </div>
                    <div className="form-control">
                      <label className="label">
                        <span className="label-text">Questions & Comments</span>
                      </label>
                      <textarea
                        placeholder="Type Here..."
                        className="textarea textarea-bordered textarea-lg w-full"
                      ></textarea>
                    </div>
                    <div className="form-control mt-6">
                      <button
                        value="Send"
                        className="btn bg-blue-500 border-none"
                      >
                        submit
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home