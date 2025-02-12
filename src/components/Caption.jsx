import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Caption = ({icon, title, count, addLink, isBack}) => {
  const navigate = useNavigate()
  return (
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-[20px]'>
        {isBack &&  <button className='cursor-pointer' type='button' onClick={() => navigate(-1)}><ArrowLeftOutlined className='text-[25px]'/></button>}
        <div>
           <h2 className='font-bold text-[25px]'>{title}</h2>
           <p className='text-[15px] text-slate-400 lowercase'>{title} {count} ta</p>
        </div>
      </div>
      <Button onClick={() => navigate(`${addLink}`)} htmlType='button' size='large' type='primary' icon={icon}>Qo'shish</Button>
    </div>
  )
}

export default Caption