import React from 'react';
import { PostProps } from '@/interfaces';

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <div className="bg-white shadow rounded p-4 mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
      <div className="text-sm text-gray-500 mt-2">User ID: {userId}</div>
    </div>
  );
};

export default PostCard;
