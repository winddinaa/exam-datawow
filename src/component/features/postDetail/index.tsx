"use client";

import { RootState } from "@/app/store";
import SpeakIcon from "@/component/icon/SpeakIcon";
import dayjs from "@/utils/dayjs";
import Image from "next/image";
import { useSelector } from "react-redux";

const PostDetails = () => {
  const postDetailReducer = useSelector(
    (state: RootState) => state.postDetail.postDetail
  );
  console.log("=> postDetailReducer", postDetailReducer);
  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-4xl mx-auto bg-brand-base-white">
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
        <p className="font-inter text-xl font-bold ">
          {postDetailReducer.title}
        </p>
        <p className="font-inter mt-2 ">{postDetailReducer.content}</p>
      </div>

      {/* Comment Count */}
      <div className="flex items-center mb-4">
        <SpeakIcon />
        <p className="ml-2 text-gray-600 text-sm">32 Comments</p>
      </div>

      {/* Add Comment Button */}
      <div className="mb-8">
        <button className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-lg hover:bg-green-700">
          Add Comments
        </button>
      </div>

      {/* Comments */}
      <div className="space-y-6">
        {[
          {
            id: 1,
            name: "Wittawat98",
            time: "12h ago",
            text: "Lorem ipsum dolor sit amet consectetur.",
          },
          {
            id: 2,
            name: "Hawaii51",
            time: "1mo. ago",
            text: "Purus cursus vel at a pretium quam imperdiet.",
          },
          {
            id: 3,
            name: "Helo_re",
            time: "3mo. ago",
            text: "Tristique auctor sed semper nibh odio laoreet.",
          },
          {
            id: 4,
            name: "Azc123",
            time: "4mo. ago",
            text: "Amet mollis eget morbi feugiat nisi fusce.",
          },
        ].map((comment) => (
          <div key={comment.id} className="flex gap-4">
            <Image
              className="inline-block size-10 rounded-full "
              src="/Avatar.svg"
              width={1}
              height={1}
              alt=""
            />
            <div>
              <p className="text-sm font-medium text-gray-800">
                {comment.name}
              </p>
              <p className="text-xs text-gray-500">{comment.time}</p>
              <p className="text-sm text-gray-700 mt-1">{comment.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostDetails;
