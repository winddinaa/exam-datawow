"use client";

import React from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import ResizeListener from "./ResizeListener";

const WrapLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <Provider store={store}>
      <ResizeListener />
      <div>{children}</div>
    </Provider>
  );
};

export default WrapLayout;
