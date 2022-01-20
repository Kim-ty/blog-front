import React from 'react';

import { Route, Routes } from 'react-router-dom';
import MainRouter from './root/MainRouter';
import SettingRouter from './setting/SettingRouter';

const RootRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/*" element={<MainRouter />} />
      <Route path="setting/*" element={<SettingRouter />} />
    </Routes>
  );
};

export default RootRouter;
