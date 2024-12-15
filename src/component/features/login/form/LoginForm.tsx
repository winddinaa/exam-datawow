import { RootState } from "@/app/store";
import React from "react";
import { useSelector } from "react-redux";

const LoginForm = () => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
  return <div className={isLargeScreen ? "w-[56vw]" : "w-full"}>LoginForm</div>;
};

export default LoginForm;
