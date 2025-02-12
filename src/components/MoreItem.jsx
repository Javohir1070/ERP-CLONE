import React from 'react'

const MoreItem = ({title, value}) => {
  return (
    <li className='flex flex-col'>
        <span className='text-[15px] text-slate-400'>{title}</span>
        <strong className='text-[20px]'>{value}</strong>
    </li>
  )
}

export default MoreItem