"use client";
import HomePage from "@/component/features/home";
import LayoutComponent from "@/component/layout";
import { useSelector } from "react-redux";
import { RootState } from "./store";
import { EPage } from "@/utils/constants/common";
import OurBlogPage from "@/component/features/ourBlog";

export default function Home() {
  const page = useSelector((state: RootState) => state.page.page);
  return (
    <LayoutComponent>
      {page === EPage.HOME && <HomePage />}
      {page === EPage.OUR_BLOG && <OurBlogPage />}
    </LayoutComponent>
  );
}
