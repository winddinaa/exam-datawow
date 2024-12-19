"use client";

import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Form } from "formik";

import Button from "@/component/common/Button";
import { AppDispatch, RootState } from "@/app/store";
import TextInput from "@/component/Input/TextInput";
import SelectInput from "@/component/Input/SelectInput";
import DownIcon from "@/component/icon/DownIcon";
import { OCommunity } from "@/utils/constants/option";
import TextAreaInput from "@/component/Input/TextAreaInput";
import { validationSchema } from "./validate";
import { getPost } from "@/reduxs/home/homeSlice";
import { EStatusCode } from "@/utils/constants/statusCode";
import { apiGetPost, apiUpdatePost } from "@/utils/api/api.constants";
import { requestEditPost, setModalEdit } from "@/reduxs/ourBlog/ourBlogSlice";

const UpdatePostForm = ({ onCancel }: { onCancel?: (value: any) => void }) => {
  const dispatch: AppDispatch = useDispatch();
  const ourReducer = useSelector((state: RootState) => state.our);

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
      initialValues={ourReducer.editPostTemp}
      validationSchema={validationSchema}
      onSubmit={async (values) => {
        const result = await dispatch(
          requestEditPost({
            ...apiUpdatePost,
            data: { ...values, _id: ourReducer.editPostTemp._id },
          })
        );
        if (result.payload.status === EStatusCode.SUCESS) {
          await dispatch(
            getPost({ ...apiGetPost({ params: { isOur: true } }) })
          );
          dispatch(setModalEdit(false));
        }
      }}
    >
      {({ values }) => (
        <Form>
          <div className="flex flex-col items-start gap-5 h-full">
            <p className="font-inter text-lg font-semibold mb-5 lg:text-xl">
              Edit Post
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
              <Button
                type="submit"
                title="Confirm"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default UpdatePostForm;
