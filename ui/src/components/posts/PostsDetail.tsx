import React from 'react';

const PostsDetail: React.FC = (): JSX.Element => {
  return (
    <div id="PostsDetail">
      <div className="title">제목</div>
      <div className="simpleInfo">간단한정보</div>
      <div className="info">포스팅내용</div>
    </div>
  );
};

export default PostsDetail;
