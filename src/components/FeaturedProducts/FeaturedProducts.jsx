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
      img2: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
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
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80",
      title: "Long sleve graphic t shirt",
      isNew: true,
      oldPrice: 19,
      price: 11,
    },
    {
      id: 4,
      img1: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
      title: "Long sleve graphic t shirt",
      isNew: true,
      oldPrice: 19,
      price: 11,
    },
    {
      id: 5,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80",
      title: "Long sleve graphic t shirt",
      isNew: true,
      oldPrice: 19,
      price: 11,
    },
  ];

  return (
    <div className="featuredProducts">
      <div className="top">
        <h1>{type} products</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan
          lacus vel facilisis labore et dolore magna aliqua. Quis ipsum
          suspendisse ultrices gravida. Risus commodo viverra maecenas.
        </p>
      </div>
      <div className="bottom">
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
