import React from "react";
import EbayLogo from "../utils/EbayLogo";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const underlineBlueForLink =
  "underline text-blue-500 hover:text-blue-700 cursor-pointer";

export const Nav = ({ onClick, account }) => {
  return (
    <nav className="w-full flex flex-col text-sm">
      {/* Top Navigation */}
      <div className="flex flex-col md:flex-row sm:text-2xl max-lg:text-[10px] md:text-xs max-lg:flex-col justify-between items-center px-4 py-3 border-b border-gray-300">
        <div className="flex items-center gap-4 md:items-center">
          <div className="flex gap-1">
            Hi!
            {account ? (
              <p className="underline text-sky-400">{account}</p>
            ) : (
              <p className="flex gap-1">
                <a onClick={onClick} className={underlineBlueForLink}>
                  Sign in
                </a>
                or
                <a href="#" className={underlineBlueForLink}>
                  register
                </a>
              </p>
            )}
          </div>
          <a href="#" className="hover:underline">
            Daily Deals
          </a>
          <a href="#" className="hover:underline">
            Brand Outlet
          </a>
          <a href="#" className="hover:underline">
            Gift Cards
          </a>
          <a href="#" className="hover:underline">
            Help & Contact
          </a>
        </div>
        <div className="flex items-center gap-4 mt-3 md:mt-0">
          <a href="#" className="hover:underline">
            Ship to
          </a>
          <a href="#" className="hover:underline">
            Sell
          </a>
          <a href="#" className="hover:underline">
            Watchlist
          </a>
          <a href="#" className="hover:underline">
            Expand Watch List
          </a>
          <a href="#" className="hover:underline">
            My eBay
          </a>
        </div>
      </div>

      {/* Logo and Search Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 py-5 gap-5 border-b border-gray-300">
        <Link to="/">
          <EbayLogo />
        </Link>
        <div className="flex items-center gap-3 w-full md:max-w-4xl">
          <div className="relative flex-grow max-lg:text-[10px]">
            <FaSearch className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500" />
            <input
              className="w-full pl-10 pr-4 py-2 border border-gray-400 rounded-full text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Search for anything"
              type="text"
            />
          </div>
          <button className="bg-[#0075c6] hover:bg-[#3628e5] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300 max-lg:text-[10px]">
            Search
          </button>
        </div>
      </div>
    </nav>
  );
};
