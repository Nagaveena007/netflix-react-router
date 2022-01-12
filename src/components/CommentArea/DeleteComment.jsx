import { BsTrashFill } from "react-icons/bs";
import { Button, ListGroup } from "react-bootstrap";

const deleteComment = async (id) => {
  try {
    const response = await fetch(
      "https://striveschool-api.herokuapp.com/api/comments/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTgyODk0ZGFhY2FhMjAwMTU1MmExNjMiLCJpYXQiOjE2NDE5OTEyMjgsImV4cCI6MTY0MzIwMDgyOH0.5gLPTKGUfNCQdODTDtimLhfM84l5yjSqqa9tQec5sT4",
        },
      }
    );
    if (response.ok) {
      alert("comment successfully deleted");
    } else {
      alert("comment NOT deleted");
    }
  } catch (err) {
    console.log(err);
  }
};

const DeleteComment = ({ comment }) => {
  return (
    <>
      <Button
        variant="danger"
        style={{ backgroundColor: "rgb(245 33 33)" }}
        type="submit"
        className="ml-2"
        onClick={() => deleteComment(comment._id)}
      >
        <BsTrashFill />
      </Button>
    </>
  );
};
export default DeleteComment;
