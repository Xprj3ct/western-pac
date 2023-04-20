import React from "react";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai"
import { FaTwitterSquare } from "react-icons/fa"

const Button = () => {
  return (
    <div className="flex items-start pl-4 md:items-center flex-col md:flex-row gap-6">
      <div className="flex items-center md:items-center gap-4 text-3xl">
        <button className="btn text-gray-600">
          <AiFillFacebook />
        </button>
        <span className="text-sm flex items-center">|</span>

        <button className="btn text-gray-600">
          <AiFillInstagram />
        </button>
        <span className="text-sm flex items-center">|</span>

        <button className="btn text-gray-600">
          <FaTwitterSquare />
        </button>
      </div>
      <button className="bg-primary text-white  px-6 py-2 rounded-full">
        0808 668 8557
      </button>
    </div>
  );
};

export default Button;
