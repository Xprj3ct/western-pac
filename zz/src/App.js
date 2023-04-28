import React, { useState, useEffect } from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/slider/Slider";
import ScrollToTop from "react-scroll-to-top";
import Hero from "./components/Hero/Hero";
import "./loader.css";
import SlickSlider from "./components/slick-slider/SlickSlider";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact/Contact";
import { BeatLoader } from "react-spinners";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <div className="app">
      {loading ? (
        <div id="app-loader">
          <BeatLoader color={"white"} loading={loading} />
          <span className="text-orange-100 font-monserrat font-bold my-4">
            Loading.
          </span>
        </div>
      ) : (
        <section
          className="h-screen bg-Hero bg-cover
      font-monserrat md:bg-top bg-center"
        >
          <div>
            <Navbar />
            <Slider />
            <div className="md:-mt-[14rem]">
              <Hero />
            </div>
            <SlickSlider />
            <Contact />
            <Footer />
          </div>

          <ScrollToTop
            className=" w-10  pl-1 self-center text-white bg-[#FD8C09]"
            smooth
            top="20"
            id="fill"
          />
        </section>
      )}
    </div>
  );
};

export default App;
