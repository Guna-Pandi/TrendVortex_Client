import React from "react";
import Card from "./../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id]=${catId} ${subCats.map(item => `&[filters][subcategories][id][$eq]=${item}`)}`
  );

  return (
    <div className=" flex justify-between flex-wrap">
      {loading
        ? "Loading"
        : data.map((item) => <Card item={item} key={item.id} />)}
    </div>
  );
};

export default List;
