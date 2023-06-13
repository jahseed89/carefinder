import React from 'react'
import './button.scss'

const Button = ({btnText, clickHandler, className="my-btn"}) => {
  return (
    <button onClick={clickHandler} className={className}>{btnText}</button>
  )
}

export default Button