"use client";

import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";

import Button from "@/component/common/Button";
import { AppDispatch, RootState } from "@/app/store";
import TextInput from "@/component/Input/TextInput";
import SelectInput from "@/component/Input/SelectInput";
import DownIcon from "@/component/icon/downIcon";
import { OCommunity } from "@/utils/constants/option";
import TextAreaInput from "@/component/Input/TextAreaInput";
import { validationSchema } from "./validate";
import { requestCreatePost } from "@/reduxs/home/homeSlice";
import { IoptionAPI } from "@/utils/api/api.interface";

const CreatePostForm = () => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
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

  const apiCreatePost: IoptionAPI = {
    method: "POST",
    url: "posts",
    isAuth: true,
  };

  return (
    <Formik
      initialValues={{ title: "", community: undefined, content: "" }}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        console.log("=> values", values);
        await dispatch(requestCreatePost({ ...apiCreatePost, data: values }));
        // router.push("/");
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
              <Button title="Cancel" outline className="w-full sm:w-auto" />
              <Button type="submit" title="Post" className="w-full sm:w-auto" />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePostForm;
