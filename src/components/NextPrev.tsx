import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { useLocation, useNavigate } from "react-router-dom";
import { rightArrow } from "../assets";

const NextPrev = (props:any) => {
  const currentLocation = useLocation();

  const previousPage = () => {
    console.log("prev");
  };
  // const nextPage = () => {
  //   console.log(currentLocation);
  // };

  return (
    // <div className="flex justify-between relative bottom-[50vh] w-full h-full px-[20px]">
    <div className="relative bottom-[50vh] w-full h-full">
      {currentLocation.pathname === "/" ? null : (
        <button onClick={previousPage}>Prev</button>
      )}
      <div onClick={props.nextPage} className="w-fit relative left-[90vw] cursor-pointer">
        <img
          src={rightArrow}
          alt="Go to next page"
          className="w-[75px] h-[60px]"
        />
      </div>
    </div>
  );
};

export default NextPrev;
