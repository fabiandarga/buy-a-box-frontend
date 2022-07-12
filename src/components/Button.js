import React from 'react'
import './button.css' 

function Button(props)    { 
 
  return (
    <div>  
      <button onClick={props.onClick} className="button">{props.text}</button>
    </div>
  ) 
  
}

export default Button