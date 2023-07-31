import React from "react";
import { styles } from "../styles";

const MainLayout = ({ children }: any) => {
  return (
    <div className={`sm:px-16 px-6  max-w-7xl `}>{children}</div>
  );
};

export default MainLayout;
