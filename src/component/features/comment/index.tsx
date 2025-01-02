import { AppDispatch, RootState } from "@/app/store";
import Button from "@/component/common/Button";
import TextAreaInput from "@/component/Input/TextAreaInput";
import {
  requestCreateComment,
  setOpenComment,
} from "@/reduxs/comment/commentSlice";
import { setPostDetail } from "@/reduxs/postDetail/postDetailSlice";
import { apiCreateComment } from "@/utils/api/api.constants";
import { Form, Formik } from "formik";
import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";

const Comment = () => {
  const dispatch = useDispatch<AppDispatch>();
  const postDetailReducer = useSelector(
    (state: RootState) => state.postDetail.postDetail
  );
  const filedCommnet = useMemo(
    () => [
      {
        name: "text",
        Component: TextAreaInput,
        placeholder: "What’s on your mind...",
        width: "w-full",
        bgColor: "bg-brand-base-white",
      },
    ],
    []
  );

  return (
    <div>
      <Formik
        initialValues={{ text: "" }}
        onSubmit={async (values) => {
          const result = await dispatch(
            requestCreateComment({
              ...apiCreateComment,
              data: { ...values, post: postDetailReducer._id },
            })
          );
          dispatch(setPostDetail(result.payload));
        }}
      >
        {({ values }) => (
          <Form className="flex flex-col items-start gap-5 h-full">
            {filedCommnet.map(({ Component, ...rest }) => (
              <Component key={rest.name} values={values.text} {...rest} />
            ))}
            <div className="flex flex-col sm:flex-row justify-end gap-4 w-full">
              <Button
                title="Cancel"
                type="button"
                outline
                onClick={() => dispatch(setOpenComment(false))}
                className="w-full sm:w-auto"
              />
              <Button type="submit" title="Post" className="w-full sm:w-auto" />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Comment;
