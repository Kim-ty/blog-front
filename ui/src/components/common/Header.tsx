import React from 'react';

import './Header.scss';

const Header: React.FC = () => {
  return (
    <div id="Header">
      <i className="menu-icon" />
      <h1>Gabe.dev log</h1>
      <div>검색영역</div>
    </div>
  );
};

export default Header;
