import React, { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';

import './Input.scss';

interface I_props {
  value: string;
  type?: 'password' | 'text';
  className?: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (value: string) => void;
}

export const Input: React.FC<I_props> = ({ value, onChange, type, className }): JSX.Element => {
  const [lineHeight, setLineHeight] = useState<number>(30);
  const inputEL = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputEL) setLineHeight(inputEL?.current?.clientHeight || 30);
  }, [inputEL]);

  return (
    <div className={classNames('custom_input_wrap', { [className as string]: className })}>
      <input
        ref={inputEL}
        style={{ lineHeight, height: lineHeight }}
        className="custom_input"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
      />
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  className: '',
};
