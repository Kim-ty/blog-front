import React from 'react';

import { Route, Routes } from 'react-router-dom';
import PostsDetailPage from 'pages/root/PostsDetailPage';
import PostsListRouter from 'router/posts/PostsListRouter';
import PostsPage from 'pages/root/PostsPage';

const PostsRouter: React.FC = () => {
  return (
    <PostsPage>
      <Routes>
        <Route path="*" element={<PostsListRouter />} />
        <Route path="/:category/:postsNo" element={<PostsDetailPage />} />
      </Routes>
    </PostsPage>
  );
};

export default PostsRouter;
