import React from 'react';
import PostsListItem from './PostsListItem';

// 보드 리스트
const PostsList: React.FC = (): JSX.Element => {
  // 무한 스크롤 구현
  return (
    <div className="Posts-list">
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
      <PostsListItem />
    </div>
  );
};

export default PostsList;
