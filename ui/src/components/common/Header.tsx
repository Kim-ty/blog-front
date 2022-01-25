import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';

import './Header.scss';
import Menu from './Menu';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const location = useLocation().pathname;
  const [isMain, setIsMain] = useState<boolean>(useLocation().pathname.includes('board'));
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (location.length === 1) setIsMain(true);
    else setIsMain(false);
  }, [location]);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent): void => {
      const clickTarget = searchInput.current && searchInput.current.contains(e.target as HTMLElement);
      // eslint-disable-next-line no-useless-return
      if (!!searchActive && !clickTarget) setSearchActive(false);
    };

    document.addEventListener('click', clickOutsideHandler);

    return (): void => document.removeEventListener('click', clickOutsideHandler);
  }, [searchActive]);

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

  useEffect(() => {
    if (!searchActive) setSearchText('');
    else searchInput?.current?.focus();
  }, [searchActive]);

  useEffect(() => {
    if (!isFixed) setMenuActive(false);
  }, [isFixed]);

  return (
    <div id="Header" className={classNames({ isFixed, isMain })}>
      {!!isFixed && (
        <div className="menu-wrap">
          <i className="menu-icon" onClick={() => setMenuActive(!menuActive)} />
          <Menu isActive={menuActive} setIsActive={setMenuActive} />
        </div>
      )}{' '}
      <h1>Gabe.dev log</h1>
      <div className="search-wrap">
        <input
          ref={searchInput}
          placeholder="포스팅 찾기"
          disabled={!searchActive}
          className="search-input"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <i className="search-icon" onClick={() => setSearchActive(!searchActive)} />
      </div>
    </div>
  );
};

export default Header;
