import React, { useState } from "react";

const Product = () => {
  const [selectImg, setSelectImg] = useState(0);

  const images = [
    "https://images.unsplash.com/photo-1573198721163-e9b0d696456f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80",
    "https://images.unsplash.com/photo-1545042746-ec9e5a59b359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
  ];

  return (
    // Product
    <div>
      {/* left */}
      <div>
        {/* Select images  */}
        <div>
          <img src={images[0]} alt="" onClick={(e) => setSelectImg(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectImg(1)} />
        </div>
        {/* Main image */}
        <div>
          <img src={images[selectImg]} alt="" />
        </div>
      </div>
      {/* right */}
      <div></div>
    </div>
  );
};

export default Product;
