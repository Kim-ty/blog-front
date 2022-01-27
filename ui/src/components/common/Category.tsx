import React from 'react';
import { NavLink } from 'react-router-dom';

import './Category.scss';

const Category: React.FC = (): JSX.Element => {
  const onScrollTop = () => {
    window.scroll(0, 0);
  };

  return (
    <div id="Category">
      <div className="category-inner">
        <div className="title total-view" onClick={() => console.log('sss')}>
          전체 보기
        </div>
        <div className="title">Posts</div>
        <div className="small-cate">
          <NavLink className="title" to="/posts/all" onClick={() => onScrollTop()}>
            <span>전체보기</span>
          </NavLink>
          <NavLink className="title" to="/posts/react" onClick={() => onScrollTop()}>
            <span>react</span>
          </NavLink>
          <NavLink className="title" to="/posts/java" onClick={() => onScrollTop()}>
            <span>java</span>
          </NavLink>
          <NavLink className="title" to="/posts/spring" onClick={() => onScrollTop()}>
            <span>spring</span>
          </NavLink>
          <NavLink className="title" to="/posts/javaScript" onClick={() => onScrollTop()}>
            <span>javaScript</span>
          </NavLink>
          <NavLink className="title" to="/posts/nginX" onClick={() => onScrollTop()}>
            <span>nginX</span>
          </NavLink>
        </div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
        <div className="title">Profile</div>
        <div className="title">History</div>
      </div>
    </div>
  );
};

export default Category;
