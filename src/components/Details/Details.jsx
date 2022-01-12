import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import { Modal } from "react-bootstrap";

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
    <div className="text-center text-white">
      {details && (
        <>
          <h2>{details.Title}</h2>
          <div>
            <img src={details.Poster} alt="movie poster" />
            <ul
              style={{
                listStyleType: "none",
                /* backgroundColor: "pink", */
              }}
            >
              {comments.map((c) => (
                <li className="my-3" key={c._id}>
                  {c.comment}
                </li>
              ))}
            </ul>
          </div>

          {/*  <Modal
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
             
            </Modal.Body>
          </Modal> */}
        </>
      )}
    </div>
  );
};

export default Details;
