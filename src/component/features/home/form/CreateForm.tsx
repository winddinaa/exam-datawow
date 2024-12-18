"use client";

import React, { useMemo } from "react";
import { useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import { useRouter } from "next/navigation";

import Button from "@/component/common/Button";
import { requestLogin } from "@/reduxs/auth/authSlice";
import { AppDispatch } from "@/app/store";
import TextInput from "@/component/Input/TextInput";

const CreatePostForm = () => {
  const dispatch: AppDispatch = useDispatch();
  const router = useRouter();
  const filedLogin = useMemo(
    () => [
      {
        name: "username",
        Component: TextInput,
        placeholder: "username",
      },
    ],
    []
  );

  // const apiLogin: {
  //   method: string;
  //   url: string;
  // } = {
  //   method: "POST",
  //   url: "users/login",
  // };

  return (
    <Formik
      initialValues={{ username: "" }}
      onSubmit={async (values) => {
        // await dispatch(requestLogin({ ...apiLogin, data: values }));
        // router.push("/");
      }}
    >
      {({ values }) => (
        <Form>
          <div className="flex  items-center h-full">
            <p className="font-inter text-lg font-semibold mb-5 lg:text-xl">
              Create Post
            </p>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CreatePostForm;
