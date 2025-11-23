import React from "react";

const FeedAuthor = ({ author, createdAt }) => {
  return (
    <div className="flex justify-between text-black">
      <h2>{author}</h2>
      <p>{new Date(createdAt).toLocaleString()}</p>
    </div>
  );
};

export default FeedAuthor;