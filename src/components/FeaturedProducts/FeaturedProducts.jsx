import React from "react";
import Card from "../Card/Card";
// import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  //   const { data, loading, error } = useFetch(
  //     `/products?populate=*&[filters][type][$eq]=${type}`
  //   );
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80",
      img2: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Long sleve graphic t shirt",
      isNew: true,
      oldPrice: 19,
      price: 11,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
      title: "Long sleve graphic t shirt",
      isNew: true,
      oldPrice: 19,
      price: 11,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      title: "Long sleve graphic t shirt",
      isNew: false,
      oldPrice: 19,
      price: 11,
    },
    {
      id: 4,
      img: "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Long sleve graphic t shirt",
      isNew: false,
      oldPrice: 19,
      price: 11,
    },
  ];

  return (
    <div className="my-[100px] mx-[200px]">
      <div className="flex flex-row justify-between items-center mb-12">
        <h1 className="basis-1/4 capitalize text-3xl font-medium">
          {type} products
        </h1>
        <p className="basis-1/2  text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida.
        </p>
      </div>
      <div className=" flex justify-center gap-12">
        {/* {error
          ? "Something went wrong!"
          : loading
          ? "loading"
          : 
          data?.map((item) =>
           <Card item={item}
            key={item.id} />)} */}
        {data.map((item) => (
          <Card item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
