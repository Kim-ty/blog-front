import PostsCategory from 'components/posts/PostsCategory';
import PostsDetail from 'components/posts/PostsDetail';
import PostsDetailRemote from 'components/posts/PostsDetailRemote';
import React, { useEffect } from 'react';

import './PostsDetailPage.scss';

const PostsDetailPage: React.FC = (): JSX.Element => {
  // 스크롤 위치 최상단으로 이동
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div id="PostsDetailPage">
      {/* <PostsDetailRemote type="pre" /> */}
      <PostsDetail />
      {/* <PostsDetailRemote type="post" /> */}
    </div>
  );
};

export default PostsDetailPage;
