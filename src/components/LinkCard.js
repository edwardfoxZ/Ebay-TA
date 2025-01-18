import React from "react";

export const LinkCard = ({
  src,
  title,
  detail,
  actionName,
  buttonBg,
  buttonHv,
  textColor
}) => {
  return (
    <>
      <div className="relative w-full max-w-[90%] max-h-96 xl:max-w-[60%] shadow-md border-t-2 rounded-3xl overflow-hidden mx-auto">
        <img
          className="w-full h-full object-cover scale-110 translate-y-0 sm:-translate-y-5 md:-translate-y-8 lg:-translate-y-5 xl:-translate-y-1 max-lg:-translate-y-1 rounded-3xl"
          src={src}
          alt="Main display"
        />
        {/* Gradient Overlay */}
        <a
          href=""
          className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50 rounded-3xl"
        />
        {/* Text Overlay */}
        <div className="absolute top-10 sm:top-14 md:top-16 lg:top-20 max-lg:top-3 left-4 sm:left-8 md:left-10 lg:left-14 flex flex-col justify-center items-start gap-4 sm:gap-6 md:gap-8 max-lg:gap-1 text-white p-4 sm:p-6">
          <div className="flex flex-col gap-1 sm:gap-2 max-lg:gap-0">
            <h1 className={`text-2xl sm:text-3xl md:text-4xl max-lg:text-[15px] font-semibold ${textColor}`}>
              {title}
            </h1>
            <p className={`text-sm sm:text-base md:text-lg max-lg:text-[8px] ${textColor}`}>
              {detail}
            </p>
          </div>
          <button
            className={`font-semibold px-4 py-1 sm:px-6 sm:py-2 rounded-full transition-all duration-300 text-xs sm:text-sm md:text-base max-lg:text-[10px] ${buttonBg} ${buttonHv}`}
          >
            {actionName}
          </button>
        </div>
      </div>
    </>
  );
};
