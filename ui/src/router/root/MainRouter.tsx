import React from 'react';

import { Route, Routes } from 'react-router-dom';
import BoardPage from '../../pages/root/BoardPage';
import MainPage from '../../pages/root/MainPage';
import ProfilePage from '../../pages/root/ProfilePage';
import RootPage from '../../pages/RootPage';

const MainRouter: React.FC = () => {
  return (
    <RootPage>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="board" element={<BoardPage />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </RootPage>
  );
};

export default MainRouter;
