import { useState, useEffect } from "react";
import { movieID } from "../../constants/store";
import Details from "../details/details";
import loader from "../../assets/loader.svg";
import MovieTile from "../../components/common/movieTile";
import useMovieData from "../../hooks/useMovieData";

function Trend() {
  const [popUp, setPopUp] = useState(false);
  const [id, setId] = useState(movieID);

  const { popular, topRated, upcoming, loading, validate, retry } =
    useMovieData();

  const close = () => {
    setPopUp(false);
  };

  const handleClick = (movieId) => {
    setId(movieId);
    setPopUp(true);
  };

  return (
    <div className="py-5">
      <p
        className={`mt-5 w-fit rounded-sm border-b-[3px] border-purple py-1 pl-2 pr-5 text-xl font-black text-purple lg:text-2xl ${
          loading ? "hidden" : "block"
        }`}
      >
        Popular
      </p>
      {popUp ? <Details id={id} close={close} /> : ""}

      {/* LOADING */}
      <section className="relative isolate flex justify-center">
        {loading ? (
          <div className="h-1/10 mt-10 flex w-full justify-center">
            <div className="z-10 flex h-fit w-1/2 justify-center rounded-md border-[1px] border-purple bg-gray-400 backdrop-blur-md dark:bg-txt/40 lg:w-1/3">
              {validate ? (
                <div className="my-5 flex flex-col items-center justify-around">
                  <p className="p-3 text-center font-extrabold text-primaryDark dark:text-white/80">
                    Error 😵
                  </p>

                  <button
                    className="mb-3 rounded-3xl border-2 border-purple px-12 py-3 font-bold text-primaryDark dark:bg-primaryDark dark:text-white/80"
                    onClick={() => {
                      setRetry(!retry);
                      setValidate(false);
                    }}
                  >
                    Retry
                  </button>
                </div>
              ) : (
                <img className="h-28" src={loader} />
              )}
            </div>
          </div>
        ) : (
          ""
        )}
      </section>

      {/* POPULAR */}

      <section className="no-scrollbar mt-10 flex overflow-y-hidden overflow-x-scroll">
        {popular &&
          popular.map((movie) => (
            <MovieTile onClick={handleClick} movie={movie} />
          ))}
      </section>

      {/* TOP RATED */}
      <p
        className={`mt-5 w-fit rounded-sm border-b-[3px] border-purple py-1 pl-2 pr-5 text-xl font-black text-purple lg:text-2xl ${
          loading ? "hidden" : "block"
        }`}
      >
        Top Rated
      </p>
      <section className="no-scrollbar mt-10 flex overflow-y-hidden overflow-x-scroll">
        {topRated &&
          topRated.map((movie) => (
            <MovieTile onClick={handleClick} movie={movie} />
          ))}
      </section>

      {/* UPCOMING */}
      <p
        className={`mt-5 w-fit rounded-sm border-b-[3px] border-purple py-1 pl-2 pr-5 text-xl font-black text-purple lg:text-2xl ${
          loading ? "hidden" : "block"
        }`}
      >
        Upcoming
      </p>
      <section className="no-scrollbar mt-10 flex overflow-y-hidden overflow-x-scroll">
        {upcoming &&
          upcoming.map((movie) => (
            <MovieTile onClick={handleClick} movie={movie} />
          ))}
      </section>
    </div>
  );
}

export default Trend;
