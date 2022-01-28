import React from 'react';

import './MyInfo.scss';

const MyInfo: React.FC = (): JSX.Element => {
  return (
    <div className="MyInfo">
      <i className="profile-img" />
      <div className="profile-info">
        <div>이름</div>
        <div>자기소개@@@@@@@@@</div>
      </div>
    </div>
  );
};

export default MyInfo;
