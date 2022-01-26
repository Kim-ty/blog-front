import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Remote.scss';

const Remote: React.FC = (): JSX.Element => {
  const [isFixed, setIsFixed] = useState<boolean>(true);

  const remoteScroll = () => {
    const scrollTop: number = window.scrollY || 0;
    const screenHeight: number = window.innerHeight;
    const { scrollHeight } = document.body;
    const footerHeight: number = document.getElementById('Footer')?.clientHeight || 0;

    setIsFixed(scrollTop + screenHeight <= scrollHeight - footerHeight);
  };

  useEffect(() => {
    document.addEventListener('scroll', remoteScroll, true);

    return () => {
      document.removeEventListener('scroll', remoteScroll, true);
    };
  }, []);

  return (
    <div id="Remote">
      <div className={classNames('remote-inner', { fixed: isFixed })}>
        <i className="arrow" onClick={() => window.scroll(0, 0)} />
        <i className="arrow bottom" onClick={() => window.scroll(0, 10000000000)} />
      </div>
    </div>
  );
};

export default Remote;
