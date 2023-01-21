/* eslint-disable no-return-assign */
import React from 'react';
import './button.css';

function Button(props) {
  const { onClick, text, variant, size, children, fullWidth } = props;

  let className = 'button';
  if (variant === 'outline') {
    className += ' button-outline';
  }
  if (size === 'small') {
    className += ' small';
  }
  if (size === 'xs') {
    className += ' xs';
  }
  if (fullWidth) {
    className += ' full-width';
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {text || children}
    </button>
  );
}

export default Button;
