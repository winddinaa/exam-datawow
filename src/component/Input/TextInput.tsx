import React from "react";
import { Field, ErrorMessage } from "formik";

const TextInput = ({
  name,
  label,
  ...rest
}: {
  name: string;
  label?: string;
  [key: string]: any; // Allow other props
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label htmlFor={name}>{name}</label>}
      <Field
        type="text"
        id={name}
        name={name}
        className="text-white px-4 py-2 rounded-[8px]"
        {...rest}
      />
      <ErrorMessage name={name} component="div" />
    </div>
  );
};

export default TextInput;
