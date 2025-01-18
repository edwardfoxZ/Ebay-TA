import React from "react";
import { FaFacebook, FaChevronDown } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { UsFlag } from "../utils/UsFlag";

export const Footer = () => {
  return (
    <div className="Footer max-w-full flex flex-col lg:flex-row items-start justify-center gap-10 lg:gap-32 border-t border-gray-200 mt-10 p-6 sm:p-8 lg:p-10 text-[13px] bg-[#f7f7f7]">
      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        <a href="" className="font-bold">
          Buy
        </a>
        <div className="flex flex-col text-gray-500 gap-2">
          <a href="">Registration</a>
          <a href="">Bidding & buying help</a>
          <a href="">Stores</a>
          <a href="">eBay for Charity</a>
          <a href="">Charity Shop</a>
          <a href="">Seasonal Sales and events</a>
          <a href="">eBay Gift Cards</a>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        <div className="flex flex-col gap-2">
          <a href="" className="font-bold">
            Sell
          </a>
          <div className="flex flex-col text-gray-500 gap-2">
            <a href="">Start selling</a>
            <a href="">How to sell</a>
            <a href="">Business sellers</a>
            <a href="">Affiliates</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a href="" className="font-bold">
            Tools & apps
          </a>
          <div className="flex flex-col text-gray-500 gap-2">
            <a href="">Developers</a>
            <a href="">Security center</a>
            <a href="">Site map</a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        <div className="flex flex-col gap-1">
          <a href="" className="font-bold">
            eBay companies
          </a>
          <div className="flex flex-col text-gray-500 gap-2">
            <a href="">TCGplayer</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p className="font-bold">Stay connected</p>
          <div className="flex flex-col text-gray-500 gap-2">
            <a href="" className="flex flex-row items-center gap-2">
              <FaFacebook />
              Facebook
            </a>
            <a href="" className="flex flex-row items-center gap-2">
              <FaXTwitter />
              Twitter
            </a>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        <a href="" className="font-bold">
          About eBay
        </a>
        <div className="flex flex-col text-gray-500 gap-2">
          <a href="">Company info</a>
          <a href="">News</a>
          <a href="">
            Deferred Prosecution Agreement with District of Massachusetts
          </a>
          <a href="">Investors</a>
          <a href="">Careers</a>
          <a href="">Diversity & Inclusion</a>
          <a href="">Global Impact</a>
          <a href="">Government relations</a>
          <a href="">Advertise with us</a>
          <a href="">Policies</a>
          <a href="">Verified Rights Owner (VeRO) Program</a>
          <a href="">eCI Licenses</a>
        </div>
      </div>

      <div className="flex flex-col gap-4 sm:gap-6 lg:gap-8">
        <div className="flex flex-col gap-2">
          <a href="" className="font-bold">
            Help & Contact
          </a>
          <div className="flex flex-col text-gray-500 gap-2">
            <a href="">Seller Center</a>
            <a href="">Contact Us</a>
            <a href="">eBay Returns</a>
            <a href="">eBay Money Back Guarantee</a>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <a href="" className="font-bold">
            Community
          </a>
          <div className="flex flex-col text-gray-500 gap-2">
            <a href="">Announcements</a>
            <a href="">eBay Community</a>
            <a href="">eBay for Business Podcast</a>
          </div>
          <div className="mt-5">
            <div className="cursor-pointer flex items-center justify-center bg-transparent border border-black p-2 rounded-lg gap-2 max-w-[160px]">
              <UsFlag />
              United States
              <FaChevronDown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
