import React from "react";

export const UsFlag = () => {
  return (
    <>
      <img
        draggable={false}
        className="w-1/4 sm:w-1/6 md:w-1/8 lg:w-1/12 xl:w-1/16" // Responsive widths
        src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
        alt="US Flag"
      />
    </>
  );
};
