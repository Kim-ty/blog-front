import classNames from 'classnames';
import React, { useEffect, useState } from 'react';

import './Category.scss';

const Category: React.FC = () => {
  const [isFixed, setIsFixed] = useState<boolean>(true);

  const categoryScroll = () => {
    const scrollTop: number = document.getElementById('RootPage')?.scrollTop || 0;
    const HeaderHeight: number = document.getElementById('Header')?.clientHeight || 0;

    setIsFixed(scrollTop >= HeaderHeight);
  };

  useEffect(() => {
    document.addEventListener('scroll', categoryScroll, true);
    return () => {
      document.removeEventListener('scroll', categoryScroll, true);
    };
  }, []);

  return (
    <div id="Category">
      <div className={classNames('category-inner', { fixed: isFixed })}>
        <div className="title total-view">전체 보기</div>
        <div className="title">1.카테고리</div>
        <div className="small-cate">
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
        </div>
        <div className="title">1.카테고리</div>
        <div className="title">1.카테고리</div>
        <div className="title">1.카테고리</div>
        <div className="small-cate">
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
          <div className="title">2.하위카테고리</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
