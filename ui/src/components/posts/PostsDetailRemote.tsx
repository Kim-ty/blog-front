import React from 'react';

import './PostsDetailRemote.scss';

interface I_props {
  type: 'pre' | 'post';
}

const PostsDetailRemote: React.FC<I_props> = ({ type }): JSX.Element => {
  return (
    <div id="PostsDetailRemote" className={type}>
      {type !== 'post' ? <div>이전글</div> : <div>다음글</div>}
    </div>
  );
};

export default PostsDetailRemote;
