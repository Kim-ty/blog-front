import React from 'react';

import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <div id="Footer">
      <div className="footer-info">
        <div>깃헙</div>
        <div>인스타</div>
        <div className="count-info">
          <span>Today</span>
          <p className="today-cnt">256</p>
        </div>
        <div className="count-info total">
          <span>Total</span>
          <p>256</p>
        </div>
      </div>
      <div className="made-info">made by Gabriel.kim</div>
    </div>
  );
};

export default Footer;
