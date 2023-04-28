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
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import User from "../src/assets/favicon.jpg"

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
          <div>
            <WhatsAppWidget
              phoneNo="919884098840"
              position="right"
              widgetWidth="300px"
              widgetWidthMobile="260px"
              autoOpen={true}
              autoOpenTimer={5000}
              messageBox={true}
              messageBoxTxt="Hi Team, i need your services?"
              iconSize="40"
              iconColor="white"
              iconBgColor="#25D366"
              headerIcon={User}
              headerIconColor="green"
              headerTxtColor="white"
              headerBgColor="	#25D366"
              headerTitle="John Doe"
              headerCaption="online"
              bodyBgColor="#bbb"
              chatPersonName="Support"
              chatMessage={
                <>
                  Hi there 👋 <br />
                  <br /> How can I help you?
                </>
              }
              footerBgColor="#999"
              placeholder="Type a message.."
              btnBgColor="yellow"
              btnTxt="Start Chat"
              btnTxtColor="black"
            />
          </div>
          <div>
            <ScrollToTop
              className=" w-10  pl-1 self-center text-white bg-[#FD8C09]"
              smooth
              top="20"
              id="fill"
            />
          </div>
        </section>
      )}
    </div>
  );
};

export default App;
