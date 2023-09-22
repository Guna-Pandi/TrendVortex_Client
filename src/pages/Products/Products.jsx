import React, { useState } from "react";
import List from "./../../components/List/List";
import { useParams } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

const Products = () => {
  const catId = parseInt(useParams().id);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [sort, setSort] = useState(null);
  const [selectedSubCats, setSelectedSubCats] = useState([]);

  const { data, loading, error } = useFetch(
    `/subcategories?[filters][categories][id][$eq]=${catId}`
  );
  console.log(data);
  const handleChange = (e) => {
    const value = e.target.value;
    const isChecked = e.target.checked;
    setSelectedSubCats(
      isChecked
        ? [...selectedSubCats, value]
        : selectedSubCats.filter((item) => item !== value)
    );
  };
  console.log(selectedSubCats);
  return (
    // products
    <div className=" pr-6 pl-10 flex ">
      {/* left */}
      <div className=" basis-1/4 sticky h-full top-10">
        {/* filter item */}
        <div className=" mb-7">
          <h2 className=" text-lg font-semibold mb-5">Product Categories</h2>
          {data?.map((item) => (
            <div key={item.id}>
              <input
                type="checkbox"
                value={item.id}
                id={item.id}
                onChange={handleChange}
                className=" mb-2"
              />
              <label htmlFor={item.id} className="ml-2">
                {item.attributes.title}
              </label>
            </div>
          ))}
        </div>

        {/* Filter by price */}
        <div className=" mb-7">
          <h2 className=" text-lg font-semibold mb-5">Filter by price</h2>
          <div>
            <span>0</span>
            <input
              type="range"
              min={0}
              max={1000}
              onChange={(e) => setMaxPrice(e.target.value)}
              className=" mb-2"
            />
            <span>{maxPrice}</span>
          </div>
        </div>

        {/* sort by price */}
        <div className=" mb-7">
          <h2 className=" text-lg font-semibold mb-5">Sort by price</h2>
          <div>
            <input
              type="radio"
              id="asc"
              value="asc"
              name="price"
              onChange={(e) => setSort("asc")}
              className=" mb-2"
            />
            <label htmlFor="asc" className="ml-2">
              Price(Lowest First)
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="dec"
              value="dec"
              name="price"
              onChange={(e) => setSort("dec")}
              className=" mb-2"
            />
            <label htmlFor="dec" className="ml-2">
              Price(Highest First)
            </label>
          </div>
        </div>
      </div>

      {/* right */}
      <div className=" basis-3/4">
        <img
          src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
          className=" w-full h-[400px] object-cover mb-10"
        />
        <List
          catId={catId}
          maxPrice={maxPrice}
          sort={sort}
          subCats={selectedSubCats}
        />
      </div>
    </div>
  );
};

export default Products;
