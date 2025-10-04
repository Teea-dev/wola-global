import React from "react";
import { IconTypes } from "./types";

const ExclamationIcon = ({ width = 12, height = 9 }: IconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 12 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.20044 0.460477L8.42825 8.74638H11.9068L8.89726 0.460477H6.20044ZM0.376855 0.460477L2.60467 8.74638H6.08318L3.07368 0.460477H0.376855Z"
        fill="white"
      />
    </svg>
  );
};
export default ExclamationIcon;
