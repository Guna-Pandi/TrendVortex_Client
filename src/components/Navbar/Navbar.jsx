import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    // Navbar
    <div className=" h-20">
      {/* Wrapper */}
      <div className=" px-8 py-3 flex justify-between items-center">
        {/* left */}
        <div className=" flex items-center gap-6">
          <div className=" flex items-center text-lg">
            <img src="img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
          <div className=" flex items-center text-lg">
            <span>IND</span>
            <KeyboardArrowDownIcon />
          </div>
          <div className=" flex items-center text-lg">
            <Link to="/products/1" className=" text-inherit">
              Women
            </Link>
          </div>
          <div className=" flex items-center text-lg">
            <Link to="/products/2" className="  text-inherit">
              Men
            </Link>
          </div>
          <div className=" flex items-center text-lg">
            <Link to="/products/3" className="  text-inherit">
              Children
            </Link>
          </div>
        </div>

        {/* center */}
        <div className=" text-2xl tracking-tight">
          <Link to="/">TREND VORTEX</Link>
        </div>
        {/* Right */}
        <div className=" flex items-center gap-6">
          <div className=" flex items-center text-lg">
            <Link to="/" className="  text-inherit">
              HomePage
            </Link>
          </div>
          <div className=" flex items-center text-lg">
            <Link to="/" className="  text-inherit">
              About
            </Link>
          </div>
          <div className=" flex items-center text-lg">
            <Link to="/" className="  text-inherit">
              Contact
            </Link>
          </div>
          <div className=" flex items-center text-lg">
            <Link to="/" className="  text-inherit">
              Stores
            </Link>
          </div>
          {/* Icons */}
          <div className=" flex gap-4 text-gray-500 cursor-pointer relative">
            <SearchIcon />
            <PersonOutlineIcon />
            <FavoriteBorderOutlinedIcon />
            <div className=" ">
              <ShoppingCartOutlinedIcon />
              <span className=" text-3 h-5 w-5 rounded-[50%] bg-blue-400 text-white absolute -right-3 -top-3 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
