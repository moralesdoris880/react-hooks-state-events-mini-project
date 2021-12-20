import React from "react";

function CategoryFilter({CATEGORIES, onCategoryChange}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {
      CATEGORIES.map((category)=>(
        <button onClick={onCategoryChange}>{category}</button>
      ))
      }
    </div>
  );
}

export default CategoryFilter;
