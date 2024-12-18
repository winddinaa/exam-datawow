import React from "react";
import { Field } from "formik";

const SelectInput = ({
  name,
  label,
  options,
  icon,
}: {
  name: string;
  label?: string;
  options: Array<{ value: string; label: string }>;
  icon?: React.ReactNode;
}) => {
  return (
    <div className="flex flex-col space-y-2">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        <Field
          as="select"
          name={name}
          className="block w-full pl-4 pr-4 py-2 border rounded-[8px] text-brand-base-black text-sm appearance-none bg-brand-grey-100 border-none"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
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
