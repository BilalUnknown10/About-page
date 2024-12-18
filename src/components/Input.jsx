/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'

function Input({text,placeholder,className}) {
  return (
    <div>
      <input type={text} placeholder={placeholder} className={ `py-2 rounded-full px-4 w-full my-3 ${className}`} />
    </div>
  )
}

export default Input
