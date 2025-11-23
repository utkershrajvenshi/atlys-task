import React from "react";
import { RiHeart3Line, RiChat3Line, RiSendPlaneLine } from "react-icons/ri";
import Button from "../components/Button";

const baseStyle = "bg-transparent p-0 text-black mx-4";
const baseIconSize = 20;
const PostActions = () => {
  return (
    <div className="flex items-center py-1">
      <Button className={baseStyle}>
        <RiHeart3Line size={baseIconSize} />
      </Button>
      <Button className={baseStyle}>
        <RiChat3Line size={baseIconSize} />
      </Button>
      <Button className={baseStyle}>
        <RiSendPlaneLine size={baseIconSize} />
      </Button>
    </div>
  );
};

export default PostActions;
