import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Category from '../components/common/Category';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Remote from '../components/common/Remote';

import './RootPage.scss';

const RootPage: React.FC = ({ children }): JSX.Element => {
  const location = useLocation().pathname;

  const [isBoard, setIsBoard] = useState<boolean>(useLocation().pathname.includes('board'));

  useEffect(() => {
    if (location.includes('board')) setIsBoard(true);
    else setIsBoard(false);
  }, [location]);

  return (
    <div id="RootPage">
      <Header />
      {!!isBoard && <Category />}
      <div className="contents">{children /* 주컨텐츠 */}</div>
      <Footer />
      <Remote />
    </div>
  );
};

export default RootPage;
