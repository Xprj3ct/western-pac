import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


class SlickSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
    };
    return (
      <div className="mx-auto w-[60%]">
        <Slider {...settings}>
          <div className="container flex items-center justify-center h-full">
            <img
              src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg"
              className="mx-auto flex items-center justify-center h-full"
            />
          </div>
          <div className="container flex items-center justify-center h-full">
            <img
              src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png"
              className="mx-auto flex items-center justify-center h-full"
            />
          </div>
          <div className="container flex items-center justify-center h-full">
            <img
              src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg"
              className="mx-auto flex items-center justify-center h-full"
            />
          </div>
          <div className="container flex items-center justify-center h-full">
            <img
              src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg"
              className="mx-auto flex items-center justify-center h-full"
            />
          </div>
          <div className="container flex items-center justify-center h-full">
            <img
              src="http://recruiters-zone.com/static/media/ibexglobal.bbde01ca0d4903ed36b1.png"
              className="mx-auto flex items-center justify-center h-full"
            />
          </div>
          <div className="container flex items-center justify-center h-full">
            <img
              src="http://recruiters-zone.com/static/media/BRS_Ventures.0722bfe22318cd3f3f5d.jpg"
              className="mx-auto"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default SlickSlider;
