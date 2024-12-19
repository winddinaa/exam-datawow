"use client";

import Image from "next/image";
import React from "react";
import { AppDispatch } from "@/app/store";
import { useDispatch } from "react-redux";
import { setPostDetail } from "@/reduxs/postDetail/postDetailSlice";
import DeleteIcon from "../icon/DeleteIcon";
import EditPostIcon from "../icon/EditPostIcon";

interface PostProps {
  post: Post;
  border?: string;
  onEdit?: (e: any) => void;
  onDelete?: (e: any) => void;
}

interface Post {
  userName: string;
  community: string;
  title: string;
  content: string;
  commentsCount: number;
  _id?: string;
}

const Post: React.FC<PostProps> = ({
  post,
  border = " rounded-tl-[15px] rounded-tr-[15px]",
  onEdit,
  onDelete,
}) => {
  const dispatch = useDispatch<AppDispatch>();
  const { userName, community, title, content, commentsCount } = post;

  return (
    <div className={`border ${border} p-4 shadow-sm bg-white relative`}>
      <div className="absolute top-4 right-4 flex space-x-2">
        {onEdit && (
          <button
            type="button"
            onClick={() => onEdit(post)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Edit"
          >
            <EditPostIcon />
          </button>
        )}
        {onDelete && (
          <button
            type="button"
            onClick={() => onDelete(post)}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Delete"
          >
            <DeleteIcon />
          </button>
        )}
      </div>

      <div className="flex items-center space-x-3 mb-2">
        <Image
          className="inline-block size-10 rounded-full "
          src="/Avatar.svg"
          width={40}
          height={40}
          alt=""
        />
        <h3 className="text-gray-700 font-semibold">{userName}</h3>
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
          {community}
        </span>
      </div>
      <h2 className="text-lg font-bold text-gray-900 mb-1">{title}</h2>
      <p className="text-gray-700 text-sm mb-2 line-clamp-2">{content}</p>
      <div className="text-gray-500 text-sm flex items-center">
        <span>💬 {commentsCount} Comments</span>
      </div>
    </div>
  );
};

export default Post;
