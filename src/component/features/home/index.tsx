"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import { getPost } from "@/reduxs/home/homeSlice";
import Post from "@/component/content/Post";
import { apiGetPost } from "@/utils/api/api.constants";
import TopSection from "../common/TopSection";
import { setPostDetail } from "@/reduxs/postDetail/postDetailSlice";
import { setPage } from "@/reduxs/page/pageSlice";
import { EPage } from "@/utils/constants/common";

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();

  const homeReducer = useSelector((state: RootState) => state.home);

  const callGetPost = React.useCallback(async () => {
    await dispatch(getPost({ ...apiGetPost({ params: {} }) }));
  }, []);

  React.useEffect(() => {
    callGetPost();
    return () => {};
  }, []);

  return (
    <div className="min-h-screen">
      <TopSection />
      <div className="mt-6">
        {homeReducer.post.map((itemPost, index) => {
          return (
            <div
              onClick={() => {
                dispatch(setPostDetail(itemPost));
                dispatch(setPage(EPage.POST_DETAIL));
              }}
              key={itemPost._id}
            >
              <Post
                post={{
                  userName: itemPost.author.username,
                  community: itemPost.community,
                  title: itemPost.title,
                  content: itemPost.content,
                  commentsCount: itemPost.comments.length,
                }}
                border={index > 0 ? "" : undefined}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
