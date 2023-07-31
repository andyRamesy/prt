import React from "react";
import { styles } from "../styles";

const MainLayout = ({ children }: any) => {
  return (
    <div className={`sm:px-16 px-6 w-max-[100vw] w-[100vw] pt-[4rem]`}>{children}</div>
  );
};

export default MainLayout;
