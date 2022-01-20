import React, { useEffect, useRef, useState } from 'react';
import Category from '../components/common/Category';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Remote from '../components/common/Remote';

import './RootPage.scss';

const RootPage: React.FC = ({ children }): JSX.Element => {
  return (
    <div id="RootPage">
      <Header />
      <Category />
      <div className="contents">{children /* 주컨텐츠 */}</div>
      <Footer />
      <Remote />
    </div>
  );
};

export default RootPage;
