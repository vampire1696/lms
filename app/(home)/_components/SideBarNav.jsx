"use client";
import Image from "next/image";
import React, { useState } from "react";

const SideBarNav = () => {
  const menuList = [
    {
      id: 1,
      name: "Browse",
      path: "/browse",
    },
    {
      id: 2,
      name: "News",
      path: "/news",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="h-full  bg-white border-r flex flex-col overflow-y-auto shadow-md">
      <div className="p-5 z-50 border-b-2">
        <Image src="/logo2.png" alt="logo" width={170} height={100} />
      </div>

      <div className="flex flex-col">
        {menuList.map((item, index) => (
          <div
            className={`flex gap-2 items-center p-4 px-6 text-gray-500 hover:bg-gray-100 ${
              activeIndex === index ? "bg-purple-50 text-purple-800" : null
            }`}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SideBarNav;
