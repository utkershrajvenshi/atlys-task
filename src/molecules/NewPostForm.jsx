import React from "react";
import CompositeTextInput from "../components/CompositeTextInput";
import PostActions from "./PostActions";
import Separator from "../components/Separator";
import { mergeClasses } from "../utils";
import Button from "../components/Button";

const NewPostForm = ({ className, onSubmit }) => {
  const [content, setContent] = React.useState("");

  const onClickSubmit = () => {
    onSubmit(content);
    setContent("");
  };

  return (
    <div className={mergeClasses([
      "bg-gray-100 rounded-xl p-1",
      className,
    ])}>
    <div className="flex flex-col gap-2 p-1 border-2 border-gray-200 rounded-xl w-[720px] bg-white">
      <CompositeTextInput placeholder="Write a post" isEditing content={content} onTextChange={(text) => setContent(text)}/>
      <Separator className="w-full" />
      <div className="flex justify-between">
        <PostActions />
        <Button onClick={onClickSubmit}>Post</Button>
      </div>
    </div>
    </div>
  );
};

export default NewPostForm;