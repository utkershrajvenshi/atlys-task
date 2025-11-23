import React from "react";
import FeedAuthor from "./FeedAuthor";
import PostActions from "./PostActions";
import CompositeTextInput from "../components/CompositeTextInput";
import { mergeClasses } from "../utils";

const FeedCard = ({ author, createdAt, content, className }) => {
  return (
    <div className={mergeClasses([
      "bg-gray-100 rounded-xl p-1",
      className,
    ])}>
    <div className="flex flex-col gap-2 bg-white rounded-xl p-1 border-2 border-gray-200 mb-1">
      <FeedAuthor author={author} createdAt={createdAt} />
      <CompositeTextInput content={content}/>
    </div>
    <PostActions />
    </div>
  );
};

export default FeedCard;