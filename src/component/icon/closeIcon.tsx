import React from "react";

const CloseIcon = ({
  stroke = "#243831",
}: {
  className?: string;
  stroke?: string;
}) => {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.0459 1.1416L1.0459 11.1416M1.0459 1.1416L11.0459 11.1416"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
