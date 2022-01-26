import React from 'react';

import './Category.scss';

const Category: React.FC = (): JSX.Element => {
  return (
    <div id="Category">
      <div className="category-inner">
        <div className="title total-view" onClick={() => console.log('sss')}>
          전체 보기
        </div>
        <div className="title">Posts</div>
        <div className="small-cate">
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
        </div>
        <div className="title">Profile</div>
        <div className="title">History</div>
      </div>
    </div>
  );
};

export default Category;
