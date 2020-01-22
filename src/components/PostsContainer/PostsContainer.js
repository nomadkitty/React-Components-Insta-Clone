// You will add code in this file
import React from "react";
import Post from "./Post";
import "./Posts.css";

// pass props and map through the dummy data to display your posts
const PostsContainer = props => {
  return (
    <div className="posts-container-wrapper">
      {/* map through data here */}
      {props.postData.map(ele => (
        <div>
          <Post key={ele.username} post={ele} />
        </div>
      ))}
    </div>
  );
};

export default PostsContainer;
