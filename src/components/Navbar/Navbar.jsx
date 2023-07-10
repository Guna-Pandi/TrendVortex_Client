import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  return (
    // Navbar
    <div className=" ">
      {/* Wrapper */}
      <div className=" ">
        {/* left */}
        <div>
          <div>
            <img src="img/en.png" alt="" />
            <KeyboardArrowDownIcon />
          </div>
        </div>

        {/* center */}
        <div></div>
        {/* Right */}
        <div></div>
      </div>
    </div>
  );
};

export default Navbar;
