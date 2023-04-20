import React from 'react'
import { BsCheck2Circle } from 'react-icons/bs';
import "./Hero.css"
import videoBg from "../../assets/videoBg.mp4";

const Hero = () => {
  return (
    <section>
      <div className="grid lg:grid-cols-12 md:mb-0 mb-12">
        <div className="col-span-12 lg:col-span-6" data-aos="flip-up">
          <div
            className="w-full lg:h-[700px] h-[200px]"
            id="image-div clip-path-bottom-right"
          >
            <img
              src="https://cdn.pixabay.com/photo/2021/08/24/07/00/cargo-ship-6569723_960_720.jpg"
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
              <span className="text-blue-600">
                <span className="text-[#021D27]">OUR</span> COMPANY PROFILE
              </span>
            </h1>
            <p className="text-black lg:pr-20 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl lg:first-line lg:font-medium font-light">
              Established in 2018 with a burning desire to meet the growing
              demand for quality service delivery in the maritime and Oil & Gas
              sectors, Western Pacific Solutions Limited has grown to be a major
              marine support service companyin Nigeria and other West African
              countries.
            </p>
          </div>
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-12  flex flex-col-reverse">
        <div
          className="lg:col-span-6 col-span-12 blue-bg flex flex-col items-left pl-9 pr-16 py-14 justify-center w-full h-full bg-white"
          data-aos="fade-left"
        >
          <div className="flex md:flex-row flex-col gap-6">
            {" "}
            <p className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold">
              Within its few years of existence, Western Pacific has proven to
              be the leading and fastest-growing company dealing majorly with
              Marine Support Services, Waste Management Services and Engineering
              Designs. Our time and cost-effective approach to demands has
              earned us commendations and recommendations from our clients who
              are satisfied with our services, at all times and in all places.
            </p>
            <p className="text-gray-500 w-full pr-4 lg:my-5 lg:tracking-wide lg:text-xl font-semibold">
              We provide safe, efficient, reliable and timely services to suit
              the need and requirements of our clients. Established and managed
              by men with a wealth of experience in our chosen areas of service
              delivery, we are confident that our expertise is adequate to
              satisfy safe, efficient and cost-effective services when required.
            </p>
          </div>
        </div>
        <div
          className="lg:col-span-6 col-span-12 h-[300px] lg:h-[500px]"
          data-aos="fade-up"
          id="clip-path-top-left"
        >
          <img
            src="https://img.freepik.com/free-photo/professional-sailor-yachtsman-tights-tensions-cable-wire-rope-mechanical-winch-sailboat-yacht_346278-324.jpg?w=1380&t=st=1681537015~exp=1681537615~hmac=18d8e765ecf05d794897948b2c83903a018a26cddd5d74a39f2aacfa95043656"
            alt="construction-image"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div>
        <div
          id="mini"
          className="grid grid-cols-12 font-monserrat items-center  w-full h-auto overflow-x-hidden"
        >
          <div className="md:col-span-6 col-span-12  md:w-full bg-[#FD8C09] md:h-full">
            <div className="main h-full">
              <video src={videoBg} autoPlay loop muted className='h-full'/>
            </div>
          </div>
          <div className="md:col-span-6 bg-gray-800 col-span-12">
            <div className="flex flex-col md:gap-4 text-white overflow-x-hidden">
              <div className="md:p-20 p-6">
                <h1
                  className="text-6xl py-5 font-bold uppercase text-blue-600"
                  data-aos="zoom-in"
                >
                  <span className="font-light text-warning">
                    Marine Support{" "}
                  </span>
                  Services
                </h1>
                <div className="md:w-full overflow-hidden md:text-xl">
                  With the growing need for certified personnel with the
                  required experience to carry out various marine activities,
                  Western Pacific Solutions provides labour supply from its pool
                  of well trained and motivated labour force. Also, with our
                  dedicated procurement officers who understand the requirements
                  of clients in relation to time, cost and quality service
                  delivery, we are well equipped with logistics to provide door
                  to door and offshore delivery of equipment, materials and
                  consumables for repairs and maintenance of your vessels and
                  rigs. Our marine support services include:
                </div>
                <div className="md:w-full overflow-hidden md:text-xl my-5">
                  <ul>
                    <li
                      className="border-b py-2 flex items-center gap-3"
                      data-aos="flip-left"
                    >
                      {" "}
                      <span className="text-3xl">
                        <BsCheck2Circle />
                      </span>
                      <span>
                        {" "}
                        Supply of certified labor (Welders, Blasters, Painters,
                        Scaffolders, Marine Engineers/Mechanics).
                      </span>
                    </li>
                    <li
                      className="border-b py-2  flex items-center gap-3"
                      data-aos="flip-left"
                    >
                      <span className="text-3xl">
                        <BsCheck2Circle />
                      </span>
                      <span>
                        {" "}
                        Supply of spares for marine vessels (Zinc Anodes,
                        Cutlass Bearings, Anchor Chains, Fenders, Shackles,
                        Safety gadgets).
                      </span>
                    </li>
                    <li
                      className="border-b py-2 flex items-center gap-3"
                      data-aos="flip-left"
                    >
                      {" "}
                      <span className="text-3xl ">
                        <BsCheck2Circle />
                      </span>
                      <span> Supply of AGO.</span>
                    </li>
                    <li
                      className="border-b py-2 flex items-center gap-3"
                      data-aos="flip-left"
                    >
                      <span className="text-3xl">
                        <BsCheck2Circle />
                      </span>
                      <span>
                        {" "}
                        Sourcing for Tug Boats, Vessels and Rigs for agents and
                        end Users
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero