import PostsCategory from 'components/posts/PostsCategory';
import React from 'react';
import { NavLink } from 'react-router-dom';

import './PostsPage.scss';

const PostsPage: React.FC = ({ children }): JSX.Element => {
  return (
    <div id="PostsPage">
      <PostsCategory />
      <NavLink to="add">addBtn</NavLink>
      {children}
    </div>
  );
};

export default PostsPage;
