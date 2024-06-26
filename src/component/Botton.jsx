import React from 'react'

function Botton({children, type= 'button', bgColor='text-white', className='', ...props}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${className} ${textColor} ${bgColor}`} {...props}>{children}</button>
  )
}

export default Botton