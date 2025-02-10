import React, {  useState } from 'react'
import Caption from "../../components/Caption"
import {  UserAddOutlined } from '@ant-design/icons'
import {  Input  } from 'antd'
import CustomTable from '../../components/CustomTable'
import {PATH} from "../../hooks/path"
import FilterCustom from '../../components/FilterCustom'
import { getTeachers } from '../../service/GetTeachers'

const Teachers = () => {
  const [stackId, setStackId] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const [teachers, setTeachers] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const columns = [
    {
      title:"ID",
      dataIndex: "key"
    },
    {
      title:"Ustoz ismi",
      dataIndex: "name"
    },
    {
      title:"Ustoz yoshi",
      dataIndex: "age"
    },
    {
      title:"Yo'nalishi",
      dataIndex: "stack"
    },
    {
      title:"Ustoz lavozimi",
      dataIndex: "status"
    },
    {
      title:"Ustoz raqami",
      dataIndex: "phone"
    },
    {
      title:"Batafsil",
      dataIndex: "action"
    }
  ]

  // Search Part
  function handleSearchByName(e){
    setIsLoading(true)
    const SearchName = teachers.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if(e.target.value){
      setTimeout(() => {
        setIsLoading(false)
        setTeachers(SearchName)
      },1000)
    }
    else{
      setTimeout(() => {
        setIsLoading(false)
        setRefresh(!refresh)
      },1000)
    }
  }

  // Search Part
  getTeachers(stackId, refresh, setTeachers, teachers)

  return (
    <div className='p-5'>
      <Caption addLink={PATH.teachersAdd} title={"Ustozlar"} icon={<UserAddOutlined/>} count={3}/>
      <div className='mt-5 flex gap-10'>
          <label className='flex flex-col'>
            <span className='text-[15px] text-slate-400 pl-1 mb-1'>Qidirish</span>
            <Input onChange={handleSearchByName} className='!w-[350px]' size='large' allowClear placeholder='Qidirish...'/>
          </label>
          <label className='flex flex-col'>
            <span className='text-[15px] text-slate-400 pl-1 mb-1'>Choose stack</span>
            <FilterCustom API={"/stack"} filterId={stackId} setFilterId={setStackId} extraClass={'w-[350px]'} placeholder={"Stackni tanlang"}/>
          </label>
      </div>
      <div className='mt-5'>
        <CustomTable isLoading={isLoading} columns={columns} data={teachers}/>
      </div>
    </div>
  )
}

export default Teachers