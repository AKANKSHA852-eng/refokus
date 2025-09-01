import React from 'react';
import { BsArrowReturnRight } from "react-icons/bs";

function Button() {
  return (
    <div className='min-w-40 px-4 py-2 bg-zinc-100 text-black rounded-full flex items-centre justify-between'>
        <span className='text-sm font-medium'> Get Started</span>
        <BsArrowReturnRight/>
    </div>
  )
}

export default Button