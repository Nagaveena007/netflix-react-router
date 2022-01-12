import { Component } from "react";
import { Form, Button } from "react-bootstrap";
import StarRatings from "react-star-ratings";
class AddComment extends Component {
  state = {
    comment: {
      comment: "",
      rate: undefined,
      elementId: this.props.id,
    },
  };

  addComment = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(this.state.comment),
          headers: {
            "Content-type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2NDE5OTEyMjgsImV4cCI6MTY0MzIwMDgyOH0.5gLPTKGUfNCQdODTDtimLhfM84l5yjSqqa9tQec5sT4",
          },
        }
      );
      if (response.ok) {
        alert("comment successfully Added");
      } else {
        alert("comment NOT Added");
      }
    } catch (err) {
      console.log(err);
    }
  };
  render() {
    return (
      <Form
        onSubmit={this.addComment}
        style={{ border: "1px solid black", borderRadius: "0.6rem" }}
      >
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control
            type="text"
            as="textarea"
            value={this.state.comment.comment}
            rows={3}
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  comment: e.target.value,
                },
              })
            }
          />
        </Form.Group>
        <Form.Group
          variant="warning"
          controlId="exampleForm.ControlSelect1"
          className={"d-flex justify-content-center"}
        >
          {/*  <Form.Control
            as="select"
            onChange={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e.target.value,
                },
              })
            }
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control> */}
          <StarRatings
            className={"d-flex"}
            rating={this.state.comment.rate}
            starRatedColor="rgb(245 33 33)"
            starHoverColor="rgb(245 33 33)"
            starEmptyColor="rgb(129 129 129)"
            changeRating={(e) =>
              this.setState({
                comment: {
                  ...this.state.comment,
                  rate: e,
                },
              })
            }
            numberOfStars={5}
            name="rating"
            starDimension="26px"
            starSpacing="6px"
          />
        </Form.Group>
        <Form.Group className={"d-flex justify-content-center"}>
          <Button
            variant="danger"
            style={{
              border: "2px solid white",
              borderRadius: "0.6rem",
              backgroundColor: "rgb(245 33 33)",
            }}
            className=""
            type="submit"
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    );
  }
}
export default AddComment;
