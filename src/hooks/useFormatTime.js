import React from "react";

export const useFormatTime = () => {
  // Format the end date
  const formatDate = (timestamp) => {
    const date = new Date(timestamp * 1000); // Convert to milliseconds
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  return { formatDate };
};
