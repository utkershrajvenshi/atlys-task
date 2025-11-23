import React from "react";
import { mergeClasses } from "../utils";

const Button = ({
  children,
  className,
  onClick
}) => {
  const handleClick = (e) => {
    if(onClick) {
      onClick(e);
    } else {
      alert('function not implemented')
    }
  }
  return (
    <button className={mergeClasses([
      "border-0 rounded-lg",
      // hover states
      "hover:shadow-lg hover:translate-y-[-2px]",
      className,
    ])} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button;
