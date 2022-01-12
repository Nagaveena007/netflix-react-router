import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav/MyNav";
import Home from "./components/Home/Home";
import FooterPart from "./components/Footer/FooterPart";
import MovieList from "./components/SingleMoovie/MovieList";

function App() {
  console.log("test");
  return (
    <div className="App">
      <MyNav />
     {/*  <Home /> */}

      <MovieList />
      <FooterPart />
    </div>
  );
}

export default App;
