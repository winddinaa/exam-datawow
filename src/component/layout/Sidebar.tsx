"use client";
import { setPage } from "@/reduxs/page/pageSlice";
import { EPage } from "@/utils/constants/common";
import Image from "next/image";
import React from "react";
import { useDispatch } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-red">
      <div className="grid grid-cols-1 gap-4 ">
        <button
          onClick={() => {
            dispatch(setPage(EPage.HOME));
          }}
        >
          <div className="flex items-center space-x-3">
            <Image
              className="inline-block size-10  text-brand-green-500"
              src="/Iconhome.svg"
              width={1}
              height={1}
              alt=""
            />
            <p className="font-inter font-extrabold text-sm  text-brand-green-500">
              Home
            </p>
          </div>
        </button>
        <button
          onClick={() => {
            dispatch(setPage(EPage.OUR_BLOG));
          }}
        >
          <div className="flex items-center space-x-3">
            <Image
              className="inline-block size-10  text-brand-green-500 "
              width={1}
              height={1}
              src="/Iconedit.svg"
              alt=""
            />
            <p className="font-inter text-sm text-brand-green-500">Our Blog</p>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
