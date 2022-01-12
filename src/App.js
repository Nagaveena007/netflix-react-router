import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav";
import FooterPart from "./components/Footer/FooterPart";
import MovieList from "./components/SingleMoovie/MovieList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import TvShows from "./components/TvShows/TvShows";
import Details from "./components/Details/Details";
import Movie from "./components/SingleMoovie/Movie";

function App() {
  console.log("test");
  return (
    <BrowserRouter>
      <MyNav />
      <div className="App">
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="/details/:movieID" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <FooterPart />
      </div>
    </BrowserRouter>
  );
}

export default App;
