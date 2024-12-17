import Image from "next/image";
import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-red">
      <div className="grid grid-cols-1 gap-4 ">
        <div className="flex items-center space-x-3">
          <img
            className="inline-block size-10  text-brand-green-500"
            src="/Iconhome.svg"
            alt=""
          />
          <p className="font-inter font-extrabold text-sm  text-brand-green-500">
            Home
          </p>
        </div>
        <div className="flex items-center space-x-3">
          <Image
            className="inline-block size-10  text-brand-green-500 "
            src="/Iconedit.svg"
            alt=""
          />
          <p className="font-inter text-sm text-brand-green-500">Our Blog</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
