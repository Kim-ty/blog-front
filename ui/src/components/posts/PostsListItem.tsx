import React from 'react';
import { NavLink } from 'react-router-dom';

import './PostsListItem.scss';
// 보드 제목,썸네일,내용

const tagArray = [
  'react',
  'react-router',
  'router5',
  'router6',
  'router6',
  'router6',
  'router6',
  'router6',
  'router6',
  'router6',
  'router6',
  'router6',
  'router6',
  'router6ssssssssssssssssssssssss',
  'router6',
  'asdf',
];

const PostsListItem: React.FC = (): JSX.Element => {
  const tagEL = (tag: string, index: number): JSX.Element => {
    return (
      <div key={index} className="tag">
        {tag}
      </div>
    );
  };

  return (
    <NavLink className="posts-list-item" to="123">
      <img className="thum" alt="sss" />
      <div className="posts-area">
        <div className="category">&gt; react</div>
        <div className="title">React-router 5 에서 react-router 6</div>
        <div className="info">react-router 5에서 react-router 6의 변경 내용을 알아보겠습니다.</div>
        <div className="tags">{tagArray.map(tagEL)}</div>
        <div className="reg-date">2022-01-27</div>
      </div>
    </NavLink>
  );
};

export default PostsListItem;
