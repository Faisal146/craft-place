import React from 'react';
import { FaEye, FaStar } from "react-icons/fa";
import { Link } from 'react-router-dom';


const Item = (children) => {

    console.log(children.item.name)

   let {_id,image,name,subcategory,short_description, customization, stock_status, price, rating, Processing_time, user_email, user_name} = children.item

    return (
     
            <div className="md:w-1/3">
        <div className="card bg-base-100 shadow-xl p-3 m-2">

            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp" alt="Shoes" className="rounded-lg"
            />

          <div className="my-3">
            <div className="flex justify-between">
                <h3 className="text-gray-500 uppercase">{subcategory}</h3>
                <h3 className="text-gray-800 uppercase flex items-center text-xl gap-2"> <FaStar className="text-yellow-600"></FaStar> <span className="mb-2">4.9</span>  </h3>
            </div>
            
            <h2 className="card-title">{name}</h2>
            <div className="flex justify-between">
                <h2 className="text-2xl mt-3 font-bold text-gray-600">{price}</h2>
                <p className="btn btn-sm  mt-2"> {stock_status} </p>

            </div>
            
             <div className="card-actions justify-end">
              <Link to={`/details/${_id}`} className="btn btn-primary w-full btn-sm mt-4"> <FaEye></FaEye>  See Details</Link>
            </div>
          </div>
        </div>
        </div>
    );
};

export default Item;
