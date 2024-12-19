"use client";

import { AppDispatch, RootState } from "@/app/store";
import Button from "@/component/common/Button";
import { getPost } from "@/reduxs/home/homeSlice";
import {
  requestDeletePost,
  setModalConfirmDelete,
} from "@/reduxs/ourBlog/ourBlogSlice";
import { apiDeletePost, apiGetPost } from "@/utils/api/api.constants";
import { useDispatch, useSelector } from "react-redux";

const ConfirmDeleteModal = ({ onCancel }: { onCancel: () => void }) => {
  const isLargeScreen = useSelector(
    (state: RootState) => state.screenSize.isLargeScreen
  );
  const _id = useSelector((state: RootState) => state.our._idDelete);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div>
      <h2 className="font-inter text-md font-medium text-gray-800 text-center">
        Please confirm if you wish to delete the post
      </h2>
      <p className=" font-inter text-sm text-gray-600 text-center mt-2">
        Are you sure you want to delete the post? Once deleted, it cannot be
        recovered.
      </p>
      <div
        className={`mt-4 flex ${isLargeScreen ? "flex-row" : "flex-col"}  gap-2`}
      >
        <Button
          title="Cancel"
          type="button"
          className="w-full md:w-auto py-2 px-4 text-gray-700 bg-gray-200 rounded-lg hover:bg-gray-300"
          onClick={onCancel}
        />
        <Button
          title="Delete"
          type="button"
          className="w-full md:w-auto py-2 px-4 text-white bg-red-600 rounded-lg hover:bg-red-700"
          onClick={async () => {
            await dispatch(
              requestDeletePost({ ...apiDeletePost, data: { _id } })
            );
            await dispatch(
              getPost({ ...apiGetPost({ params: { isOur: true } }) })
            );
            dispatch(setModalConfirmDelete(false));
          }}
        />
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
