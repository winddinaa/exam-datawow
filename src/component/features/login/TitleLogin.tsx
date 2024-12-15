"use client";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";
import Image from "next/image";

const TitleLogin = () => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
  let classLg =
    "bg-brand-green-300 rounded-tl-[36px] rounded-bl-[36px] w-[44vw] h-screen rounded-br-none justify-items-center content-center p-[5%]";
  let classSm =
    "bg-brand-green-300 rounded-b-[36px] w-screen h-[44vh] justify-items-center content-center p-[5%]";

  return (
    <div className={isLargeScreen ? classLg : classSm}>
      <Image
        src="/logo.png"
        alt="Description"
        width={100}
        height={100}
        className="max-w-[200] min-w-[150] w-[50%] h-auto object-cover lg:max-w-[300]"
      />
      <p className="font-castoro text-lg font-normal italic text-brand-base-white mt-5 lg:text-xl">
        a Board
      </p>
    </div>
  );
};

export default TitleLogin;
