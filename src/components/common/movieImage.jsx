import React from "react";

const MovieImage = ({ image, index }) => {
  return (
    <img
      loading="lazy"
      src={`https://image.tmdb.org/t/p/original${image.file_path}`}
      key={index}
      className="mx-3 h-32 rounded-md md:h-40 lg:h-52"
      alt="movie-image"
    />
  );
};

export default MovieImage;
