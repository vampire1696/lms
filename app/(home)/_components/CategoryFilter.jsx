"use client";
import React, { useState } from "react";

const CategoryFilter = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const filterOptions = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "ReactJs", value: "react" },
  ];
  return (
    <div className="flex gap-5">
      {filterOptions.map((item, index) => (
        <button
          key={index}
          onClick={() => setActiveIndex(index)}
          className={`border p-2 px-4 text-sm rounded-md hover:border-purple-500 font-semibold hover:bg-gray-50 ${
            activeIndex == index
              ? "border-purple-500 bg-purple-50 text-purple-800"
              : null
          }`}
        >
          <h2>{item.name}</h2>
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
