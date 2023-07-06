import React from 'react'
import { IoIosEyeOff } from "react-icons/io";
import './input.scss'

const Input = ({type, value, placeholder, onChange, handleInput, name, passwordIcon = false, passwordIconHandler}) => {
  return (
  <>
    <input type={type} value={value} placeholder={placeholder} onClick={handleInput} onChange={onChange} name={name} className='input' />
    {passwordIcon && (
      <span className="password-icon" onClick={passwordIconHandler}><IoIosEyeOff /></span>
    )}
  </>
  )
}
export default Input