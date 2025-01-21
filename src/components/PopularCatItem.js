import React from "react";
import useHover from "../hooks/useHover";

const PopularCatItem = ({ item }) => {
  const [hoverRef, isHovered] = useHover();

  return (
    <div
      ref={hoverRef}
      className="relative group w-full mx-auto flex flex-col items-center cursor-pointer"
    >
      <div className="max-w-full xl:max-w-[90%] max-lg:max-w-[80%] aspect-square overflow-hidden rounded-full shadow-md relative">
        <img
          draggable={false}
          className="w-full h-full object-cover rounded-full"
          src={item.image}
          alt={item.category}
        />
        {/* Hover Overlay */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-5 rounded-full opacity-0 ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-opacity duration-300 flex items-center justify-center`}
        />
      </div>
      {/* Label */}
      <div className="flex flex-col font-serif text-center text-xs sm:text-sm md:text-sm lg:text-lg max-lg:text-[10px] mt-3">
        {item.category}
        <span
          className={`border-[1px] border-black mt-1 ${
            isHovered ? "opacity-100" : "opacity-0"
          } transition-all duration-300`}
        />
      </div>
    </div>
  );
};

export default PopularCatItem;
