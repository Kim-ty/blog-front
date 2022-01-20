import React from 'react';

import { Route, Routes } from 'react-router-dom';
import BoardListPage from 'pages/root/BoardListPage';
import BoardPage from '../../pages/root/BoardPage';

const BoardRouter: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<BoardListPage />} />
      <Route path="/{:id}" element={<BoardPage />} />
    </Routes>
  );
};

export default BoardRouter;
