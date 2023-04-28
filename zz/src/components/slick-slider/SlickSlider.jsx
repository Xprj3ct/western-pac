import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bourbon from '../../assets/Bourbon.png'
import Deltek from '../../assets/Deltek.png'
import Foltoks from '../../assets/Foltoks.png'
import Hios from '../../assets/HIOS.png'
import Pearl from '../../assets/Pearl HPW.png'
import Shipside from '../../assets/Shipside.png'
import Splatforms from '../../assets/SplatForms.png'
import Vms from '../../assets/VMS.png'
import Anl1 from '../../assets/ANL 1.png'
import Anl from '../../assets/ANL.png'
import Baobab from '../../assets/Baobab.png'
import TypeWriterEffect from 'react-typewriter-effect'

class SlickSlider extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div id="partners" className="py-32">
        <h1
          className="text-xl px-5 md:text-5xl font-bold tracking-wider uppercase flex items-center justify-center gap-3"
          data-aos="zoom-in"
        >
          <span className="text-[#FD8C09] font-normal">OUR </span>
          <span>
            <TypeWriterEffect
              textStyle={{
                fontFamily: "Montserrat, sans-serif",
                color: "rgb(34, 34, 233)",
                fontWeight: 700,
                display: "block",
              }}
              startDelay={2000}
              cursorColor="rgb(34, 34, 233)"
              multiText={["technical partners"]}
              multiTextDelay={2000}
              typeSpeed={60}
            />
          </span>
        </h1>
        <div className="mx-auto pt-10 md:pt-20 md:w-[60%] overflow-hidden">
          <Slider {...settings}>
            <div className="container flex items-center justify-center h-full">
              <img
                src={Bourbon}
                className="mx-auto flex items-center justify-center h-full"
              />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img
                src={Deltek}
                className="mx-auto flex items-center justify-center h-full"
              />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img
                src={Foltoks}
                className="mx-auto flex items-center justify-center h-full"
              />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img
                src={Hios}
                className="mx-auto flex items-center justify-center h-full"
              />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img
                src={Pearl}
                className="mx-auto flex items-center justify-center h-full"
              />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Shipside} className="mx-auto" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Splatforms} className="mx-auto" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Shipside} className="mx-auto" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Vms} className="mx-auto" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Anl1} className="mx-auto" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Anl} className="mx-auto" />
            </div>
            <div className="container flex items-center justify-center h-full">
              <img src={Baobab} className="mx-auto" />
            </div>
          </Slider>
        </div>
      </div>
    );
  }
}

export default SlickSlider;
