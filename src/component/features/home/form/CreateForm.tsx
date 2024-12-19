"use client";

import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";

import Button from "@/component/common/Button";
import { AppDispatch } from "@/app/store";
import TextInput from "@/component/Input/TextInput";
import SelectInput from "@/component/Input/SelectInput";
import DownIcon from "@/component/icon/downIcon";
import { OCommunity } from "@/utils/constants/option";
import TextAreaInput from "@/component/Input/TextAreaInput";
import { validationSchema } from "./validate";
import {
  getPost,
  requestCreatePost,
  setModalCreate,
} from "@/reduxs/home/homeSlice";
import { EStatusCode } from "@/utils/constants/statusCode";
import { apiCreatePost, apiGetPost } from "@/utils/api/api.constants";

const CreatePostForm = ({ onCancel }: { onCancel?: (value: any) => void }) => {
  const dispatch: AppDispatch = useDispatch();
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
    <Formik
      initialValues={{ title: "", community: undefined, content: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const result = await dispatch(
          requestCreatePost({ ...apiCreatePost, data: values })
        );
        if (result.payload.status === EStatusCode.SUCESS) {
          dispatch(getPost({ ...apiGetPost }));
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
              <Component key={rest.name} values={values.community} {...rest} />
            ))}
            <div className="flex flex-col sm:flex-row justify-end gap-4 w-full">
              <Button
                title="Cancel"
                type="button"
                outline
                onClick={onCancel}
                className="w-full sm:w-auto"
              />
              <Button type="submit" title="Post" className="w-full sm:w-auto" />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePostForm;
