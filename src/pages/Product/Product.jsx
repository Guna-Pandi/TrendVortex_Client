import React, { useState } from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { LuScale } from "react-icons/lu";

const Product = () => {
  const [selectImg, setSelectImg] = useState(0);
  const [selectQty, setSelectQty] = useState(1);

  const images = [
    "https://images.unsplash.com/photo-1573198721163-e9b0d696456f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    "https://images.unsplash.com/photo-1545042746-ec9e5a59b359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  ];

  return (
    // Product
    <div className="px-8 py-10 flex gap-12">
      {/* left */}
      <div className="flex-1 flex gap-6">
        {/* Select images */}
        <div className="basis-1/5">
          <img
            src={images[0]}
            alt=""
            onClick={() => setSelectImg(0)}
            className="w-full h-36 object-cover cursor-pointer mb-3"
          />
          <img
            src={images[1]}
            alt=""
            onClick={() => setSelectImg(1)}
            className="w-full h-36 object-cover cursor-pointer mb-3"
          />
        </div>
        {/* Main image */}
        <div className="basis-4/5">
          <img
            src={images[selectImg]}
            alt=""
            className="w-full  h-[650px] object-cover"
          />
        </div>
      </div>
      {/* right */}
      <div className=" flex-1 flex flex-col gap-7">
        {/* Title */}
        <h1 className=" text-3xl font-semibold">Title</h1>
        {/* Price */}
        <span className=" text-lg text-blue-500 font-semibold">₹299</span>
        {/* Description */}
        <p className=" text-lg font-thin text-left ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur, id!
          Exercitationem error excepturi sapiente dolores provident officia
          accusamus ex illo.
        </p>
        {/* Quantity */}
        <div className=" flex items-center gap-3">
          {/* - */}
          <button
            className=" w-12 h-12 flex items-center justify-center cursor-pointer border-none bg-gray-300 rounded-md"
            onClick={(e) =>
              setSelectQty((prev) => (prev === 1 ? 1 : prev - 1))
            }>
            -
          </button>
          {/* + */}
          {selectQty}
          <button
            onClick={(e) => setSelectQty((prev) => prev + 1)}
            className=" w-12 h-12 flex items-center justify-center cursor-pointer border-none bg-gray-300 rounded-md">
            +
          </button>
        </div>
        {/* add icon */}
        <button className=" w-56 p-3 bg-blue-400 text-white flex items-center gap-5 rounded-md cursor-pointer justify-center border-none font-medium">
          <MdAddShoppingCart />
          ADD TO CART
        </button>
        {/* Links */}
        <div className=" flex gap-5">
          {/* favourite */}
          <div className=" flex items-center gap-3 text-blue-400 text-sm font-medium">
            <MdFavoriteBorder className=" text-lg" /> ADD TO FAVOURITE
          </div>
          {/* Compare */}
          <div className=" flex items-center gap-3 text-blue-400 text-base font-medium">
            <LuScale className=" text-lg" /> ADD TO COMPARE
          </div>
        </div>
        {/* info */}
        <div className=" flex flex-col gap-3 text-gray-400 text-md mt-5 font-medium">
          <span>Vendor: Polo</span>
          <span>Product Type: T-Shirt</span>
          <span>Tag: T-Shirt,Men,Top</span>
        </div>
        <hr className=" border-solid border-[1px] border-gray-300" />
        {/* details */}
        <div className=" flex flex-col gap-3 text-gray-400 text-md mt-1 font-medium">
          <span>DESCRIPTION</span>
          <hr className=" w-52 border-solid border-[1px] border-gray-300" />
          <span>ADDITIONAL INFORMATION</span>
          <hr className=" w-52 border-solid border-[1px] border-gray-300" />
          <span>FAQ</span>
        </div>
      </div>
    </div>
  );
};

export default Product;
