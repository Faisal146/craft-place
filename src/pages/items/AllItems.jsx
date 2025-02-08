import { useEffect, useState } from "react";
import Item from "./Item";
import titleBg from "../../assets/postero-bg-6.jpg";
import { FaFilter, FaPlus } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { Link, useParams } from "react-router-dom";

const AllItems = () => {
  let [items, setItems] = useState(null);

  let { filter } = useParams();

  useEffect(() => {
    fetch("https://craft-place-server-2.vercel.app/items")
      .then((res) => res.json())
      .then((data) => {
        setItems(data);

        console.log(data);
      })
      .catch((error) => console.log(error));

    if (filter) {
      fetch("https://craft-place-server-2.vercel.app/items").then((data) => {
        console.log(data);
      });
    }
  }, []);

  return (
    <div>
      <div
        className="bg-base-200 py-16 my-10 text-center "
        style={{
          background: `url(${titleBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <h1 className="text-4xl text-center">
          All Art and Drawing Items : {filter ? filter : ""}
        </h1>
        <Link to="/add" className="btn mt-6 btn-primary w-64">
          <FaPlus></FaPlus> Add Item
        </Link>
      </div>

      <div className="drawer block md:hidden">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label
            htmlFor="my-drawer"
            className="btn ml-6 btn-primary drawer-button"
          >
            {" "}
            <FaFilter></FaFilter> Filter
          </label>
        </div>
        <div className="drawer-side z-50">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
            {/* Sidebar content here */}
            <div className="my-4">
              <h1 className="mb-3 font-bold text-xl">Filter Customization</h1>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">No</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-red-500"
                    defaultChecked
                  />
                </label>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Yes</span>
                  <input
                    type="radio"
                    name="radio-10"
                    className="radio checked:bg-blue-500"
                    defaultChecked
                  />
                </label>
              </div>
            </div>
            <div className="mt-7">
              <h1 className="text-2xl mb-3 font-bold">Categories</h1>

              <h1 className="text-xl text-gray-600 pl-2 pt-3">
                Landscape Painting
              </h1>

              <h1 className="text-xl text-gray-600 pl-2 pt-3">
                Portrait Drawing
              </h1>

              <h1 className="text-xl text-gray-600 pl-2 pt-3">Oil Painting</h1>
              <h1 className="text-xl text-gray-600 pl-2 pt-3">
                Charcoal Sketching
              </h1>
              <h1 className="text-xl text-gray-600 pl-2 pt-3">
                Watercolour Painting
              </h1>
              <h1 className="text-xl text-gray-600 pl-2 pt-3">
                Cartoon Drawing
              </h1>

              <label
                htmlFor="my-drawer"
                className="btn mt-5 btn-primary drawer-button"
              >
                {" "}
                <FaFilter></FaFilter> Apply
              </label>
              <label
                htmlFor="my-drawer"
                className="btn mt-5 ml-2 btn-info drawer-button"
              >
                {" "}
                <FaXmark></FaXmark> Close
              </label>
            </div>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex gap-4 mb-16">
        <div className="left pr-4 border-r-2  w-64 md:block hidden">
          <div className="my-4">
            <h1 className="mb-3 font-bold text-xl">Filter Customization</h1>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">No</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-red-500"
                  defaultChecked
                />
              </label>
            </div>
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Yes</span>
                <input
                  type="radio"
                  name="radio-10"
                  className="radio checked:bg-blue-500"
                  defaultChecked
                />
              </label>
            </div>
          </div>
          <div className="mt-7">
            <h1 className="text-2xl mb-3 font-bold">Categories</h1>

            <h1 className="text-xl text-gray-600 pl-2 pt-3">
              Landscape Painting
            </h1>

            <h1 className="text-xl text-gray-600 pl-2 pt-3">
              Portrait Drawing
            </h1>

            <h1 className="text-xl text-gray-600 pl-2 pt-3">Oil Painting</h1>
            <h1 className="text-xl text-gray-600 pl-2 pt-3">
              Charcoal Sketching
            </h1>
            <h1 className="text-xl text-gray-600 pl-2 pt-3">
              Watercolour Painting
            </h1>
            <h1 className="text-xl text-gray-600 pl-2 pt-3">Cartoon Drawing</h1>
          </div>
        </div>
        <div className="right flex flex-1 flex-wrap">
          {items ? (
            items.map((item, index) => {
              return <Item item={item} key={index}></Item>;
            })
          ) : (
            <span className="loading mx-auto mt-20 mb-20 loading-dots loading-lg"></span>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllItems;
