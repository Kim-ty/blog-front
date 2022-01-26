import React from 'react';

import { Route, Routes } from 'react-router-dom';
import PostsListPage from 'pages/root/PostsListPage';

const PostsRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<PostsListPage />} />
      <Route path="/:key" element={<PostsListPage />} />
    </Routes>
  );
};

export default PostsRouter;
