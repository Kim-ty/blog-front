import React, { useEffect } from 'react';
import './Remote.scss';

const Remote: React.FC = (): JSX.Element => {
  const listenerTest = () => {
    console.log(document.getElementById('RootPage')?.scrollTop);
  };
  const clickevent = () => {
    console.log('click');
  };

  useEffect(() => {
    document.addEventListener('scroll', listenerTest, true);
    document.addEventListener('click', clickevent, true);
    return () => {
      document.removeEventListener('scroll', listenerTest, true);
      document.removeEventListener('click', clickevent, true);
    };
    // return () => {
    //   console.log('sss');
    //   window.removeEventListener('click', listenerTest);
    // };
  }, []);

  return (
    <div id="Remote">
      <div className="remote-inner">
        <div
          onClick={() => {
            window.scroll(0, 0);
            console.log('상 클릭');
          }}>
          상
        </div>
        <div>하</div>
      </div>
    </div>
  );
};

export default Remote;
