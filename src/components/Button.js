import React from 'react';
import './button.css';

function Button(props) {
  const { onClick, text } = props;
  return (
    <div>
      <button type="button" onClick={onClick} className="button">
        {text}
      </button>
    </div>
  );
}

export default Button;
