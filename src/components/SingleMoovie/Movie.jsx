import { Component } from "react";
import SingleMovie from "./SingleMovie";

const API_KEY = "2a636d89";
const BASE_URL = `https://www.omdbapi.com/?apikey=${API_KEY}&`;

const moviesToFetch = [
  "Harry potter",
  "Lord of the rings",
  "Hulk",
  "Iron Man",
  "Pirates of caribbean",
];

class Movie extends Component {
  state = {
    movies: [],
    seriesTitle: "null",
  };
  fetchMovieByTitle = async (title) => {
    try {
      const res = await fetch(`${BASE_URL}s=${title}`);
      const data = await res.json();
      const seriesTitle = data.Search;
      return seriesTitle;
    } catch (error) {
      console.log(error);
    }
  };
  fetchAllMovies = async () => {
    try {
      const movies = await Promise.all(
        moviesToFetch.map(this.fetchMovieByTitle)
      );
      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount = async () => {
    this.fetchAllMovies();
    this.fetchMovieByTitle();
  };
  render() {
    return (
      <>
        {this.state.movies.slice(0, 6).map((arrayOfMovies) => (
          <SingleMovie
            movies={arrayOfMovies}
            title={moviesToFetch}
            seriesTitle={this.seriesTitle}
          />
        ))}
      </>
    );
  }
}

export default Movie;
