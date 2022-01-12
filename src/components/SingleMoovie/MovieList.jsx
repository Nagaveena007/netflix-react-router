import { Component } from "react";
import SingleMovie from "./SingleMovie";

const API_KEY = "d87edd3";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

const fetchMovieByTitle = async (title) => {
  try {
    const res = await fetch(`${BASE_URL}s=${title}`);
    const data = await res.json();
    return data.Search;
  } catch (error) {
    console.log(error);
  }
};
const moviesToFetch = [
  "Harry potter",
  "Lord of the rings",
  "Hulk",
  "Iron Man",
  "Pirates of caribbean",
];

class MovieList extends Component {
  state = {
    movies: [],
  };
  fetchAllMovies = async () => {
    try {
      const movies = await Promise.all(moviesToFetch.map(fetchMovieByTitle));
      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.fetchAllMovies();
  };
  render() {
    return (
      <>
        {this.state.movies.map((arrayOfMovies) => (
          <SingleMovie movies={arrayOfMovies} title={moviesToFetch} />
        ))}
      </>
    );
  }
}

export default MovieList;
