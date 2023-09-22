import React from 'react'
import './Button.css'

const Button = ({name}) => {
  return (
    <div className="button">
      <p>{name}</p>
    </div>
  );
}

export default Button