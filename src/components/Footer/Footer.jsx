import React from "react";

const Footer = () => {
  return (
    // footer
    <div className=" mt-24 mr-[100px] mb-5 ml-[100px]">
      {/* top */}
      <div className=" flex gap-12">
        {/* item */}
        <div className=" flex-1 flex flex-col gap-2 text-justif">
          <h1 className="text-lg  text-[#555] font-medium">Categories</h1>
          <span className=" text-gray-500">Women</span>
          <span className=" text-gray-500">Men</span>
          <span className=" text-gray-500">Shoes</span>
          <span className=" text-gray-500">Accessories</span>
          <span className=" text-gray-500">New Arrivals</span>
        </div>
        <div className=" flex-1 flex flex-col gap-2 text-justify">
          <h1 className="text-lg text-[#555] font-medium">Links</h1>
          <span className=" text-gray-500">FAQ</span>
          <span className=" text-gray-500">Pages</span>
          <span className=" text-gray-500">Stores</span>
          <span className=" text-gray-500">Compare</span>
          <span className=" text-gray-500">Cookies</span>
        </div>
        <div className=" flex-1 flex flex-col gap-2 text-justify">
          <h1 className="text-lg  text-[#555] font-medium">About</h1>
          <span className=" text-gray-500">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
        <div className=" flex-1 flex flex-col gap-2 text-justify">
          <h1 className="text-lg  text-[#555] font-medium">Contact</h1>
          <span className=" text-gray-500">
            Lorem ipsum dolor sit amet conse ctetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore. Lorem ipsum dolor sit
            amet conse ctetur adipisicing elit, seddo eiusmod tempor incididunt
            ut labore etdolore.
          </span>
        </div>
      </div>
      {/* bottom */}
      <div className=" flex items-center justify-between mt-12">
        {/* left */}
        <div className=" flex items-center">
          <span className=" text-teal-400 font-bold text-xl">TREND VORTEX</span>
          <span className=" text-gray-500 ml-6 text-base">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        {/* right */}
        <div>
          <img src="/img/payment.png" alt="" className=" h-12" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
