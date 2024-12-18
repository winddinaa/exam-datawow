"use client";
import React from "react";
import Button from "../common/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const NavBarWeb = () => {
  const router = useRouter();
  const token = localStorage.getItem("token");
  const username = localStorage.getItem("username");
  return (
    <div className="bg-brand-green-500  sticky top-0">
      <nav className="flex justify-between items-center px-8  h-[60px]">
        <div className="text-lg font-semibold">
          <p className="font-castoro text-lg font-normal italic text-white  lg:text-xl">
            a Board
          </p>
        </div>
        <ul className="flex space-x-6">
          {token ? (
            <div className="flex items-center space-x-3">
              <p className="text-md text-brand-base-white">{username}</p>
              <Image
                className="inline-block size-10 rounded-full "
                src="/Avatar.svg"
                width={1}
                height={1}
                alt=""
              />
            </div>
          ) : (
            <Button
              title="Sign in"
              onClick={() => {
                router.push("/login");
              }}
            />
          )}
        </ul>
      </nav>
    </div>
  );
};

export default NavBarWeb;
