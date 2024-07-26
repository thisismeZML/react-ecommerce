import React from "react";
import { NavLink } from "react-router-dom";

const Categories = ({ category, setSearchParams, activeCategory }) => {
  return (
    <button
      onClick={() => setSearchParams({ category})}
      className={`capitalize category-item text-[14px] cursor-pointer flex  ${
        activeCategory === category ? "active" : ""
      }`}
    >
      
        {category}
      
    </button>
  );
};

export default Categories;
