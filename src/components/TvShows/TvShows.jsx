import { Component } from "react";
import { Container, Alert, Dropdown, Row, Col } from "react-bootstrap";
import MyNav from "../MyNav/MyNav";
import MyFooter from "../Footer/FooterPart";
import MovieList from "../SingleMoovie/MovieList";
import CommentArea from "../CommentArea/CommentArea";

class TVShows extends Component {
  state = {
    movieGallery: [],
    selectedMovie: null,
  };

  OMDB_URL = "https://www.omdbapi.com/?apikey=d87edd3";

  componentDidMount = () => {
    this.fetchMovies();
  };

  fetchMovies = async () => {
    try {
      const resp = await fetch(this.OMDB_URL + "&s=harry%20potter");
      if (resp.ok) {
        const responseObject = await resp.json();
        this.setState({ movieGallery: responseObject.Search });
      }
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div>
        <Container fluid className="px-4">
          <div className="d-flex justify-content-between">
            <div className="d-flex">
              <h2 className="mb-4">TV Shows</h2>
              <div className="ml-4 mt-1">
                <Dropdown>
                  <Dropdown.Toggle
                    style={{ backgroundColor: "#221f1f" }}
                    id="dropdownMenuButton"
                    className="btn-secondary btn-sm dropdown-toggle rounded-0"
                  >
                    Genres
                  </Dropdown.Toggle>
                  <Dropdown.Menu bg="dark">
                    <Dropdown.Item href="#/action-1">Scifi</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Romantic</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
                    <Dropdown.Item href="#/action-1">Comedy</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
            <div>
              <i className="fa fa-th-large icons"></i>
              <i className="fa fa-th icons"></i>
            </div>
          </div>
          <Row>
            <Col md={12}>
              <>
                <MovieList
                  title="Harry Potter"
                  loading={this.state.loading}
                  movies={this.state.movieGallery.slice(0, 6)}
                  changeSelectedMovie={(movieId) =>
                    this.setState({
                      selectedMovie: movieId,
                    })
                  }
                />
              </>
            </Col>
            {/*  <Col md={4}>
                          <CommentArea movieId={this.state.selectedMovie} />
               
            </Col>*/}
          </Row>
          <MyFooter />
        </Container>
      </div>
    );
  }
}

export default TVShows;
