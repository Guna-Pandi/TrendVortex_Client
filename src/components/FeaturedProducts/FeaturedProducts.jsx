import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const FeaturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );
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
        {error
          ? "Something went Wrong...."
          : loading
          ? "Loading"
          : data.map((item) => <Card item={item} key={item.id} />)}
      </div>
    </div>
  );
};

export default FeaturedProducts;
