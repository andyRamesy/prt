import React from "react";
import { SectionWrapper } from "../hoc";

const NextPrev = () => {
  const previousPage = () => {
    console.log("prev");
  };
  const nextPage = () => {
    console.log("next");
  };

  return (
    <div className="flex justify-between relative bottom-[50vh] w-full h-full px-[20px]">
      <button onClick={previousPage}>Prev</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
};

export default NextPrev;
