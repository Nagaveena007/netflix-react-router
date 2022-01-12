import { Button, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

const SingleMovieDetail = ({ movies, changeSelectedMovie }) => {
  const navigate = useNavigate();

  return (
    <Col className="mb-2" key={movies.imdbID}>
      <Card onClick={() => navigate("/details/" + movies.imdbID)}>
        <img
          className="img-fluid"
          src={movies.Poster}
          alt="movie"
          onClick={() => {
            changeSelectedMovie(movies.imdbID);
          }}
        />
      </Card>
    </Col>
  );
};

export default SingleMovieDetail;
