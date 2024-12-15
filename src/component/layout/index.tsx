"use client";
import React from "react";
import NavBar from "./NavBarWeb";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import NavBarMobile from "./NavBarMobile";

const LayoutComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
  return (
    <div>
      {isLargeScreen ? <NavBar /> : <NavBarMobile />}
      {children}
    </div>
  );
};

export default LayoutComponent;
