import PostsCategory from 'components/posts/PostsCategory';
import PostsList from 'components/posts/PostsList';
import React from 'react';

import './PostsListPage.scss';

const PostsListPage: React.FC = (): JSX.Element => {
  return (
    <div id="PostsListPage">
      <PostsCategory />
      <PostsList />
    </div>
  );
};

export default PostsListPage;
