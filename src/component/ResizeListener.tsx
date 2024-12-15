"use client";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScreenSize } from "../reduxs/screenSize/screenSizeSlice";

const ResizeListener = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      const isLargeScreen = window.innerWidth >= 1024;
      dispatch(setScreenSize(isLargeScreen));
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // To set initial state

    return () => window.removeEventListener("resize", handleResize);
  }, [dispatch]);

  return <></>;
};

export default ResizeListener;
