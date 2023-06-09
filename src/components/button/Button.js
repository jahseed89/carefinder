import React from 'react'
import './button.scss'

const Button = ({btnText, clickHandler}) => {
  return (
    <button onClick={clickHandler} className='my-btn'>{btnText}</button>
  )
}

export default Button