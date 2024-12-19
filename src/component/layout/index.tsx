"use client";
import React from "react";
import NavBar from "./NavBarWeb";
import { useSelector } from "react-redux";
import { RootState } from "@/app/store";
import NavBarMobile from "./NavBarMobile";
import Sidebar from "./Sidebar";
import { EPage } from "@/utils/constants/common";

const LayoutComponent = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );

  const page = useSelector((state: RootState) => state.page);

  return (
    <div>
      {isLargeScreen ? <NavBar /> : <NavBarMobile />}
      <div
        className={`flex flex-row bg-brand-grey-100 h-full ${
          isLargeScreen
            ? "px-0"
            : page.page === EPage.POST_DETAIL
              ? "px-0"
              : "px-[1%]"
        } `}
      >
        {isLargeScreen && (
          <div className="w-1/6 px-4 pt-8 sticky top-0">
            <Sidebar />
          </div>
        )}

        <div
          className={`${isLargeScreen ? (page.page === EPage.POST_DETAIL ? "w-full" : "w-4/6  px-4 pt-8") : page.page === EPage.POST_DETAIL ? "w-full " : "w-full  px-4 pt-8"}  `}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutComponent;
