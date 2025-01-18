import React from "react";
import PopularCatData from "../data/PopularCat.json";
import PopularCatItem from "../components/PopularCatItem";

export const PopularCat = () => {
  return (
    <div className="PopularCat max-w-[64%] max-lg:max-w-[90%] h-full p-14 mx-auto">
      <header className="grid grid-cols-7 sm:grid-cols-7 lg:grid-cols-7 xl:grid-cols-7 max-lg:grid-cols-3">
        {/* Single Item */}
        {PopularCatData.map((item) => (
          <PopularCatItem key={item.id} item={item} />
        ))}
      </header>
    </div>
  );
};
