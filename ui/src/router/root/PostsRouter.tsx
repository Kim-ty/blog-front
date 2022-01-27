import React from 'react';

import { Route, Routes } from 'react-router-dom';
import PostsDetailPage from 'pages/root/PostsDetailPage';
import PostsListRouter from 'router/posts/PostsListRouter';

const PostsRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<PostsListRouter />} />
      <Route path="/detail/:postsNo" element={<PostsDetailPage />} />
    </Routes>
  );
};

export default PostsRouter;
