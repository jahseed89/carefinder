import React from 'react'
import { IoIosEyeOff } from "react-icons/io";
import './input.scss'

const Input = ({type, value, placeholder, onChange, handleInput, passwordIcon = false, passwordIconHandler}) => {
  return (
  <div>
    <input type={type} value={value} placeholder={placeholder} onClick={handleInput} onChange={onChange} className='input' />
    {passwordIcon && (
      <span className="password-icon" onClick={passwordIconHandler}><IoIosEyeOff /></span>
    )}
  </div>
  )
}
export default Input