import React, { useState } from 'react'
import Caption from '../../../components/Caption'
import { GroupOutlined } from '@ant-design/icons'
import { useParams } from 'react-router-dom'
import GetRequest from '../../../service/GetRequest'
import CustomTable from '../../../components/CustomTable'
import { getGroups } from '../../../service/GetGroups'
import { Input } from 'antd'
import FilterCustom from "../../../components/FilterCustom"

const Groups = () => {
    const {stackId} = useParams()
    const [isLoading, setIsLoading] = useState(false)
    const [refresh, setRefresh] = useState(false)
    const [teacherId, setTeacherId] = useState(null)
    const {name} = GetRequest(`/stack/${stackId}`)

    const columns = [
        {
          title:"ID",
          dataIndex: "key"
        },
        {
          title:"Gurux nomi",
          dataIndex: "name"
        },
        {
          title:"O'quvchilar soni",
          dataIndex: "studentCount"
        },
        {
          title:"Asosiy ustoz",
          dataIndex: "mainTeacher"
        },
        {
          title:"Yordamchi ustoz",
          dataIndex: "supportTeacher"
        },
        {
          title:"Xona",
          dataIndex: "room"
        },
        {
          title:"Holati",
          dataIndex: "status"
        },
        {
            title:"Boshlangan vaqt",
            dataIndex: "createdAt"
        },
        {
            title:"Batafsil",
            dataIndex: "action"
        }
    ]

    const [groups, setGroups] = useState([])
    getGroups(stackId, refresh, setGroups, teacherId)

    // Search Part
  function handleSearchByName(e){
    setIsLoading(true)
    const SearchName = groups.filter(item => item.name.toLowerCase().includes(e.target.value.toLowerCase()))
    if(e.target.value){
      setTimeout(() => {
        setIsLoading(false)
        setGroups(SearchName)
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
  return (
    <div className='p-5'>
        <Caption isBack={true} title={name} icon={<GroupOutlined />} count={5}/>
        <div className='my-5 flex gap-5'>
            <Input onChange={handleSearchByName} className='!w-[370px]' size='large' placeholder='Qidirish...' allowClear/> 
            <FilterCustom  API={`/teachers?stackId=${stackId}`} filterId={teacherId} setFilterId={setTeacherId} placeholder={"Ustoz bo'yicha saralash"} extraClass={"!w-[370px]"}/>
        </div>
        <CustomTable isLoading={isLoading} columns={columns} data={groups}/>
    </div>
  )
}

export default Groups