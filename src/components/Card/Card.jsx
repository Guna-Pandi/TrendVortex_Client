// import React from "react";
// import { Link } from "react-router-dom";

// const Card = ({ item }) => {
//   console.log(item);
//   return (
//     <Link className="link" to={`/product/${item.id}`}>
//       <div className="card">
//         <div className="image">
//           {item?.attributes.isNew && <span>New Season</span>}
//           <img
//             src={
//               process.env.REACT_APP_UPLOAD_URL + item.attributes?.img?.data?.attributes?.url
//             }
//             alt=""
//             className="mainImg"
//           />
//           <img
//             src={
//               process.env.REACT_APP_UPLOAD_URL + item.attributes?.img2?.data?.attributes?.url
//             }
//             alt=""
//             className="secondImg"
//           />
//         </div>
//         <h2>{item?.attributes.title}</h2>
//         <div className="prices">
//           <h3>${item.oldPrice || item?.attributes.price + 20}</h3>
//           <h3>${item?.attributes.price}</h3>
//         </div>
//       </div>
//     </Link>
//   );
// };

// export default Card;
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className=" w-[300px] flex flex-col gap-3" to={`/product/${item.id}`}>
      <div className=" card">
        <div className="w-full h-[400px] overflow-hidden relative group">
          {item.isNew && (
            <span className=" absolute top-1 left-1 text-teal-500 px-[5px] py-1 z-[3] bg-slate-200 text-xs font-medium">
              {" "}
              New Season
            </span>
          )}
          <img
            src={item.img}
            alt=""
            className="w-full h-full object-cover absolute transition-opacity duration-300"
          />
          <img
            src={item.img2}
            alt=""
            className="w-full h-full object-cover absolute opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        <h2 className=" text-base font-normal">{item.title}</h2>
        <div className=" flex gap-5">
          <h3 className=" text-lg font-medium text-gray-400 line-through">
            ${item.oldPrice}
          </h3>
          <h3 className=" text-lg font-medium ">${item.price}</h3>
        </div>
      </div>
    </Link>
  );
};

export default Card;
