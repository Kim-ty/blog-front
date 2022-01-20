import React from 'react';

import { Route, Routes } from 'react-router-dom';
import MainPage from '../../pages/root/MainPage';
import ProfilePage from '../../pages/root/ProfilePage';
import RootPage from '../../pages/RootPage';
import BoardRouter from './BoardRouter';

const MainRouter: React.FC = () => {
  return (
    <RootPage>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="board/*" element={<BoardRouter />} />
        <Route path="profile" element={<ProfilePage />} />
      </Routes>
    </RootPage>
  );
};

export default MainRouter;
