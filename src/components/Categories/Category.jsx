import React from "react";
import { categoryItem } from "../../Data/Category.js";
import { Link } from "react-router-dom";

function Category() {
  return (
    <div className="w-full h-full px-[2rem] max-lg:px-0 max-sm:px-2 py-3 flex items-center justify-center flex-wrap">
      {categoryItem.map((items, idx) => (
        <Link to={"/productlisting"} key={idx}>
          <div key={idx} className="flex items-center flex-wrap">
            <div className="w-full flex items-center cursor-pointer justify-between flex-wrap gap-10">
              <div className="w-[150px] max-md:w-[100px]">
                <img
                  src={items.image}
                  alt="this image"
                  className="w-full text-center py-6 rounded-xl"
                />
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Category;
