import React, { useEffect, useState } from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import Remote from '../components/common/Remote';

import './RootPage.scss';

const RootPage: React.FC = ({ children }): JSX.Element => {
  const [isHeaderFixed, setIsHeaderFixed] = useState<boolean>(false);
  const [headerHeight, setHeaderHeight] = useState<number>(0);

  const windowScroll = () => {
    const getHeaderInfo = (): { isFixed: boolean; headerHeight: number } => {
      const header = document.getElementById('Header');
      const isFixed = !!header?.classList.value.includes('isFixed');
      const headerHeight = header?.clientHeight || 0;

      return { isFixed, headerHeight };
    };

    const { isFixed, headerHeight } = getHeaderInfo();
    if (!isFixed) setHeaderHeight(headerHeight);
    setIsHeaderFixed(isFixed);
  };

  useEffect(() => {
    document.addEventListener('scroll', windowScroll, true);
    return () => {
      document.removeEventListener('scroll', windowScroll, true);
    };
  }, []);

  return (
    <div id="RootPage">
      <Header />
      <div className="contents" style={{ paddingTop: isHeaderFixed ? headerHeight : 0 }}>
        {children /* 주컨텐츠 */}
      </div>
      <Footer />
      <Remote />
    </div>
  );
};

export default RootPage;
