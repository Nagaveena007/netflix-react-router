import { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Modal } from "react-bootstrap";
import CommentArea from "../CommentArea/CommentArea";

class SingleMovie extends Component {
  state = {
    selected: null,
  };

  render() {
    return (
      <>
        <Row className="mx-1 my-4 justify-content-center">
          {this.props.title.map((t, i) => (
            <h2>{t.title}</h2>
          ))}

          {this.props.movies.map(
            (movie, i) => (
              /* i < 6 && ( */
              <Col key={i} xs="12" sm="6" md="3" className="mb-3">
                <img
                  src={movie.Poster}
                  style={{ height: "38vh", objectFit: "cover" }}
                  className="w-100 img-fluid rounded images"
                  alt=""
                  onClick={() => {
                    if (this.state.selected !== movie.imdbID) {
                      this.setState({
                        selected: movie.imdbID,
                      });
                    } else {
                      this.setState({
                        selected: null,
                      });
                    }
                    console.log(this.state);
                  }}
                />
              </Col>
            )
            /*  ) */
          )}

          <Row>
            <Col md="4">
              <img src="" />
            </Col>
            <Col md="8">
              <Modal
                show={this.state.selected !== null}
                onHide={() => this.setState({ selected: null })}
                animation={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title
                    style={{
                      color: "black",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    Comments
                  </Modal.Title>
                </Modal.Header>
                <Modal.Body style={{}}>
                  <CommentArea imdbID={this.state.selected} />
                </Modal.Body>
              </Modal>
            </Col>
          </Row>
        </Row>
      </>
    );
  }
}

export default SingleMovie;
