import React, { Component } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import DeleteComment from "./DeleteComment";
import StarRatings from "react-star-ratings";

class CommentList1 extends Component {
  render() {
    return (
      <div>
        {/*         <Button onClick={this.onClickButton}>Click Me</Button>
         */}{" "}
        <ListGroup
          className="d-flex mb-3 mr-2"
          style={{
            borderRadius: "0.6rem",
          }}
        >
          {this.props.commentsToShow.map((c, i) => (
            <ListGroup.Item
              className="mr-2"
              style={{
                border: "3px solid rgb(245 33 33)",
                borderRadius: "0.6rem",
                backgroundColor: "#1d1f22",
                color: "white",
              }}
              key={i}
            >
              {c.comment}
              <StarRatings
                variant="warning"
                className=" ml-5"
                numberOfStars={5}
                name="rating"
                starDimension="26px"
                starSpacing="6px"
                starRatedColor="gold"
                starHoverColor="gold"
                starEmptyColor="rgb(129 129 129)"
                rating={c.rate}
              >
                {c.rate}
              </StarRatings>

              <DeleteComment comment={c} />
            </ListGroup.Item>
          ))}
        </ListGroup>
        ;
      </div>
    );
  }
}

export default CommentList1;
