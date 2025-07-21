import { useState } from "react";
import Comment from "./Comment";

export default function DisplayComment() {
  const [comments, setComments] = useState([
    {
      username: "@sk",
      remarks: "Great job!",
      rating: 4
    }
  ]);

  const addNewComment = (comment) => {
    setComments((prevComments) => [...prevComments, comment]);
  };

  return (
    <>
      <div className="container mt-4">
        <h4 className="text-center mb-3">All Comments</h4>

        {comments.map((comment, idx) => (
          <div
            className="border rounded p-3 shadow-sm bg-secondary text-white mb-3"
            key={idx}
          >
            <p><strong>Remarks:</strong> {comment.remarks}</p>
            <p><strong>Rating:</strong> {comment.rating} / 5</p>
            <p className="text-end mb-0"><em>- {comment.username}</em></p>
          </div>
        ))}
      </div>

      <Comment addNewComment={addNewComment} />
    </>
  );
}
