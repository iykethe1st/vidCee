import { useState, useEffect } from "react";
import axios from "axios";
let API_KEY = import.meta.env.VITE_AUTH;

const useMovieDetails = (movieId) => {
  const [movie, setMovie] = useState({});
  const [movieImg, setMovieImg] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [movieVids, setMovieVids] = useState([]);
  const [retry, setRetry] = useState(false);
  const [loading, setLoading] = useState(true);
  const [validate, setValidate] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movieDetails = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}`,
          {
            params: { language: "en-US" },
            headers: {
              accept: "application/json",
              Authorization: API_KEY,
            },
          }
        );

        const recommend = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/similar`,
          {
            params: { language: "en-US", page: "1" },
            headers: {
              accept: "application/json",
              Authorization: API_KEY,
            },
          }
        );

        const images = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/images`,
          {
            headers: {
              accept: "application/json",
              Authorization: API_KEY,
            },
          }
        );

        const videos = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/videos`,
          {
            headers: {
              accept: "application/json",
              Authorization: API_KEY,
            },
          }
        );

        setMovie(movieDetails.data);
        setRecommendations(recommend.data.results);
        setMovieImg(images.data.backdrops);
        setMovieVids(videos.data.results);
        setLoading(false);
      } catch (error) {
        console.error(error.response);
        setValidate(true);
      }
    };

    fetchData();
  }, [movieId, retry]);

  return {
    movie,
    movieImg,
    recommendations,
    movieVids,
    retry,
    loading,
    validate,
    setRetry,
  };
};

export default useMovieDetails;
