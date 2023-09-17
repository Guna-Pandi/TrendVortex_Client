import React from "react";
import List from './../../components/List/List';

const Products = () => {
  return (
    // products
    <div className="">
      {/* left */}
      <div>
        {/* filter item */}
        <div>
          <h2>Product Categories</h2>
          <div>
            <input type="checkbox" value={1} id="1" />
            <label htmlFor="1">Shoes</label>
          </div>
          <div>
            <input type="checkbox" value={2} id="2" />
            <label htmlFor="2">Skirts</label>
          </div>
          <div>
            <input type="checkbox" value={3} id="3" />
            <label htmlFor="3">Coats</label>
          </div>
        </div>

        {/* Filter by price */}
        <div>
          <h2>Filter by price</h2>
          <div>
            <span>0</span>
            <input type="range" min={0} max={1000} />
            <span>1000</span>
          </div>
        </div>

        {/* sort by price */}
        <div>
          <h2>Sort by price</h2>
          <div>
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor="asc">Price(Lowest First)</label>
          </div>
          <div>
            <input type="radio" id="asc" value="asc" name="price" />
            <label htmlFor="asc">Price(Highest First)</label>
          </div>
        </div>
      </div>

      {/* right */}
      <div>
        <img src="https://images.unsplash.com/photo-1682687219356-e820ca126c92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="" />
        <List/>
      </div>
    </div>
  );
};

export default Products;
