import React from 'react';
import { NavLink } from 'react-router-dom';

import './PostsCategory.scss';

const PostsCategory: React.FC = (): JSX.Element => {
  return (
    <div id="PostsCategory">
      <NavLink to="/posts/all">
        <span>전체보기</span>
      </NavLink>
      <NavLink to="/posts/react">
        <span>react</span>
      </NavLink>
      <NavLink to="/posts/java">
        <span>java</span>
      </NavLink>
      <NavLink to="/posts/spring">
        <span>spring</span>
      </NavLink>
      <NavLink to="/posts/javaScript">
        <span>javaScript</span>
      </NavLink>
      <NavLink to="/posts/nginX">
        <span>nginX</span>
      </NavLink>
    </div>
  );
};

PostsCategory.defaultProps = {
  isDetail: false,
};

export default PostsCategory;
