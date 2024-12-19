"use client";

import Image from "next/image";
import React from "react";
import EditPostIcon from "../icon/editPostIcon";
import DeleteIcon from "../icon/deleteIcon";

interface PostProps {
  userName: string;
  community: string;
  title: string;
  content: string;
  commentsCount: number;
  border?: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

const Post: React.FC<PostProps> = ({
  userName,
  community,
  title,
  content,
  commentsCount,
  border = " rounded-tl-[15px] rounded-tr-[15px]",
  onEdit,
  onDelete,
}) => {
  return (
    <div className={`border ${border} p-4 shadow-sm bg-white relative`}>
      {/* เพิ่มปุ่ม Edit และ Delete */}
      <div className="absolute top-2 right-2 flex space-x-2">
        {onEdit && (
          <button
            type="button"
            onClick={onEdit}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Edit"
          >
            <EditPostIcon />
          </button>
        )}
        {onDelete && (
          <button
            type="button"
            onClick={onDelete}
            className="text-gray-600 hover:text-gray-800 focus:outline-none"
            aria-label="Delete"
          >
            <DeleteIcon />
          </button>
        )}
      </div>

      {/* ส่วนเนื้อหา */}
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
