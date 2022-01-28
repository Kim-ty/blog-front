import PostsCategory from 'components/posts/PostsCategory';
import React from 'react';

import './PostsPage.scss';

const PostsPage: React.FC = ({ children }): JSX.Element => {
  return (
    <div id="PostsPage">
      <PostsCategory />
      {children}
    </div>
  );
};

export default PostsPage;
