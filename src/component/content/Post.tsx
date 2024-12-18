"use client";

import Image from "next/image";
import React from "react";

interface PostProps {
  userName: string;
  category: string;
  title: string;
  description: string;
  commentsCount: number;
}

const Post: React.FC<PostProps> = ({
  userName,
  category,
  title,
  description,
  commentsCount,
}) => {
  return (
    <div className="border rounded-lg p-4 shadow-sm bg-white">
      <div className="flex items-center space-x-3 mb-2">
        <Image
          className="inline-block size-10 rounded-full "
          src="/Avatar.svg"
          width={1}
          height={1}
          alt=""
        />
        <h3 className="text-gray-700 font-semibold">{userName}</h3>
      </div>
      <div className="flex items-center space-x-2 mb-2">
        <span className="bg-gray-100 text-gray-600 text-sm px-2 py-1 rounded-full">
          {category}
        </span>
      </div>
      <h2 className="text-lg font-bold text-gray-900 mb-1">{title}</h2>
      <p className="text-gray-700 text-sm mb-2 line-clamp-2">{description}</p>
      <div className="text-gray-500 text-sm flex items-center">
        <span>💬 {commentsCount} Comments</span>
      </div>
    </div>
  );
};

export default Post;
