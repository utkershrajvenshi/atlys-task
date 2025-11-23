import React from "react";
import { MdPerson } from "react-icons/md";
import { getReadableTime } from "../utils";

const FeedAuthor = ({ author, createdAt }) => {
  return (
    <div className="flex items-center gap-2 m-1">
      <div className="rounded-full bg-gray-100 p-2 text-black">
        <MdPerson size={24}/>
      </div>
      <div className="flex flex-col text-start text-black">
        <h2 className="font-bold text-base">{author}</h2>
        <p className="font-thin text-xs text-gray-500">{getReadableTime(createdAt)}</p>
      </div>
    </div>
  );
};

export default FeedAuthor;