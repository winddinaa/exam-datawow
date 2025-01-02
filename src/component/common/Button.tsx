import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  outline?: boolean;
  title?: any;
}

const Button: React.FC<ButtonProps> = ({
  title,
  outline,
  className,
  ...props
}) => {
  return (
    <button
      className={`${
        outline
          ? "border-2 border-brand-success text-brand-success bg-transparent"
          : "bg-brand-success text-white"
      } px-4 py-2 rounded-[8px] min-w-[105px] ${className}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
