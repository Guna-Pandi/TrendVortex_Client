import React from "react";
import Card from "./../Card/Card";

const List = () => {
  const data = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80",
      img2: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Long sleeve graphic t-shirt",
      isNew: true,
      oldPrice: 19,
      price: 11,
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
      title: "Long sleeve graphic t-shirt",
      isNew: true,
      oldPrice: 19,
      price: 11,
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
      title: "Long sleeve graphic t-shirt",
      isNew: false,
      oldPrice: 19,
      price: 11,
    },
    {
      id: 4,
      img: "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
      title: "Long sleeve graphic t-shirt",
      isNew: false,
      oldPrice: 19,
      price: 11,
    },
    {
        id: 5,
        img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=420&q=80",
        img2: "https://images.unsplash.com/photo-1601762603339-fd61e28b698a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        title: "Long sleeve graphic t-shirt",
        isNew: true,
        oldPrice: 19,
        price: 11,
      },
      {
        id: 6,
        img: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=386&q=80",
        title: "Long sleeve graphic t-shirt",
        isNew: true,
        oldPrice: 19,
        price: 11,
      },
      {
        id: 7,
        img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1888&q=80",
        title: "Long sleeve graphic t-shirt",
        isNew: false,
        oldPrice: 19,
        price: 11,
      },
      {
        id: 8,
        img: "https://plus.unsplash.com/premium_photo-1673758905770-a62f4309c43c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
        title: "Long sleeve graphic t-shirt",
        isNew: false,
        oldPrice: 19,
        price: 11,
      },
  ];

  return (
    <div className=" flex justify-between flex-wrap">
      {data.map((item) => (
        <Card item={item} key={item.id} />
      ))}
    </div>
  );
};

export default List;
