import React from 'react'

const Input = ({type, placeholder, onChange, handleInput}) => {
  return (
   <input type={type} placeholder={placeholder} onClick={handleInput} onChange={onChange} />
  )
}

export default Input