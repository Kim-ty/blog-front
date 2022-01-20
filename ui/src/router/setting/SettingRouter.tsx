import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Category from '../../pages/setting/Category';
import SettingPage from '../../pages/SettingPage';

const SettingRouter: React.FC = () => {
  return (
    <SettingPage>
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="category" element={<Category />} />
      </Routes>
    </SettingPage>
  );
};
export default SettingRouter;
