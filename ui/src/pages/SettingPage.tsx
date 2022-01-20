import React from 'react';

const SettingPage: React.FC = ({ children }): JSX.Element => {
  return (
    <div>
      설정
      {children}
    </div>
  );
};

export default SettingPage;
