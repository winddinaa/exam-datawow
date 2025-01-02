"use client";

import { AppDispatch, RootState } from "@/app/store";
import SpeakIcon from "@/component/icon/SpeakIcon";
import dayjs from "@/utils/dayjs";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import Comment from "../comment";
import Button from "@/component/common/Button";
import { setOpenComment } from "@/reduxs/comment/commentSlice";

const PostDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const postDetailReducer = useSelector(
    (state: RootState) => state.postDetail.postDetail
  );
  const commentReducer = useSelector((state: RootState) => state.comment);
  return (
    <div className=" px-8 py-8   bg-brand-base-white">
      <div className="flex items-center gap-4 mb-6">
        <button className="rounded-full bg-gray-200 p-2 hover:bg-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-gray-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      {/* Author Section */}
      <div className="flex items-center mb-2">
        <Image
          className="inline-block size-10 rounded-full "
          src="/Avatar.svg"
          width={1}
          height={1}
          alt=""
        />
        <div className="ml-3 flex flex-row space-x-2">
          <p className="text-sm font-medium text-gray-900">
            {postDetailReducer.author.username}
          </p>
          <p className="text-sm text-gray-500">
            {dayjs(postDetailReducer.createdAt).fromNow()}
          </p>
        </div>
      </div>
      <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
        {postDetailReducer.community}
      </span>
      {/* Post Title */}
      <div className="mb-6 mt-2">
        <p className="font-inter text-xl font-bold text-brand-textSpecial-contentTitle">
          {postDetailReducer.title}
        </p>
        <p className="font-inter mt-2 text-brand-base-text ">
          {postDetailReducer.content}
        </p>
      </div>

      <div className="flex items-center mb-4">
        <SpeakIcon />
        <p className="ml-2 text-gray-600 text-sm">32 Comments</p>
      </div>

      {commentReducer.isComment ? (
        <Comment />
      ) : (
        <div className="mb-8">
          <Button
            outline
            title=" Add Comments"
            onClick={() => dispatch(setOpenComment(true))}
          />
        </div>
      )}

      <div className="space-y-6">
        {postDetailReducer.comments.map((comment) => (
          <div key={comment._id} className="flex gap-4">
            <Image
              className="inline-block size-10 rounded-full "
              src="/Avatar.svg"
              width={1}
              height={1}
              alt=""
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                {comment.author.username}
              </p>
              <p className="text-xs text-gray-500">
                {dayjs(comment.updatedAt).fromNow()}
              </p>
              <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
