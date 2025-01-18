import React from "react";
import { ErrorSVG } from "./ErrorSVG";

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <ErrorSVG />
      <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
    </div>
  );
};

export default NotFound;
