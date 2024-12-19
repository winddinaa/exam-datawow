"use client";

import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/store";
import Modal from "@/component/common/Modal";
import { getPost } from "@/reduxs/home/homeSlice";
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
import TopSection from "../common/TopSection";

const OurBlogPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const ourReducer = useSelector((state: RootState) => state.our);
  const homeReducer = useSelector((state: RootState) => state.home);

  const callGetPost = React.useCallback(async () => {
    await dispatch(getPost({ ...apiGetPost({ params: { isOur: true } }) }));
  }, []);

  const onCancelEdit = useCallback(() => {
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
    dispatch(setDeletePost({ openModalConfirm: true, _idDelete: e._id }));
  };

  React.useEffect(() => {
    callGetPost();
    return () => {};
  }, []);

  return (
    <div className="min-h-screen">
      <TopSection />
      <Modal open={ourReducer.openModal} onClose={onCancelEdit}>
        <UpdatePostForm onCancel={onCancelEdit} />
      </Modal>
      <Modal
        open={ourReducer.openModalConfirm}
        onClose={onCancelDelete}
        width="min-w-[400px]"
      >
        <ConfirmDeleteModal onCancel={onCancelDelete} />
      </Modal>

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
    </div>
  );
};

export default OurBlogPage;
