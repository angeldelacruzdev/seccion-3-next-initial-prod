import React, { FC } from "react";
import { Props } from "../../types";

 

const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <div
        style={{
          background: "rgba(0,0,0,0.3)",
          padding: "10px",
          borderRadius: "5px",
        }}
      >
        <h3>Dark Layout</h3>
        <div>{children}</div>
      </div>
    </>
  );
};

export default DarkLayout;
