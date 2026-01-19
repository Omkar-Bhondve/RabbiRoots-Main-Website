import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSearch, clearSearch } from "../../features/SearchSlice.js";

function Search() {
  const products = ["Ghee", "Curd", "Water", "Milk", "Sugar", "Oil"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 2000); // change every 2 sec

    return () => clearInterval(interval);
  }, []);

  const dispatch = useDispatch();
  const { term, items } = useSelector((state) => state.search);

  const handleChange = (e) => {
    dispatch(setSearch(e.target.value));
  };

  const handleSelect = () => {
    dispatch(clearSearch());
  };

  return (
    <div className="relative w-1/2">
      <div className="bg-zinc-100 py-3 px-5 flex items-center gap-2 rounded-xl hover:bg-zinc-200 transition-all duration-300">
        <i className="ri-search-line"></i>
        <input
          type="text"
          placeholder={`Search ${products[index]}...`}
          className="border-transparent w-full outline-none bg-transparent"
          onChange={handleChange}
          value={term}
        />
      </div>

      {term && (
        <div className="absolute top-full left-0 w-full bg-white shadow-lg rounded-lg mt-2 max-h-[30rem] overflow-y-auto z-50">
          {items.length === 0 ? (
            <p className="p-3 text-gray-500">No results found</p>
          ) : (
            items.map((item) => (
              <Link to={`/showitem/${item.globalId}`} key={item.globalId}>
                <div
                  className="p-3 hover:bg-gray-100 cursor-pointer"
                  onClick={handleSelect}
                >
                  <div className="flex items-center gap-3">{item.name}</div>
                </div>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Search;
