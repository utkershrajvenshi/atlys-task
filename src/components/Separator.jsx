import React from "react";
import { mergeClasses } from "../utils";

const Separator = ({ className }) => {
  return (
    <div className={mergeClasses([
      "h-[1px] bg-gray-200",
      className,
    ])}></div>
  );
};

export default Separator;