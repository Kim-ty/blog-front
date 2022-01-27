import classNames from 'classnames';
import React, { useEffect, useRef } from 'react';
import Category from './Category';

import './Menu.scss';

interface I_Props {
  isActive: boolean;
  // eslint-disable-next-line no-unused-vars
  setIsActive: (active: boolean) => void;
}

const Menu: React.FC<I_Props> = ({ isActive, setIsActive }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const clickOutsideHandler = (e: MouseEvent): void => {
      const clickTarget = menuRef.current && menuRef.current.contains(e.target as HTMLElement);
      // eslint-disable-next-line no-useless-return
      if (!!isActive && !clickTarget) setIsActive(false);
    };

    document.addEventListener('click', clickOutsideHandler);
    if (isActive) document.body.style.overflowY = 'hidden';
    else document.body.style.overflowY = 'unset';
    return (): void => document.removeEventListener('click', clickOutsideHandler);
  }, [isActive]);

  return (
    <div id="Menu">
      <div className={classNames('menu-wrap', { isActive })}>
        <div className="menu-contents" ref={menuRef}>
          <Category />
        </div>
        <div className="menu-back" />
      </div>
    </div>
  );
};

export default Menu;
