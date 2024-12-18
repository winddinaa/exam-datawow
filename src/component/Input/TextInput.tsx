import React from "react";
import { Field, ErrorMessage } from "formik";

const TextInput = ({
  name,
  label,
  icon,
  bgColor = "bg-brand-grey-100",
  boderColor = "border-brand-green-100",
  width = "",
  placeholder,
  placeholderColor = "text-brand-grey-100", // เพิ่มการตั้งค่าสีของ placeholder
  ...rest
}: {
  name: string;
  label?: string;
  icon?: React.ReactNode;
  bgColor?: string;
  boderColor?: string;
  width?: string;
  placeholder?: string;
  placeholderColor?: string; // พารามิเตอร์ใหม่สำหรับสีของ placeholder
}) => {
  return (
    <div className="flex flex-col space-y-2 w-full">
      {label && <label htmlFor={name}>{label}</label>}
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none ">
            {icon}
          </div>
        )}
        <Field
          type="text"
          id={name}
          name={name}
          placeholder={placeholder}
          className={`block w-full ${icon ? "pl-10" : "pl-4"} pr-4 py-2 border rounded-[8px] text-brand-base-black ${bgColor} border ${boderColor} ${width} `}
          style={{ "--placeholder-color": placeholderColor }}
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
