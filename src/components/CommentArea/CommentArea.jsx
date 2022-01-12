import { Component } from "react";
import CommentList from "../CommentArea/CommentList";
import AddComments from "../CommentArea/AddComments";

class CommentArea extends Component {
  state = {
    comments: [],
  };

  componentDidMount = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" +
          this.props.imdbID,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2NDE5OTEyMjgsImV4cCI6MTY0MzIwMDgyOH0.5gLPTKGUfNCQdODTDtimLhfM84l5yjSqqa9tQec5sT4",
            "Content-Type": "application/json",
          },
        }
      );
      let comments = await response.json();
      this.setState({ comments: comments });
    } catch (error) {
      console.log(error);
      alert("Fetching mistake!");
    }
  };
  render() {
    console.log(this.props);
    return (
      <>
        <AddComments id={this.props.imdbID} />
        <CommentList commentsToShow={this.state.comments} />
      </>
    );
  }
}

export default CommentArea;
