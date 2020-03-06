// You will add code in this file
import React, { useState } from "react";
// import the dummy-data and the SearchBar
import PostsContainer from "./PostsContainer";
import dummyData from "../../dummy-data";
import SearchBar from "../SearchBar/SearchBarContainer";

const PostsPage = () => {
  // set up state for the data
  const [data] = useState(dummyData);
  // add the SearchBar and PostsContainer components here
  return (
    <div className="App">
      <SearchBar />
      <PostsContainer key={data.username} postData={data} />
    </div>
  );
};

export default PostsPage;
