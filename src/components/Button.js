/* eslint-disable no-return-assign */
import React from 'react';
import './button.css';

function Button(props) {
  const { onClick, text, variant } = props;

  let className = 'button';
  if (variant === 'outline') {
    className = 'button-outline';
  }

  return (
    <div>
      <button type="button" onClick={onClick} className={className}>
        {text}
      </button>
    </div>
  );
}

export default Button;
