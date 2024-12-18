import React from "react";
import { Field, ErrorMessage } from "formik";

const TextAreaInput = ({
  name,
  label,
  icon,
  bgColor = "bg-brand-grey-100",
  boderColor = "border-brand-green-100",
  width = "",
  rows = 4,
  ...rest
}: {
  name: string;
  label?: string;
  icon?: React.ReactNode;
  [key: string]: any;
  width?: string;
  rows?: number;
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <Field
          as="textarea"
          id={name}
          name={name}
          rows={rows}
          className={`block w-full pl-4 pr-4 py-2 border rounded-[8px] text-brand-base-black ${bgColor} border ${boderColor} ${width}`}
          {...rest}
        />
      </div>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-sm"
      />
    </div>
  );
};

export default TextAreaInput;
