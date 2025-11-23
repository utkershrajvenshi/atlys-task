import React from "react";
import { IoMdAdd } from "react-icons/io";
import { HiOutlineVideoCamera } from "react-icons/hi2";
import { RiHeart3Line, RiChat3Line, RiSendPlaneLine, RiMicLine } from "react-icons/ri";
import Button from "../components/Button";
import { iconButtonBaseStyle, mergeClasses } from "../utils";

const baseIconSize = 20;
const PostActions = ({ isNewPost }) => {
  if(isNewPost) {
    return (
      <div className="flex items-center py-1 text-black">
      <Button className="p-1 ml-1 bg-gray-200">
        <IoMdAdd size={baseIconSize} />
      </Button>
      <Button className={mergeClasses([
        iconButtonBaseStyle,
        "mx-3",
      ])}>
        <RiMicLine size={baseIconSize} />
      </Button>
      <Button className={mergeClasses([
        iconButtonBaseStyle,
        "ml-1",
      ])}>
        <HiOutlineVideoCamera size={baseIconSize} />
      </Button>
    </div>
    )
  }
  return (
    <div className="flex items-center py-1">
      <Button className={iconButtonBaseStyle}>
        <RiHeart3Line size={baseIconSize} />
      </Button>
      <Button className={iconButtonBaseStyle}>
        <RiChat3Line size={baseIconSize} />
      </Button>
      <Button className={iconButtonBaseStyle}>
        <RiSendPlaneLine size={baseIconSize} />
      </Button>
    </div>
  );
};

export default PostActions;
