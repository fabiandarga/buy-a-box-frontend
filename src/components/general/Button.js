/* eslint-disable no-return-assign */
import React from 'react';
import './button.css';

function Button(props) {
  const { onClick, text, variant, size, children } = props;

  let className = 'button';
  if (variant === 'outline') {
    className = 'button-outline';
  }
  if (size === 'small') {
    className += ' small';
  }

  return (
    <div>
      <button type="button" onClick={onClick} className={className}>
        {text || children}
      </button>
    </div>
  );
}

export default Button;
