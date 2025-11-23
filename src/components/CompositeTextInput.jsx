import React from "react";
import { FaRegFaceSmile } from "react-icons/fa6";
import { TfiQuoteRight } from "react-icons/tfi";
import { IoCodeSlashSharp } from "react-icons/io5";
import { GoListUnordered, GoListOrdered } from "react-icons/go";
import Button from "./Button";
import { MdOutlineDeleteForever, MdFormatBold, MdFormatItalic, MdFormatUnderlined } from "react-icons/md";
import { iconButtonBaseStyle } from "../utils";
import Separator from "./Separator";

const FormattingHelpers = () => {
  return (
    <div className="flex justify-between align-center">
      <div className="flex gap-2 bg-gray-100 rounded-lg p-1">
        <select className="border-0 rounded-lg bg-white mr-3 text-black px-2 h-8" name="formatting" id="formatting-type-selection">
          <option value="">Paragraph</option>
          <option value="italic">Italic</option>
          <option value="underline">Underline</option>
        </select>
        <div className="flex gap-1">
          <Button className={iconButtonBaseStyle}>
            <MdFormatBold size={16} />
          </Button>
          <Button className={iconButtonBaseStyle}>
            <MdFormatItalic size={16} />
          </Button>
          <Button className={iconButtonBaseStyle}>
            <MdFormatUnderlined size={16} />
          </Button>
          <Separator orientation="vertical" className="bg-gray-300"/>
          <Button className={iconButtonBaseStyle}>
            <GoListUnordered size={16} />
          </Button>
          <Button className={iconButtonBaseStyle}>
            <GoListOrdered size={16} />
          </Button>
          <Separator orientation="vertical" className="bg-gray-300"/>
          <Button className={iconButtonBaseStyle}>
            <TfiQuoteRight size={16} />
          </Button>
          <Button className={iconButtonBaseStyle}>
            <IoCodeSlashSharp size={16} />
          </Button>
        </div>
      </div>
      <Button className="bg-red-200 text-red-700 hover:shadow-red-100">
        <MdOutlineDeleteForever size={18} />
      </Button>
    </div>
  );
}

const CompositeTextInput = ({ placeholder, isEditing, onTextChange, content }) => {
  return (
    <div className="flex w-full flex-col justify-start gap-2 p-1">
      {isEditing && (
        <FormattingHelpers />
      )}
      <div className="flex gap-2">
        <div className="flex items-center p-3">
          <FaRegFaceSmile size={16} color="black" />
        </div>
        {isEditing ? (
          <textarea type="text" className="w-full border-none rounded-lg text-black p-2" maxLength={280} placeholder={placeholder} onChange={(e) => onTextChange(e.target.value)} readOnly={!isEditing} value={content}/>
        ) : (
          <p className="text-black text-left">{content}</p>
        )}
      </div>
    </div>
  );
};

export default CompositeTextInput;
