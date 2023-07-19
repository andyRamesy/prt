import React from "react";

const Skills = (props: any) => {
  return (
    <div className="w-full bg-gray-200 rounded-[4px] h-8 dark:bg-dark ">
      <div
        className="h-full rounded-[4px] skillContainer"
        style={{ width: `${props.skillWidth}%` }}
      ></div>
    </div>
  );
};

export default Skills;
