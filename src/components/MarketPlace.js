import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Use useNavigate for routing in React Router v6+

export const MarketPlace = () => {
  const [currentTime, setCurrentTime] = useState("");
  const [isSellerSelected, setIsSellerSelected] = useState(false); // Track if the Seller checkbox is selected
  const [isBuyerSelected, setIsBuyerSelected] = useState(false); // Track if the Buyer checkbox is selected
  const navigate = useNavigate(); // Hook for navigation

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const formattedTime = now.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(formattedTime);
    };

    const timer = setInterval(updateClock, 1000); // update every second
    updateClock();

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSellerSelected) {
      navigate("/sell");
    }
    if (isBuyerSelected) {
      navigate("/buy");
    }
    return;
  };

  return (
    <div className="MarketPlace w-full h-full mt-10 sm:mt-20 md:mt-24 flex flex-col gap-6 sm:gap-8 md:gap-10">
      <h1 className="flex flex-row items-center justify-center sm:justify-start ml-4 sm:ml-8 max-lg:text-[14px] sm:text-lg md:text-xl md:px-[21%] lg:text-2xl max-lg:text-sm max-lg:px-10 font-bold">
        MarketPlace
        {/* Time Display */}
        <div className="ml-auto sm:ml-10 bg-clip-text text-transparent bg-custom-linear-gradient font-bold text-xs sm:text-lg md:text-xl md:px-10 max-lg:text-sm max-lg:px-2 tracking-wide md:ml-auto">
          {currentTime}
        </div>
      </h1>

      {/* Seller or Buyer Selection Form */}
      <div className="flex flex-col items-center gap-4 sm:gap-6 md:gap-8 mt-4 sm:mt-6 md:mt-8">
        <p className="text-lg sm:text-xl font-semibold">You Are</p>
        <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10">
          <label className="flex items-center text-lg sm:text-xl md:text-lg lg:text-xl max-lg:text-sm ">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 focus:rounded-full dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 transition-all duration-200"
              checked={isSellerSelected}
              disabled={isBuyerSelected}
              onChange={() => setIsSellerSelected(!isSellerSelected)}
            />
            <big>Seller</big>
          </label>
          <label className="flex items-center text-lg sm:text-xl md:text-lg lg:text-xl max-lg:text-sm">
            <input
              type="checkbox"
              className="mr-2 w-4 h-4 sm:w-5 sm:h-5 text-blue-600 bg-gray-100 border-gray-300 rounded-full focus:ring-blue-500 focus:rounded-full dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 transition-all duration-200"
              disabled={isSellerSelected}
              checked={isBuyerSelected}
              onChange={() => setIsBuyerSelected(!isBuyerSelected)}
            />
            <big>Buyer</big>
          </label>
          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            type="submit"
            disabled={!isBuyerSelected && !isSellerSelected}
            className={`bg-[#0075c6] hover:bg-[#3628e5] text-white font-semibold px-4 py-2 sm:px-6 sm:py-3 md:py-3 md:px-8 rounded-full transition-all duration-300 text-xs sm:text-sm md:text-base ${
              isBuyerSelected || isSellerSelected
                ? "opacity-100"
                : "opacity-0 cursor-not-allowed"
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};
