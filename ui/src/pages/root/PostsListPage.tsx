import PostsCategory from 'components/posts/PostsCategory';
import React from 'react';

import './PostsListPage.scss';

const PostsListPage: React.FC = ({ children }): JSX.Element => {
  return (
    <div id="PostsListPage">
      <PostsCategory />
      {children}
    </div>
  );
};

export default PostsListPage;
