import React from "react";

export const Sell = () => {
  return (
    <div className="Sell w-full h-full flex flex-col items-start">
      {/* Header */}
      <div className="w-full md:w-9/12 border-b border-gray-300 py-3">
        <h1 className="ml-4 md:ml-8 text-base sm:text-lg md:text-xl font-semibold">
          Selling
        </h1>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-9/12 h-full">
        <div className="max-w-[75%] h-[32rem] relative Background-seller bg-gray-100">
          <div className="bg-white py-10 px-8 w-11/12 md:w-[28%] absolute top-36 right-40 rounded-lg shadow-lg">
            <h1 className="text-lg sm:text-3xl font-bold text-gray-800">
              Make money selling on eBay
            </h1>
            <p className="mt-2 text-sm sm:text-lg text-gray-600">
              Sell your items fast—millions of buyers are waiting.
            </p>
            <button className="mt-4 w-full px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-sm sm:text-xs font-semibold transition-all duration-300">
              List an Item
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-start md:w-8/12 mt-10">
        <h1 className="ml-4 md:ml-8 text-base sm:text-xl md:text-3xl font-bold">
          Learn the basics
        </h1>
        <p className="ml-4 mt-3 md:ml-8 text-base sm:text-sm md:text-sm font-thin">
          Here's what you need to know to start selling.
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-20 p-10">
        {/* Step 1 */}
        <div className="flex flex-col items-start gap-3 max-w-xs">
          <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center">
            <p className="text-black text-base sm:text-sm md:text-xl font-bold">
              1
            </p>
          </div>
          <p className="font-bold text-base sm:text-sm md:text-lg">
            List your item
          </p>
          <p className="font-thin text-gray-600 text-sm sm:text-xs md:text-sm">
            You can list new or used items and pay a final value fee only when
            it sells.
            <a href="#" className="underline">
              Learn more about fees
            </a>
            &nbsp;- opens in new window or tab.
          </p>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-start gap-3 max-w-xs">
          <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center">
            <p className="text-black text-base sm:text-sm md:text-xl font-bold">
              2
            </p>
          </div>
          <p className="font-bold text-base sm:text-sm md:text-lg">
            Get seller protection
          </p>
          <p className="font-thin text-gray-600 text-sm sm:text-xs md:text-sm">
            You’re protected by policies, monitoring, and our customer service
            team.
          </p>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-start gap-3 max-w-xs">
          <div className="bg-gray-200 rounded-full w-14 h-14 flex items-center justify-center">
            <p className="text-black text-base sm:text-sm md:text-xl font-bold">
              3
            </p>
          </div>
          <p className="font-bold text-base sm:text-sm md:text-lg">
            Choose when you get paid
          </p>
          <p className="font-thin text-gray-600 text-sm sm:text-xs md:text-sm">
            You can schedule either daily or weekly payouts, and we'll deposit
            your earnings directly into your bank account.
          </p>
        </div>
      </div>
    </div>
  );
};
