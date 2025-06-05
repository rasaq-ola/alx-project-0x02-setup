import React, { useEffect, useState } from 'react';
import Header from '@/components/layout/Header';
import PostCard from '@/components/common/PostCard';
import { PostProps } from '@/interfaces';

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6');
      const data = await res.json();
      const mappedPosts: PostProps[] = data.map((post: any) => ({
        title: post.title,
        content: post.body,
        userId: post.userId,
      }));
      setPosts(mappedPosts);
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <Header />
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        {posts.map((post, index) => (
          <PostCard key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
