import React from "react";
import { Field, ErrorMessage } from "formik";

const TextInput = ({
  name,
  label,
  icon,
  ...rest
}: {
  name: string;
  label?: string;
  icon?: React.ReactNode;
  [key: string]: any;
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            {icon}
          </div>
        )}
        <Field
          type="text"
          id={name}
          name={name}
          className="block w-full pl-10 pr-4 py-2 border rounded-[8px] text-brand-base-black"
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

export default TextInput;
