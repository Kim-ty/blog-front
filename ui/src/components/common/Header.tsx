import classNames from 'classnames';
import React, { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';
import Menu from './Menu';

const Header: React.FC = () => {
  const [menuActive, setMenuActive] = useState<boolean>(false);
  const [searchActive, setSearchActive] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');
  const [isFixed, setIsFixed] = useState<boolean>(false);

  const header = useRef<HTMLDivElement>(null);
  const searchInput = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent): void => {
      const clickTarget = searchInput.current && searchInput.current.contains(e.target as HTMLElement);
      if (!!searchActive && !clickTarget) setSearchActive(false);
    };

    document.addEventListener('click', clickOutsideHandler);

    return (): void => document.removeEventListener('click', clickOutsideHandler);
  }, [searchActive]);

  const onScrollHandler = () => {
    const scrollTop: number = window.scrollY || 0;
    const HeaderHeight: number = header?.current?.clientHeight || 0;
    if (scrollTop === 0) setIsFixed(false);
    else setIsFixed(scrollTop >= HeaderHeight);
  };

  useEffect(() => {
    document.addEventListener('scroll', onScrollHandler, true);
    return () => {
      document.removeEventListener('scroll', onScrollHandler, true);
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
    <div id="Header" ref={header} className={classNames({ isFixed })}>
      {!!isFixed && (
        <div className="menu-wrap">
          <i className="menu-icon" onClick={() => setMenuActive(!menuActive)} />
          <Menu isActive={menuActive} setIsActive={setMenuActive} />
        </div>
      )}
      <div className="center-wrap">
        <NavLink className="header-title" to="/">
          Gabe.dev log
        </NavLink>
        <div className={classNames('page-navi', { isFixed })}>
          <NavLink className="navi" to="/posts">
            Posts
          </NavLink>
          <NavLink className="navi" to="/profile">
            Profile
          </NavLink>
          <NavLink className="navi" to="/history">
            History
          </NavLink>
        </div>
      </div>
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
