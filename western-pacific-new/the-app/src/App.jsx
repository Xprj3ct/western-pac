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


const App = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    }, []);
  return (
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
        <Contact id="contact" />
        <Footer />
      </div>
      {/* <div className="text-3xl ">
        <IoLogoWhatsapp />
      </div> */}
      <ScrollToTop
        className=" w-10  pl-1 self-center text-white bg-[#FD8C09]"
        smooth
        top="20"
        id="fill"
      />
    </section>
  );
};

export default App;
