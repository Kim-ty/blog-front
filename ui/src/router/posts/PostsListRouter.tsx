import React from 'react';

import { Navigate, Route, Routes } from 'react-router-dom';
import PostsList from 'components/posts/PostsList';

const PostsRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/all" element={<PostsList />} />
      <Route path="/:key" element={<PostsList />} />
      <Route path="/" element={<Navigate to="/posts/all" />} />
    </Routes>
  );
};

export default PostsRouter;
