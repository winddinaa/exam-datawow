import React from "react";

const EditPostIcon = ({
  stroke = "#2B5F44",
}: {
  className?: string;
  stroke?: string;
}) => {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7.26121 12.9084H13.2612M1.26123 12.9084H2.37759C2.70371 12.9084 2.86677 12.9084 3.02022 12.8715C3.15627 12.8389 3.28633 12.785 3.40563 12.7119C3.54018 12.6294 3.65548 12.5141 3.88609 12.2835L12.2612 3.90835C12.8135 3.35607 12.8135 2.46064 12.2612 1.90835C11.709 1.35607 10.8135 1.35607 10.2612 1.90835L1.88607 10.2835C1.65547 10.5141 1.54017 10.6294 1.45771 10.764C1.38461 10.8833 1.33073 11.0133 1.29807 11.1494C1.26123 11.3028 1.26123 11.4659 1.26123 11.792V12.9084Z"
        stroke={stroke}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default EditPostIcon;