import React from "react";
import { Field } from "formik";

const SelectInput = ({
  name,
  label,
  options = [],
  icon,
  width,
  bgColor = "bg-brand-grey-100",
  border = "border-brand-success", // กำหนดให้ border เป็นสีเขียว
  txtColor = "text-brand-success", // กำหนดให้ text เป็นสีเขียว
  values,
}: {
  name: string;
  label?: string;
  options?: Array<{ value: string; label: string }>;
  icon?: React.ReactNode;
  width?: string;
  bgColor?: string;
  border?: string;
  txtColor?: string;
  values?: string;
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        <Field
          as="select"
          name={name}
          className={`block w-full pl-4 pr-4 py-2 border rounded-[8px] text-sm appearance-none ${txtColor} ${bgColor} ${border} min-w-[105px] ${width} focus:outline-none focus:border-green-500`}
        >
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              className="relative"
            >
              {option.label}
            </option>
          ))}
        </Field>
        {icon && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
            {icon}
          </div>
        )}
      </div>
    </div>
  );
};

export default SelectInput;
