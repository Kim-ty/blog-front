import HistoryPage from 'pages/root/HistoryPage';
import React from 'react';

import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/root/MainPage';
import ProfilePage from '../../pages/root/ProfilePage';
import RootPage from '../../pages/RootPage';
import PostsRouter from './PostsRouter';

const MainRouter: React.FC = () => {
  return (
    <RootPage>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="posts/*" element={<PostsRouter />} />
        <Route path="profile" element={<ProfilePage />} />
        <Route path="history" element={<HistoryPage />} />
      </Routes>
    </RootPage>
  );
};

export default MainRouter;
