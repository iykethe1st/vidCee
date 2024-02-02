// MovieCard.jsx

import React from "react";

const MovieCard = ({ img, hasMarginTop }) => {
  return (
    <div
      className={`h-40 w-fit overflow-hidden rounded-md shadow-lg shadow-txt dark:shadow-white/10 lg:h-60 lg:w-36 ${
        hasMarginTop ? "mt-10" : "" // Apply margin-top conditionally
      }`}
    >
      <img src={img} className="h-full w-full object-cover" alt="movie" />
    </div>
  );
};

export default MovieCard;
