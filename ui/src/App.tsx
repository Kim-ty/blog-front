import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import RootRouter from './router/RootRouter';

const App: React.FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
};
export default App;
