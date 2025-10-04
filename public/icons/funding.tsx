import React from "react";
import { IconTypes } from "./types";

const SeedFundingIcon = ({ width = 38, height = 38 }: IconTypes) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 38 38"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="38" height="38" rx="19" fill="#1D3D3A" />
      <path
        d="M20.5 11.65C20.0153 11.5516 19.5137 11.5 19 11.5C14.8579 11.5 11.5 14.8579 11.5 19C11.5 23.1421 14.8579 26.5 19 26.5C23.1421 26.5 26.5 23.1421 26.5 19C26.5 18.4863 26.4483 17.9847 26.35 17.5"
        stroke="white"
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      <path
        d="M19 16.75C18.1716 16.75 17.5 17.2537 17.5 17.875C17.5 18.4963 18.1716 19 19 19C19.8284 19 20.5 19.5037 20.5 20.125C20.5 20.7463 19.8284 21.25 19 21.25M19 16.75C19.6531 16.75 20.2087 17.0631 20.4146 17.5M19 16.75V16M19 21.25C18.3469 21.25 17.7913 20.9369 17.5854 20.5M19 21.25V22"
        stroke="white"
        strokeWidth="0.95"
        strokeLinecap="round"
      />
      <path
        d="M22.7471 15.2515L25.879 12.1178M26.4971 14.8601L26.4084 12.5415C26.4084 11.995 26.0822 11.6546 25.4878 11.6116L23.1447 11.5015"
        stroke="white"
        strokeWidth="0.95"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
export default SeedFundingIcon;
