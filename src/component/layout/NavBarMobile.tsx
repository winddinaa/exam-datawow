"use client";
import React from "react";
import Drawer from "./Drawer";

const NavBarMobile = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <div className="bg-brand-green-500  sticky top-0">
      <Drawer open={openDrawer} setOpen={setOpenDrawer} />
      <nav className="flex justify-between items-center px-8  h-[60px]">
        <div className="text-lg font-semibold">
          <p className="font-castoro text-lg font-normal italic text-white  lg:text-xl">
            a Board
          </p>
        </div>
        <ul className="flex space-x-6" onClick={() => setOpenDrawer(true)}>
          <img className=" size-10" src="/menu.svg" alt="" />
        </ul>
      </nav>
    </div>
  );
};

export default NavBarMobile;
