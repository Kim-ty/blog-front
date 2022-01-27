import React from 'react';
import { NavLink } from 'react-router-dom';

import './PostsCategory.scss';

const PostsCategory: React.FC = (): JSX.Element => {
  return (
    <div id="PostsCategory">
      <NavLink to="all">
        <span>전체보기</span>
      </NavLink>
      <NavLink to="react">
        <span>react</span>
      </NavLink>
      <NavLink to="java">
        <span>java</span>
      </NavLink>
      <NavLink to="spring">
        <span>spring</span>
      </NavLink>
      <NavLink to="javaScript">
        <span>javaScript</span>
      </NavLink>
      <NavLink to="nginX">
        <span>nginX</span>
      </NavLink>
    </div>
  );
};

export default PostsCategory;
