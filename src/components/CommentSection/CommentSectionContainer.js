// You will add code to this file
import React, { useState } from "react";
import CommentInput from "./CommentInput";
import Comment from "./Comment";
import "./Comment.css";

const CommentSection = props => {
  // Add state for the comments
  const [comments, setComments] = useState(props.comments);
  const [newComment, setNewComment] = useState("");
  const changeComment = event => {
    setNewComment(event.target.value);
  };
  const submitComment = event => {
    event.preventDefault();
    let comment = {
      username: "newuser",
      text: newComment,
    };
    setComments([...comments, comment]);
    setNewComment("");
  };
  return (
    <div>
      {/* map through the comments data and return the Comment component */}
      {comments.map(ele => (
        <div>
          <Comment key={ele.username} comment={ele} />
        </div>
      ))}
      <CommentInput
        comment={newComment}
        changeComment={changeComment}
        submitComment={submitComment}
      />
    </div>
  );
};

export default CommentSection;
