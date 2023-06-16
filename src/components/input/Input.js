import React from 'react'

const Input = ({type, value, placeholder, onChange, handleInput}) => {
  return (
   <input type={type} value={value} placeholder={placeholder} onClick={handleInput} onChange={onChange} />
  )
}
export default Input