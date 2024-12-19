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
import { getPost, setModalCreate } from "@/reduxs/home/homeSlice";
import { OCommunity } from "@/utils/constants/option";
import Post from "@/component/content/Post";
import UpdatePostForm from "./form/UpdateForm";
import {
  setDeletePost,
  setEditPost,
  setModalConfirmDelete,
  setModalEdit,
} from "@/reduxs/ourBlog/ourBlogSlice";
import { apiGetPost } from "@/utils/api/api.constants";
import ConfirmDeleteModal from "./form/ConfirmDelet";
import CreatePostForm from "../common/CreateForm";

const OurBlogPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
  const ourReducer = useSelector((state: RootState) => state.our);
  const homeReducer = useSelector((state: RootState) => state.home);

  const callGetPost = React.useCallback(async () => {
    await dispatch(getPost({ ...apiGetPost({ params: { isOur: true } }) }));
  }, []);

  const onCancelEdit = useCallback(() => {
    dispatch(setModalEdit(false));
  }, [dispatch, setModalEdit]);

  const onCancelCreate = useCallback(() => {
    dispatch(setModalEdit(false));
  }, [dispatch, setModalEdit]);

  const onCancelDelete = useCallback(() => {
    dispatch(setModalConfirmDelete(false));
  }, [dispatch, setModalEdit]);

  const onEdit = (e: any) => {
    dispatch(
      setEditPost({
        openModal: true,
        post: {
          title: e.title,
          content: e.content,
          community: e.community,
          _id: e._id,
        },
      })
    );
  };

  const onDelete = (e: any) => {
    console.log("=> e", e);
    dispatch(setDeletePost({ openModalConfirm: true, _idDelete: e._id }));
  };

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
              <Modal open={ourReducer.openModal} onClose={onCancelEdit}>
                <UpdatePostForm onCancel={onCancelEdit} />
              </Modal>
              <Modal open={homeReducer.openModal} onClose={onCancelCreate}>
                <CreatePostForm onCancel={onCancelCreate} />
              </Modal>
              <Modal
                open={ourReducer.openModalConfirm}
                onClose={onCancelDelete}
                width="min-w-[400px]"
              >
                <ConfirmDeleteModal onCancel={onCancelDelete} />
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
                  onClick={() => dispatch(setModalCreate(true))}
                />
              </div>
            </div>
            <div className="mt-6">
              {homeReducer.post.map((itemPost, index) => {
                return (
                  <Post
                    key={itemPost._id}
                    post={{
                      userName: itemPost.author.username,
                      community: itemPost.community,
                      title: itemPost.title,
                      content: itemPost.content,
                      commentsCount: itemPost.comments.length,
                      _id: itemPost._id,
                    }}
                    border={
                      index === 0
                        ? undefined
                        : index === homeReducer.post.length - 1
                          ? "rounded-bl-[15px] rounded-br-[15px]"
                          : undefined
                    }
                    onEdit={onEdit}
                    onDelete={onDelete}
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
