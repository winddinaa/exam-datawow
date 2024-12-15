import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button
      className="bg-brand-success text-white px-4 py-2 rounded-[8px]"
      {...props}
    >
      Button
    </button>
  );
};

export default Button;
