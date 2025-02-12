import React from 'react'
import { useEffect } from "react"
import { instance } from "../hooks/instance"
import { LineOutlined, MoreOutlined } from "@ant-design/icons"
import { Button } from "antd"
import { Link, useNavigate } from 'react-router-dom'

export const getTeachers = (stackId, refresh, setTeachers, ) => {
    const navigate = useNavigate()
    useEffect(() => {
        instance().get("/teachers", {
          params:{stackId}
        }).then(res => {
            setTeachers( res.data.map((item, index) => {
          item.key = index + 1
          item.phone = <Link className='text-[16px] !text-black hover:!text-blue-500 duration-300' to={`tel:${item.phone}`}>{item.phone}</Link>
          item.name = item.name ? item.name : <LineOutlined/>
          item.age = item.age ? item.age : <LineOutlined/>
          item.stack = item.stack ? item.stack : <LineOutlined/>
          item.action = <Button onClick={() => navigate(`${item.id}`)} className='w-[32px] h-[32px]' type='primary' size='middle'><MoreOutlined className='rotate-90'/></Button>
          return item
        }))
        })
    },[refresh, stackId])
} 