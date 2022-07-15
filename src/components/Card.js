import React from 'react';
import './card.css';

function Card(props) {
  const { children } = props;
  return <div className="Card">{children} </div>;
}

export default Card;
