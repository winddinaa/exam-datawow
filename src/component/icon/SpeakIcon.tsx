import React from "react";

const SpeakIcon = ({
  stroke = "#939494",
}: {
  className?: string;
  stroke?: string;
}) => {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.3398 7.40674C13.3398 10.7204 10.6536 13.4067 7.33984 13.4067C6.54175 13.4067 5.78005 13.2509 5.0835 12.968C4.95019 12.9139 4.88354 12.8868 4.82966 12.8747C4.77695 12.8629 4.73795 12.8586 4.68393 12.8586C4.62871 12.8586 4.56857 12.8686 4.44828 12.8887L2.07635 13.284C1.82797 13.3254 1.70377 13.3461 1.61397 13.3076C1.53537 13.2739 1.47273 13.2112 1.43902 13.1326C1.4005 13.0428 1.4212 12.9186 1.46259 12.6702L1.85792 10.2983C1.87796 10.178 1.88799 10.1179 1.88798 10.0627C1.88797 10.0086 1.88365 9.96963 1.87184 9.91693C1.85976 9.86304 1.83269 9.79639 1.77855 9.66308C1.49567 8.96654 1.33984 8.20483 1.33984 7.40674C1.33984 4.09303 4.02614 1.40674 7.33984 1.40674C10.6536 1.40674 13.3398 4.09303 13.3398 7.40674Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SpeakIcon;