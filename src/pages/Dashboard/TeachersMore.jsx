import { ArrowLeftOutlined, DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import GetRequest from '../../service/GetRequest'

const TeachersMore = () => {
  const {id} = useParams()
  const navigate = useNavigate()
  const singleData = GetRequest(`/teachers/${id}`, true)
  console.log(singleData);
  return (
    <div className='p-5'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <button onClick={() => navigate(-1)} className='cursor-pointer' type='button'><ArrowLeftOutlined className='text-[22px]'/></button>
          <h2 className='font-bold text-[25px]'>{singleData.name}</h2>
        </div>
        <div className='flex items-center gap-3'>
            <Button className='!bg-red-700' type='primary' size='large'><DeleteOutlined  className='text-[22px]'/></Button>
            <Button onClick={() => navigate("edit")} size='large' type='primary' icon={<EditOutlined className='text-[22px]'/>}>Tahrirlash</Button>
        </div>
      </div>
    </div>
  )
}

export default TeachersMore