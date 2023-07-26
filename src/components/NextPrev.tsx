import React, { useState } from "react";
import { SectionWrapper } from "../hoc";
import { useLocation, useNavigate } from "react-router-dom";
import { rightArrow } from "../assets";

const NextPrev = ({ previousPage, nextPage }: any) => {
  const currentLocation = useLocation();

  return (
    // <div className="flex justify-between relative bottom-[50vh] w-full h-full px-[20px]">
    <div className="w-[100vw] absolute top-[50vh]">
      {/* {currentLocation.pathname === "/" ? null : (
        <button onClick={previousPage}>Prev</button>
      )} */}

      {currentLocation.pathname === "/" ? null : (
        <div onClick={previousPage} className="absolute left-[20px]">
          <img
            src={rightArrow}
            alt="Go to next page"
            className="w-[75px] h-[60px]"
          />
        </div>
      )}
      <div onClick={nextPage} className="absolute right-[20px]">
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
