import React, { useState } from 'react';
import Header from '../components/layout/Header';
import Card from '../components/common/Card';
import PostModal from '../components/common/PostModal';

const Home: React.FC = () => {
  const [posts, setPosts] = useState([
    { title: 'Sample Post 1', content: 'This is a sample post content.' },
    { title: 'Sample Post 2', content: 'Another example of a card.' },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleAddPost = (title: string, content: string) => {
    setPosts([{ title, content }, ...posts]);
  };

  return (
    <div>
      <Header />
      <main className="p-4">
        <button
          onClick={() => setShowModal(true)}
          className="mb-4 px-4 py-2 bg-green-600 text-white rounded"
        >
          Add New Post
        </button>

        {showModal && (
          <PostModal onClose={() => setShowModal(false)} onSubmit={handleAddPost} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {posts.map((post, index) => (
            <Card key={index} title={post.title} content={post.content} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Home;

