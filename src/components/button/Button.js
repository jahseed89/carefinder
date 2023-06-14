import React from 'react'
import './button.scss'

const Button = ({btnText, clickHandler, className="my-btn", type}) => {
  return (
    <button onClick={clickHandler} className={className} type={type}>{btnText}</button>
  )
}

export default Button