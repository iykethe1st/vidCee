import axios from "axios";
const API_KEY = import.meta.env.VITE_AUTH;
const API_URL = import.meta.env.API_URL;

export default class MovieApi {
  // constructor(baseUrl) {
  //   this.BASE_URL = baseUrl;
  // }

  async getUpcomingMovies() {
    try {
      const response = await axios.get(`${API_URL}/3/movie/upcoming`, {
        accept: "application/json",
        Authorization: API_KEY,
      });
      return response.data.results;
    } catch (error) {
      console.error("Error fetching upcoming movies:", error);
      throw error; // rethrow the error to be caught in the component
    }
  }
}
