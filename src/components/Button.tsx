import React from "react";
import { Link } from "react-router-dom";

interface IBtn {
  imageLink?: string;
  direction?: string;
  text: string;
}

const Button = ({ imageLink, direction,text }: IBtn) => {
  return (
    <Link
      to={`${direction}`}
      className="flex gap-[5px] w-fit m-auto btn border-[#6c697d] border-solid z-[20]"
    >
      <img src={imageLink} alt="" className="max-w-[75px]" />
      <span className="sm:text-sm">{text}</span>
    </Link> 
  );
};

export default Button;
