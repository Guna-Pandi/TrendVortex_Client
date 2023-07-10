import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <div className="flex h-[80vh] gap-3 m-3">
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
         <button className="absolute h-12 p-3 min-w-[100px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer w-fit uppercase font-medium bg-teal-400">
            <Link className="link" to="/products/1">
              Sale
            </Link>
          </button>
        </div>
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
         <button className="absolute h-12 p-3 min-w-[100px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer w-fit uppercase font-medium bg-teal-400">
            <Link to="/products/1" className="link">
              Women
            </Link>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2">
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          {" "}
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
        <button className="absolute h-12 p-3 min-w-[100px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer w-fit uppercase font-medium bg-teal-400">
            <Link to="/products/1" className="link">
              New Season
            </Link>
          </button>
        </div>
      </div>
      <div className="flex-1 flex flex-col gap-2 ">
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 flex gap-3 relative overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
             <button className="absolute h-12 p-3 min-w-[100px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer w-fit uppercase font-medium bg-teal-400">
                <Link to="/products/1" className="link">
                  Men
                </Link>
              </button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="flex-1 flex gap-3 relative overflow-hidden">
              {" "}
              <img
                className="w-full h-full object-cover"
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
             <button className="absolute h-12 p-3 min-w-[100px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer w-fit uppercase font-medium bg-teal-400">
                <Link to="/products/1" className="link">
                  Accessories
                </Link>
              </button>
            </div>
          </div>
        </div>
        <div className="flex-1 flex gap-3 relative overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button className="absolute h-12 p-3 min-w-[100px] top-0 bottom-0 left-0 right-0 m-auto cursor-pointer w-fit uppercase font-medium bg-teal-400">
            <Link to="/products/1" className="link">
              Shoes
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Categories;
