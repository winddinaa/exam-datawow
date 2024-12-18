"use client";

import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";

import Button from "@/component/common/Button";
import { AppDispatch, RootState } from "@/app/store";
import TextInput from "@/component/Input/TextInput";
import SelectInput from "@/component/Input/SelectInput";
import { OCommunity } from "@/utils/constants/option";
import TextAreaInput from "@/component/Input/TextAreaInput";
import { validationCreateSchema } from "./create.yup";
import {
  getPost,
  requestCreatePost,
  setModalCreate,
} from "@/reduxs/home/homeSlice";
import { EStatusCode } from "@/utils/constants/statusCode";
import { apiCreatePost, apiGetPost } from "@/utils/api/api.constants";
import { EPage } from "@/utils/constants/common";
import Modal from "@/component/common/Modal";
import DownIcon from "@/component/icon/DownIcon";

const CreatePostForm = ({ onCancel }: { onCancel?: (value: any) => void }) => {
  const dispatch: AppDispatch = useDispatch();
  const pageReducer = useSelector((state: RootState) => state.page);
  const createPostReducer = useSelector((state: RootState) => state.createPost);

  const filedCreate = useMemo(
    () => [
      {
        name: "community",
        Component: SelectInput,
        options: [
          { value: "Choose a community", label: "Choose a community" },
          ...OCommunity,
        ],
        icon: <DownIcon stroke="#49A569" />,
        width: "w-[195px]",
        bgColor: "bg-brand-base-white",
      },
      {
        name: "title",
        Component: TextInput,
        placeholder: "Title",
        width: "w-full",
        bgColor: "bg-brand-base-white",
      },
      {
        name: "content",
        Component: TextAreaInput,
        placeholder: "What’s on your mind...",
        width: "w-full",
        bgColor: "bg-brand-base-white",
      },
    ],
    []
  );

  return (
    <Modal open={createPostReducer.openModal} onClose={onCancel}>
      <Formik
        initialValues={{ title: "", community: undefined, content: "" }}
        validationSchema={validationCreateSchema}
        onSubmit={async (values) => {
          const result = await dispatch(
            requestCreatePost({ ...apiCreatePost, data: values })
          );
          if (result.payload.status === EStatusCode.SUCESS) {
            await dispatch(
              getPost({
                ...apiGetPost({
                  params: {
                    ...(pageReducer.page === EPage.OUR_BLOG && { isOur: true }),
                  },
                }),
              })
            );
            dispatch(setModalCreate(false));
          }
        }}
      >
        {({ values }) => (
          <Form>
            <div className="flex flex-col items-start gap-5 h-full">
              <p className="font-inter text-lg font-semibold mb-5 lg:text-xl">
                Create Post
              </p>
              {filedCreate.map(({ Component, ...rest }) => (
                <Component
                  key={rest.name}
                  values={values.community}
                  {...rest}
                />
              ))}
              <div className="flex flex-col sm:flex-row justify-end gap-4 w-full">
                <Button
                  title="Cancel"
                  type="button"
                  outline
                  onClick={onCancel}
                  className="w-full sm:w-auto"
                />
                <Button
                  type="submit"
                  title="Post"
                  className="w-full sm:w-auto"
                />
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default CreatePostForm;
