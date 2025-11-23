import React from "react";
import { mergeClasses } from "../utils";

const Separator = ({ className, orientation = "horizontal" }) => {
  return (
    <div className={mergeClasses([
      "bg-gray-200",
      orientation === "vertical" ? "w-[1px]" : "h-[1px]",
      className,
    ])}></div>
  );
};

export default Separator;