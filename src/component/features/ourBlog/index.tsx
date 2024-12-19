"use client";

import React, { useCallback } from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import TextInput from "@/component/Input/TextInput";
import SearchIcon from "@/component/icon/searchIcon";
import SelectInput from "@/component/Input/SelectInput";
import DownIcon from "@/component/icon/downIcon";
import Button from "@/component/common/Button";
import Modal from "@/component/common/Modal";
import { getPost, setModal } from "@/reduxs/home/homeSlice";
import CreatePostForm from "./form/CreateForm";
import { OCommunity } from "@/utils/constants/option";
import Post from "@/component/content/Post";
import { apiGetPost } from "@/utils/api/api.constants";

const OurBlogPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
  const homeReducer = useSelector((state: RootState) => state.home);

  const callGetPost = React.useCallback(async () => {
    await dispatch(getPost({ ...apiGetPost }));
  }, []);

  const onCancel = useCallback(() => {
    dispatch(setModal(false));
  }, [dispatch, setModal]);

  React.useEffect(() => {
    callGetPost();
    return () => {};
  }, []);

  return (
    <div className="min-h-screen">
      <Formik
        initialValues={{ search: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form>
            <div className="flex  items-center gap-3">
              <Modal open={homeReducer.openModal} onClose={onCancel}>
                <CreatePostForm onCancel={onCancel} />
              </Modal>

              <div
                className={`flex-1 ${isLargeScreen ? " max-w-[80%]" : "justify-between  max-w-[20%]"}`}
              >
                {isLargeScreen ? (
                  <TextInput
                    name="search"
                    placeholder="Search"
                    icon={<SearchIcon className="w-5 h-5 text-gray-400" />}
                  />
                ) : (
                  <SearchIcon
                    stroke={"#000000"}
                    className="w-5 h-5 text-base-black"
                  />
                )}
              </div>

              <div
                className={`flex gap-3 ${isLargeScreen ? "w-[20%]" : "w-full"} justify-end `}
              >
                <SelectInput
                  name="community"
                  options={OCommunity}
                  icon={<DownIcon />}
                  border="border-none"
                  txtColor="text-brand-base-black"
                />

                <Button
                  title="Create +"
                  onClick={() => dispatch(setModal(true))}
                />
              </div>
            </div>
            <div className="mt-6">
              {homeReducer.post.map((itemPost, index) => {
                return (
                  <Post
                    key={itemPost._id}
                    userName={itemPost.author.username}
                    community={itemPost.community}
                    title={itemPost.title}
                    content={itemPost.content}
                    commentsCount={itemPost.comments.length}
                    border={index > 0 ? "" : undefined}
                  />
                );
              })}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default OurBlogPage;
