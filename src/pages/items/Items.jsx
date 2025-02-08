import React, { useEffect, useState } from "react";
import { FaEye, FaPlus, FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Item from "./Item";

const Items = () => {
  let [items, setItems] = useState(null);
  useEffect(() => {
    fetch("https://craft-place-server-2.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);

        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <div className="items max-w-6xl mx-auto flex flex-wrap justify-around">
        {items ? (
          items.map((item, index) => {
            if (index > 3) {
              return null;
            }
            return <Item item={item} key={index}></Item>;
          })
        ) : (
          <span className="loading mt-20 mb-20 loading-dots loading-lg"></span>
        )}
      </div>
      <div className="text-center">
        <Link to="all" className="btn btn-accent w-64 my-8 font-bold text-lg">
          {" "}
          See All Items{" "}
        </Link>
        <Link to="/add" className="btn md:ml-3 btn-primary w-64">
          <FaPlus></FaPlus> Add Item
        </Link>
      </div>
    </div>
  );
};

export default Items;
