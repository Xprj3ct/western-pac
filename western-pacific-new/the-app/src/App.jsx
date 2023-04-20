import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import Slider from "./components/slider/Slider";
import ScrollToTop from "react-scroll-to-top";
import Hero from "./components/Hero/Hero";
import "./loader.css"
import SlickSlider from "./components/slick-slider/SlickSlider";
import Footer from "./components/Footer/Footer";


const App = () => {

  
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
        <Footer/>
      </div>
      <ScrollToTop
        className=" w-10  pl-1 self-center text-white bg-[#FD8C09]"
        smooth
        top="20"
        id="fill"
      /> 
    </section>

    // <div className="h-screen flex item-center justify-center bg-blue-700">
    //   <div className="ferry">
    //     <div className="chimney"></div>
    //     <div className="waves">
    //     </div>
    //   </div>
    // </div>
  );
};

export default App;
