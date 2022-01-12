import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Card, Container, Image, Modal, Row } from "react-bootstrap";
import CommentList from "../CommentArea/CommentList";

const Details = () => {
  const [details, setDetails] = useState(null);
  const [comments, setComments] = useState([]);

  const params = useParams();

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        let resp = await fetch(
          "https://www.omdbapi.com/?apikey=d87edd3&i=" + params.movieID
        );
        if (resp.ok) {
          let data = await resp.json();
          setDetails(data);
        } else {
          console.log("error fetching details");
        }
      } catch (error) {
        console.log(error);
      }
    };
    const fetchComments = async () => {
      try {
        let response = await fetch(
          "https://striveschool-api.herokuapp.com/api/comments/" +
            params.movieID,
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2NDE5OTEyMjgsImV4cCI6MTY0MzIwMDgyOH0.5gLPTKGUfNCQdODTDtimLhfM84l5yjSqqa9tQec5sT4",
            },
          }
        );
        if (response.ok) {
          let data = await response.json();
          setComments(data);
        } else {
          console.log("error fetching comments");
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchDetails();
    fetchComments();
  }, [params.movieID]);

  return (
    <Container fluid>
      <Row className="justify-content-center">
        <Card
          className="text-center text-white"
          style={{
            backgroundColor: "white",
            border: "2px solid red",
            width: "25rem",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {details && (
            <>
              <Card.Text style={{ fontSize: "2em", color: "red" }}>
                {details.Title}
              </Card.Text>
              <Image
                className="justify-content-center"
                src={details.Poster}
                alt="movie poster"
              />
              <Card.Body>
                <CommentList commentsToShow={comments} />
              </Card.Body>
            </>
          )}
        </Card>
      </Row>
    </Container>
  );
};

export default Details;
