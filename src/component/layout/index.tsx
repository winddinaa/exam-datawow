"use client";
import React from "react";
import NavBar from "./NavBarWeb";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import NavBarMobile from "./NavBarMobile";
import Sidebar from "./Sidebar";

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
      <div
        className={`flex flex-row bg-brand-grey-100 h-full ${
          isLargeScreen ? "px-0" : "px-[1%]"
        } `}
      >
        {isLargeScreen && (
          <div className="w-1/6 px-4 pt-8 sticky top-0">
            <Sidebar />
          </div>
        )}

        <div className={`${isLargeScreen ? "w-4/6" : "w-full"}  px-4 pt-8 `}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
