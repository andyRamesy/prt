import React from "react";
import "./styles/SkillsStyle.css";

const Skills = (props: any) => {
  return (
    
    <div className="w-full rounded-[4px] h-5 dark:bg-dark bg-black mt-[10px]">
      <div
        className="h-full rounded-[4px] skillContainer"
        style={{ width: `${props.level}%` }}
      ></div>
    </div>
  );
};

export default Skills;
