import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Category.scss';

interface props {
  isActive?: boolean;
}

const Category: React.FC<props> = ({ isActive }) => {
  const location = useLocation().pathname;

  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [isBoard, setIsBoard] = useState<boolean>(useLocation().pathname.includes('board'));

  useEffect(() => {
    if (location.includes('board')) setIsBoard(true);
    else setIsBoard(false);
  }, [location]);

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
    <div id="Category" className={classNames({ isBoard })}>
      <div className={classNames('category-inner', { fixed: isFixed })}>
        <div className="title total-view" onClick={() => console.log('sss')}>
          전체 보기
        </div>
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

Category.defaultProps = {
  isActive: true,
};

export default Category;
