import React from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";

const Cart = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      title: "Long sleeve graphic t-shirt",
      isNew: false,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      oldPrice: 19,
      price: 11,
    },
  ];
  return (
    // cart
    <div className=" absolute right-5 top-24 z-[999] bg-gray-100 p-5 shadow-gray-800 rounded-md">
      <h1 className=" mb-7 text-gray-500 font-medium text-2xl">
        Products in your Cart
      </h1>
      {data?.map((item) => (
        //item
        <div key={item.id} className=" flex items-center gap-5 mb-7">
          <img src={item.img} alt="" className=" w-20 h-24 object-cover" />
          {/* details */}
          <div>
            <h1 className=" mb-7 text-gray-600 font-medium text-lg">
              {item.title}
            </h1>
            <p className=" text-gray-500 mb-3 text-sm">
              {item.desc?.substring(0, 100)}
            </p>
            <div className=" text-blue-400">1 x ₹{item.price}</div>
          </div>
          <MdOutlineDeleteOutline className=" text-red-600 text-2xl cursor-pointer" />
        </div>
      ))}
      {/* total */}
      <div className=" flex justify-between font-medium text-xl mb-5">
        <span>SUBTOTAL</span>
        <span className=" text-blue-600">₹299</span>
      </div>
      <button className=" w-56 p-3 bg-blue-400 text-white flex items-center gap-5 rounded-md cursor-pointer justify-center border-none font-medium mb-5">
        PROCEED TO CHECKOUT
      </button>
      <span className=" text-red-600  cursor-pointer font-medium">
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
