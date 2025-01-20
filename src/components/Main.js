import React from "react";
import { PopularCat } from "../utils/PopularCat";
import { LinkCard } from "./LinkCard";
import { MarketPlace } from "./MarketPlace";
import { Footer } from "./Footer";

export const Main = () => {
  return (
    <main className="Main w-full h-full flex flex-col custom-scrollbar">
      <header className="p-6 pt-10 sm:p-14 md:p-14 lg:p-14">
        <LinkCard
          buttonBg="bg-[#ffffff]"
          buttonHv="hover:bg-[#f5f5f5] text-black"
          actionName="Shop for your style"
          detail="Get fit your own way with health and wellness gear on eBay."
          src="https://i.ebayimg.com/images/g/~i0AAOSwwdJnXGOb/s-l1600.webp"
          title="You don't run with the crowd"
        />

        <div className="w-full h-full pt-6 sm:pt-10 md:pt-14">
          <h1 className="ml-[18%] max-lg:pl-7 sm:pl-8 md:pl-14 text-lg sm:text-xl md:text-2xl max-lg:text-[13px] font-bold">
            Explore Popular Categories
          </h1>
          <PopularCat />
        </div>

        <div className="flex flex-col gap-10">
          <LinkCard
            buttonBg="bg-[#ffffff]"
            buttonHv="hover:bg-[#f5f5f5] text-black"
            actionName="Get your gear"
            detail="You don't need classes or trends to live your fitness lifestyle."
            src="https://i.ebayimg.com/images/g/KYAAAOSwqj1nYDAl/s-l1600.webp"
            title="Get fit your way"
          />
          <LinkCard
            textColor="text-[#553b08]"
            buttonBg="bg-[#553b08] text-white"
            buttonHv="hover:bg-[#553b08]"
            actionName="Find your favorites"
            detail="Build your collection of trading cards and collectible card games."
            src="https://i.postimg.cc/7LhPGrnL/s-l1600.png"
            title="Discover a kaleidoscope of cards"
          />
        </div>
      </header>

      <div>
        <MarketPlace />
      </div>

      <div>
        <Footer />
      </div>
    </main>
  );
};
