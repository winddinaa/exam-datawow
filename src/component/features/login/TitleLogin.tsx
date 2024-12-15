"use client";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../app/store";

const TitleLogin = () => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
  let classLg =
    "bg-brand-green-300 rounded-tl-[36px] rounded-bl-[36px] w-[44vw] h-screen rounded-br-none";
  let classSm = "bg-brand-green-300 rounded-b-[36px] w-screen h-[44vh]";

  return (
    <div className={isLargeScreen ? classLg : classSm}>LoginpageTitleLogin</div>
  );
};

export default TitleLogin;
