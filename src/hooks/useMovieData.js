import { useState, useEffect } from "react";
import axios from "axios";

let API_KEY = import.meta.env.VITE_AUTH;

const useMovieData = () => {
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);
  const [validate, setValidate] = useState(false);
  const [retry, setRetry] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const pop = await axios.get(
          "https://api.themoviedb.org/3/movie/popular",
          {
            headers: {
              accept: "application/json",
              Authorization: API_KEY,
            },
          }
        );

        const topR = await axios.get(
          "https://api.themoviedb.org/3/movie/top_rated",
          {
            headers: {
              accept: "application/json",
              Authorization: API_KEY,
            },
          }
        );

        const up = await axios.get(
          "https://api.themoviedb.org/3/movie/upcoming",
          {
            headers: {
              accept: "application/json",
              Authorization: API_KEY,
            },
          }
        );

        setPopular(pop.data.results);
        setTopRated(topR.data.results);
        setUpcoming(up.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setValidate(true);
      }
    };

    fetchData();
  }, [retry]);

  return { popular, topRated, upcoming, loading, validate, retry };
};

export default useMovieData;
