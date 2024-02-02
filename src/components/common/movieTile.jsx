import React from "react";

const MovieTile = ({ movie, onClick }) => {
  const handleClick = () => {
    onClick(movie.id);
  };

  return (
    <div
      key={movie.id}
      className="mr-4 min-h-fit w-44 flex-none overflow-clip rounded-md border-2 border-transparent bg-gray-100/80 transition-all duration-300 ease-linear hover:border-2 hover:border-purple dark:bg-txt/30"
      onClick={handleClick}
    >
      <figure className="flex justify-center">
        <img
          className="h-56 rounded-md transition-all duration-500 hover:scale-110 md:h-60 lg:h-64"
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt=""
        />
      </figure>

      {/* NAME */}
      <article className="relative isolate z-0">
        <div className="absolute -top-6 ml-2 flex h-8 w-8 items-center justify-center rounded-full border-2 border-purple  bg-gray-100/80 dark:bg-txt/90 ">
          <p className="text-sm text-txt dark:text-white/70">
            {Math.round(movie.vote_average * 10)}
            <sup className="text-[0.5rem]">%</sup>
          </p>
        </div>
        <p className="ml-2 pt-2 font-medium text-txt dark:text-white/70">
          {movie.title}
        </p>

        <p className="ml-2 mt-3 font-medium text-txt/60 dark:text-white/40">
          {movie.release_date.slice(0, 4)}
        </p>
      </article>
    </div>
  );
};

export default MovieTile;
