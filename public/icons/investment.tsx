import React from "react";
import { IconTypes } from "./types";

const InvestmentIcon = ({ width = 38, height = 38 }: IconTypes) => {
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
        d="M26.4733 13.3796C26.4733 13.3796 26.6054 12.0411 26.2821 11.7179M26.2821 11.7179C25.957 11.3927 24.6206 11.5278 24.6206 11.5278M26.2821 11.7179L24.25 13.75"
        stroke="white"
        strokeWidth="0.95"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.4733 24.6203C26.4733 24.6203 26.6054 25.9589 26.2821 26.2821M26.2821 26.2821C25.957 26.6072 24.6206 26.4722 24.6206 26.4722M26.2821 26.2821L24.25 24.25"
        stroke="white"
        strokeWidth="0.95"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7179 11.7179L13.75 13.75M11.7179 11.7179C12.043 11.3927 13.3794 11.5278 13.3794 11.5278M11.7179 11.7179C11.3946 12.0411 11.5267 13.3796 11.5267 13.3796"
        stroke="white"
        strokeWidth="0.95"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11.7179 26.2821L13.75 24.25M11.7179 26.2821C12.043 26.6072 13.3794 26.4722 13.3794 26.4722M11.7179 26.2821C11.3946 25.9589 11.5267 24.6204 11.5267 24.6204"
        stroke="white"
        strokeWidth="0.95"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.25 19C24.25 21.8995 21.8995 24.25 19 24.25C16.1005 24.25 13.75 21.8995 13.75 19C13.75 16.1005 16.1005 13.75 19 13.75C21.8995 13.75 24.25 16.1005 24.25 19Z"
        stroke="white"
        strokeWidth="0.95"
      />
      <path
        d="M18.9355 16.976C18.107 16.976 17.5 17.4576 17.5 18.0165C17.5 18.5754 17.8914 18.9249 19 18.9249C20.2212 18.9249 20.5 19.4817 20.5 20.0406C20.5 20.5996 19.9662 21.0411 18.9355 21.0411M18.9355 16.976C19.5886 16.976 19.9338 17.2046 20.2064 17.5124M18.9355 16.976V16.3428M18.9355 21.0411C18.2824 21.0411 18.0285 20.9121 17.6688 20.5866M18.9355 21.0411V21.6316"
        stroke="white"
        strokeWidth="0.95"
        strokeLinecap="round"
      />
    </svg>
  );
};
export default InvestmentIcon;
