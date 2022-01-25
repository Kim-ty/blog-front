import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import './Remote.scss';

const Remote: React.FC = (): JSX.Element => {
  const [isFixed, setIsFixed] = useState<boolean>(true);

  const remoteScroll = () => {
    const scrollTop: number = document.getElementById('RootPage')?.scrollTop || 0;
    const rootPageHeight: number = document.getElementById('RootPage')?.clientHeight || 0;
    const scrollHeight: number = document.getElementById('RootPage')?.scrollHeight || 0;
    const footerHeight: number = document.getElementById('Footer')?.clientHeight || 0;

    setIsFixed(scrollTop + rootPageHeight <= scrollHeight - footerHeight);
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
        <i className="arrow" onClick={() => document.getElementById('RootPage')?.scroll(0, 0)} />
        <i className="arrow bottom" onClick={() => document.getElementById('RootPage')?.scroll(0, 10000000000)} />
      </div>
    </div>
  );
};

export default Remote;
