import React, { useEffect } from 'react';

import './PostsDetailPage.scss';
import { PostsAdd } from 'components/posts/PostsAdd';

const PostsAddPage: React.FC = (): JSX.Element => {
  // 스크롤 위치 최상단으로 이동
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div id="PostsAddPage">
      <PostsAdd />
    </div>
  );
};

export default PostsAddPage;
