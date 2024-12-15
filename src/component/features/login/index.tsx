"use client";
import React from "react";
import TitleLogin from "./TitleLogin";
import LoginForm from "./form/LoginForm";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";

const LoginPage = () => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
  return (
    <div className="bg-brand-green-500 w-screen h-screen flex flex-col lg:flex-row">
      {isLargeScreen ? (
        <>
          <LoginForm /> <TitleLogin />
        </>
      ) : (
        <>
          <TitleLogin />
          <LoginForm />
        </>
      )}
    </div>
  );
};

export default LoginPage;
